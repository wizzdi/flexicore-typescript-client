import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { DynamicInvokerEmailRequest } from '../model/dynamicInvokerEmailRequest';
import { DynamicInvokerEmailResponse } from '../model/dynamicInvokerEmailResponse';
export declare class DynamicInvokerEmailService {
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
    sendEmail(authenticationKey?: string, body?: DynamicInvokerEmailRequest, observe?: 'body', reportProgress?: boolean): Observable<DynamicInvokerEmailResponse>;
    sendEmail(authenticationKey?: string, body?: DynamicInvokerEmailRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DynamicInvokerEmailResponse>>;
    sendEmail(authenticationKey?: string, body?: DynamicInvokerEmailRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DynamicInvokerEmailResponse>>;
}
