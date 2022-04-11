/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V1.1.0
 * Contact: avishaybennatan@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { FlexiCoreDecycle } from './flexiCoreDecycle';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import { PaginationResponse } from '../model/models';
import {
    HttpClient, HttpHeaders, HttpResponse, HttpEvent
} from '@angular/common/http';
import { SecurityUser } from '../model/securityUser';
import { SecurityUserFilter } from '../model/securityUserFilter';
import { SecurityUserUpdate } from '../model/securityUserUpdate';
import { SecurityUserCreate } from '../model/securityUserCreate';


@Injectable()
export class SecurityUserService {

    protected basePath = 'https://169.254.121.191:8080/FlexiCore/rest';
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

    /**
     * getAll
     * lists all Invokers
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllSecurityUser(authenticationKey?: string, body?: SecurityUserFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<SecurityUser>>;
    public getAllSecurityUser(authenticationKey?: string, body?: SecurityUserFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<SecurityUser>>>;
    public getAllSecurityUser(authenticationKey?: string, body?: SecurityUserFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<SecurityUser>>>;
    public getAllSecurityUser(authenticationKey?: string, body?: SecurityUserFilter, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PaginationResponse<SecurityUser>>(`${this.basePath}/securityUser/getAll`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

       /**
     * createSecurityUser
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
        public createSecurityUser(authenticationKey?: string, body?: SecurityUserCreate, observe?: 'body', reportProgress?: boolean): Observable<SecurityUser>;
        public createSecurityUser(authenticationKey?: string, body?: SecurityUserCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityUser>>;
        public createSecurityUser(authenticationKey?: string, body?: SecurityUserCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityUser>>;
        public createSecurityUser(authenticationKey?: string, body?: SecurityUserCreate, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    
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
            ];
            const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
            if (httpContentTypeSelected != undefined) {
                headers = headers.set('Content-Type', httpContentTypeSelected);
            }
    
            return this.httpClient.post<SecurityUser>(`${this.basePath}/securityUser/create`,
                body,
                {
                    withCredentials: this.configuration.withCredentials,
                    headers: headers,
                    observe: observe,
                    reportProgress: reportProgress
                }
            ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
        }
  
  
          /**
       * updateSecurityUser
       * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
       * @param body 
       * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
       * @param reportProgress flag to report request and response progress.
       */
           public updateSecurityUser(authenticationKey?: string, body?: SecurityUserUpdate, observe?: 'body', reportProgress?: boolean): Observable<SecurityUser>;
           public updateSecurityUser(authenticationKey?: string, body?: SecurityUserUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityUser>>;
           public updateSecurityUser(authenticationKey?: string, body?: SecurityUserUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityUser>>;
           public updateSecurityUser(authenticationKey?: string, body?: SecurityUserUpdate, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
       
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
               ];
               const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
               if (httpContentTypeSelected != undefined) {
                   headers = headers.set('Content-Type', httpContentTypeSelected);
               }
       
               return this.httpClient.put<SecurityUser>(`${this.basePath}/securityUser/update`,
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
