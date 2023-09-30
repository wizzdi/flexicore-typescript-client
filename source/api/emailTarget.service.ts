import { Injectable, Optional, Inject } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from "@angular/common/http";
import { Configuration } from "../configuration";
import { map, Observable } from "rxjs";
import { BASE_PATH } from "../variables";
import { FlexiCoreDecycle } from "./flexiCoreDecycle";
import { PaginationResponse } from "../model/paginationResponse";
import { EmailTargetCreate } from "../model/emailTargetCreate";
import { EmailTarget } from "../model/emailTarget";
import { EmailTargetFilter } from "../model/emailTargetFilter";
import { EmailTargetUpdate } from "../model/emailTargetUpdate";

@Injectable()
export class EmailTargetService {

    protected basePath = '/FlexiCore';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    public createEmailTarget(body?: EmailTargetCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<EmailTarget>;
    public createEmailTarget(body?: EmailTargetCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EmailTarget>>;
    public createEmailTarget(body?: EmailTargetCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EmailTarget>>;
    public createEmailTarget(body?: EmailTargetCreate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<EmailTarget>(`${this.basePath}/EmailTarget/createEmailTarget`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    public getAllEmailTargets(body?: EmailTargetFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<EmailTarget>>;
    public getAllEmailTargets(body?: EmailTargetFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<EmailTarget>>>;
    public getAllEmailTargets(body?: EmailTargetFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<EmailTarget>>>;
    public getAllEmailTargets(body?: EmailTargetFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PaginationResponse<EmailTarget>>(`${this.basePath}/EmailTarget/getAllEmailTargets`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    public updateEmailTarget(body?: EmailTargetUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<EmailTarget>;
    public updateEmailTarget(body?: EmailTargetUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EmailTarget>>;
    public updateEmailTarget(body?: EmailTargetUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EmailTarget>>;
    public updateEmailTarget(body?: EmailTargetUpdate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<EmailTarget>(`${this.basePath}/EmailTarget/updateEmailTarget`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

}