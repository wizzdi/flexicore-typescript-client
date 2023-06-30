import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable }                                      from 'rxjs';

import { BASE_PATH }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { FlexiCoreDecycle } from './api';
import { PaginationResponse, RoleToUser } from '../model/models';
import { RoleToUserCreate } from '../model/roleToUserCreate';
import { RoleToUserFiltering } from '../model/roleToUserFiltering';
import { RoleToUserUpdate } from '../model/roleToUserUpdate';


@Injectable()
export class RoleToUserService {

    protected basePath = 'https://192.168.14.71:8180/FlexiCore/rest';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    public createRoleToUser(authenticationkey?: string, body?: RoleToUserCreate, observe?: 'body', reportProgress?: boolean): Observable<RoleToUser>;
    public createRoleToUser(authenticationkey?: string, body?: RoleToUserCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleToUser>>;
    public createRoleToUser(authenticationkey?: string, body?: RoleToUserCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleToUser>>;
    public createRoleToUser(authenticationkey?: string, body?: RoleToUserCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
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

        return this.httpClient.post<RoleToUser>(`${this.basePath}/roleToUser/create`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    public getAllRoleToUser(authenticationkey?: string, body?: RoleToUserFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<RoleToUser>>;
    public getAllRoleToUser(authenticationkey?: string, body?: RoleToUserFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<RoleToUser>>>;
    public getAllRoleToUser(authenticationkey?: string, body?: RoleToUserFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<RoleToUser>>>;
    public getAllRoleToUser(authenticationkey?: string, body?: RoleToUserFiltering, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
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

        return this.httpClient.post<PaginationResponse<RoleToUser>>(`${this.basePath}/roleToUser/getAll`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    public updateRoleToUser(authenticationkey?: string, body?: RoleToUserUpdate, observe?: 'body', reportProgress?: boolean): Observable<RoleToUser>;
    public updateRoleToUser(authenticationkey?: string, body?: RoleToUserUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleToUser>>;
    public updateRoleToUser(authenticationkey?: string, body?: RoleToUserUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleToUser>>;
    public updateRoleToUser(authenticationkey?: string, body?: RoleToUserUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
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

        return this.httpClient.put<RoleToUser>(`${this.basePath}/roleToUser/update`,
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
