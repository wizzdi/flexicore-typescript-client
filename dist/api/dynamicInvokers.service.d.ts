import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { ExportDynamicInvokerToCSVRequest } from '../model/exportDynamicInvokerToCSVRequest';
import { ExportDynamicInvokerToCSVResponse } from '../model/exportDynamicInvokerToCSVResponse';
export declare class DynamicInvokersService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    exportDynamicInvokerToCSV(authenticationKey?: string, body?: ExportDynamicInvokerToCSVRequest, observe?: 'body', reportProgress?: boolean): Observable<ExportDynamicInvokerToCSVResponse>;
    exportDynamicInvokerToCSV(authenticationKey?: string, body?: ExportDynamicInvokerToCSVRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ExportDynamicInvokerToCSVResponse>>;
    exportDynamicInvokerToCSV(authenticationKey?: string, body?: ExportDynamicInvokerToCSVRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ExportDynamicInvokerToCSVResponse>>;
}
