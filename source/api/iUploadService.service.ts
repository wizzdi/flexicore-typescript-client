import { Observable } from "rxjs";
import { FileResource } from "..";

export interface IUploadService{
    getFileResource(md5: string, extraHttpRequestParams?: any): Observable<FileResource>;
    uploadFileWithChunkMd5(md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, extraHttpRequestParams?: any): Observable<FileResource>;

}