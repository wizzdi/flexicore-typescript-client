import { Injectable, Optional, Inject } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from "@angular/common/http";
import { Configuration } from "../configuration";
import { map, Observable } from "rxjs";
import { BASE_PATH } from "../variables";
import { FlexiCoreDecycle } from "./flexiCoreDecycle";
import { PaginationResponse } from "../model/paginationResponse";
import { ReportToEmailCreate } from "../model/reportToEmailCreate";
import { ReportToEmail } from "../model/reportToEmail";
import { ReportToEmailFilter } from "../model/reportToEmailFilter";
import { ReportToEmailUpdate } from "../model/reportToEmailUpdate";

@Injectable()
export class ReportToEmailService {

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

    public createReportToEmail(body?: ReportToEmailCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ReportToEmail>;
    public createReportToEmail(body?: ReportToEmailCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportToEmail>>;
    public createReportToEmail(body?: ReportToEmailCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportToEmail>>;
    public createReportToEmail(body?: ReportToEmailCreate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<ReportToEmail>(`${this.basePath}/ReportToEmail/createReportToEmail`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    public getAllReportToEmails(body?: ReportToEmailFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ReportToEmail>>;
    public getAllReportToEmails(body?: ReportToEmailFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ReportToEmail>>>;
    public getAllReportToEmails(body?: ReportToEmailFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ReportToEmail>>>;
    public getAllReportToEmails(body?: ReportToEmailFilter, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<PaginationResponse<ReportToEmail>>(`${this.basePath}/ReportToEmail/getAllReportToEmails`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    public updateReportToEmail(body?: ReportToEmailUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ReportToEmail>;
    public updateReportToEmail(body?: ReportToEmailUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportToEmail>>;
    public updateReportToEmail(body?: ReportToEmailUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportToEmail>>;
    public updateReportToEmail(body?: ReportToEmailUpdate, authenticationKey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.put<ReportToEmail>(`${this.basePath}/ReportToEmail/updateReportToEmail`,
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