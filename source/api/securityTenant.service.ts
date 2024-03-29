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
import { SecurityTenant } from '../model/securityTenant';
import { SecurityTenantFilter } from '../model/securityTenantFilter';
import { SecurityTenantUpdate } from '../model/securityTenantUpdate';
import { SecurityTenantCreate } from '../model/securityTenantCreate';


@Injectable()
export class SecurityTenantService {

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
    public getAllSecurityTenant(body?: SecurityTenantFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<SecurityTenant>>;
    public getAllSecurityTenant(body?: SecurityTenantFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<SecurityTenant>>>;
    public getAllSecurityTenant(body?: SecurityTenantFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<SecurityTenant>>>;
    public getAllSecurityTenant(body?: SecurityTenantFilter, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

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

        return this.httpClient.post<PaginationResponse<SecurityTenant>>(`${this.basePath}/securityTenant/getAll`,
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
     * createSecurityTenant
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
        public createSecurityTenant(body?: SecurityTenantCreate, observe?: 'body', reportProgress?: boolean): Observable<SecurityTenant>;
        public createSecurityTenant(body?: SecurityTenantCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityTenant>>;
        public createSecurityTenant(body?: SecurityTenantCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityTenant>>;
        public createSecurityTenant(body?: SecurityTenantCreate, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    
            let headers = this.defaultHeaders;
    
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
    
            return this.httpClient.post<SecurityTenant>(`${this.basePath}/securityTenant/create`,
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
       * updateSecurityTenant
       * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
       * @param body 
       * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
       * @param reportProgress flag to report request and response progress.
       */
           public updateSecurityTenant(body?: SecurityTenantUpdate, observe?: 'body', reportProgress?: boolean): Observable<SecurityTenant>;
           public updateSecurityTenant(body?: SecurityTenantUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SecurityTenant>>;
           public updateSecurityTenant(body?: SecurityTenantUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SecurityTenant>>;
           public updateSecurityTenant(body?: SecurityTenantUpdate, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
       
               let headers = this.defaultHeaders;
       
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
       
               return this.httpClient.put<SecurityTenant>(`${this.basePath}/securityTenant/update`,
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
