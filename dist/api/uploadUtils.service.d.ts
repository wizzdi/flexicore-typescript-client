import { Headers } from '@angular/http';
import { Configuration } from '../configuration';
import { Upload } from '../model/upload';
import { UploadService } from './upload.service';
import { FileResource } from '..';
import { Observable } from 'rxjs';
export declare class UploadUtilsService {
    private uploadService;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(uploadService: UploadService);
    upload(authenticationKey: string, body: Upload, onProgress?: (progress: any) => void, extraHttpRequestParams?: any): Observable<FileResource>;
    computeChecksumMd5(file: File): Promise<string>;
}
