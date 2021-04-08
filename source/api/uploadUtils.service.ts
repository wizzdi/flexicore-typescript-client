import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import * as SparkMD5 from 'spark-md5';
import { Configuration } from '../configuration';
import { Upload } from '../model/upload';
import { UploadService } from './upload.service';
import { FileResource } from '..';
import { Observable, defer } from 'rxjs';

@Injectable()
export class UploadUtilsService {
    protected basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(private uploadService: UploadService) {
    }

    public upload(authenticationKey: string, body: Upload, onProgress?: (progress: any) => void, extraHttpRequestParams?: any): Observable<FileResource> {
        return defer(async () => {
            let { file, name, chunkSize, chunkMd5 } = body;
            let chunkMD5String;
            let lastChunk = false;

            if (!chunkSize) { // if chunk size is not defined by the user in request body
                chunkSize = 2097152; //2MB
            }

            // calculating the MD5 hash of the complete file
            const md5 = await this.computeChecksumMd5(file);
            // checking if the file was already uploaded using the calculated MD5 hash
            const offsetFileResource = await this.uploadService.getFileResource(md5, authenticationKey).toPromise();
            // getting the size of already uploaded file
            const offset = offsetFileResource ? offsetFileResource.offset : 0;

            if (offset >= file.size) { // file is already completely uploaded
                return offsetFileResource;
            }

            for (let start = offset; start < file.size; start += chunkSize) {
                const chunk = file.slice(start, start + chunkSize);

                if (name === undefined || name === null) { // if user has not specified filename in request body
                    // use the uploaded file's original name
                    name = file.name;
                }

                if (chunkMd5) { // if need to calculate MD5 of each chunk, as specified in request body
                    const chunkFile = new File([chunk], file.name);
                    // calculating MD5 hash of the current chunk
                    chunkMD5String = await this.computeChecksumMd5(chunkFile);
                }

                if ((start + chunkSize) >= file.size) { // this is the last chunk
                    // either the total file size is less than chunk size
                    // or most of the file was already uploaded and only 1 last chunk needs to be uploaded
                    lastChunk = true;
                }

                // uploading chunk
                const response = await this.uploadService.uploadFileWithChunkMd5(
                    authenticationKey,
                    md5,
                    name,
                    chunkMD5String,
                    lastChunk,
                    chunk,
                    extraHttpRequestParams
                ).toPromise();

                // sending progress via callback

                const progress = Math.round((response.offset / file.size) * 100);

                if (onProgress) {
                    onProgress(progress + '%');
                }

                if (lastChunk) {
                    // if file is uploaded completely, return the complete fileResource
                    return response;
                }
            }
        });
    }

    computeChecksumMd5(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const chunkSize = 2097152;
            const spark = new SparkMD5.ArrayBuffer();
            const fileReader = new FileReader();

            let cursor = 0;

            fileReader.onerror = function (): void {
                reject('MD5 computation failed - error reading the file');
            };

            function processChunk(chunk_start: number): void {
                const chunk_end = Math.min(file.size, chunk_start + chunkSize);
                fileReader.readAsArrayBuffer(file.slice(chunk_start, chunk_end));
            }

            fileReader.onload = function (e: any): void {
                spark.append(e.target.result);
                cursor += chunkSize;

                if (cursor < file.size) {
                    processChunk(cursor);
                } else {
                    resolve(spark.end());
                }
            };

            processChunk(0);
        });
    }

}
