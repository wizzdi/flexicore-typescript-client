import { Configuration } from '../configuration';
import { Upload } from '../model/upload';
import { FileResource } from '../model/fileResource';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { IUploadService } from './iUploadService.service';
export declare class UploadUtilsService {
    private uploadService;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(uploadService: IUploadService);
    upload(authenticationKey: string, body: Upload, onProgress?: (progress: any) => void, extraHttpRequestParams?: any): Observable<FileResource>;
    computeChecksumMd5(file: File): Promise<string>;
}
