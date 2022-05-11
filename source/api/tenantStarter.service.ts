import { Inject, Injectable, Optional } from '@angular/core';
import { FlexiCoreDecycle } from './flexiCoreDecycle';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { RolesUserRequest } from '../model/rolesUserRequest';
import { RolesUserResponse } from '../model/rolesUserResponse';



@Injectable()
export class TenantStarterService {

    protected basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
    public defaultHeaders = new HttpHeaders();
    public configuration: Configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    public getRolesForUser(authenticationkey?: string, body?: RolesUserRequest, observe?: 'body', reportProgress?: boolean): Observable<RolesUserResponse[]>;
    public getRolesForUser(authenticationkey?: string, body?: RolesUserRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RolesUserResponse[]>>;
    public getRolesForUser(authenticationkey?: string, body?: RolesUserRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RolesUserResponse[]>>;
    public getRolesForUser(authenticationkey?: string, body?: RolesUserRequest, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<RolesUserResponse[]>(`${this.basePath}/TenantStarter/getRolesForUser`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }
}
