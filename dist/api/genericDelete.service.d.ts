import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { DeleteObjectRequests } from '../model/deleteObjectRequests';
import { DeleteResponse } from '../model/deleteResponse';
export declare class GenericDeleteService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj;
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * softDelete
     * softDeletes all requested objects
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param observe set whether to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    softDelete(authenticationKey?: string, body?: DeleteObjectRequests, observe?: 'body', reportProgress?: boolean): Observable<DeleteResponse>;
    softDelete(authenticationKey?: string, body?: DeleteObjectRequests, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeleteResponse>>;
    softDelete(authenticationKey?: string, body?: DeleteObjectRequests, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeleteResponse>>;
}
