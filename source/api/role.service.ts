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
import { Role } from '../model/role';
import { RoleFilter } from '../model/roleFilter';
import { RoleCreate } from '../model/roleCreate';
import { RoleUpdate } from '../model/roleUpdate';


@Injectable()
export class RoleService {

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
    public getAllRole(body?: RoleFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<Role>>;
    public getAllRole(body?: RoleFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<Role>>>;
    public getAllRole(body?: RoleFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<Role>>>;
    public getAllRole(body?: RoleFilter, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.post<PaginationResponse<Role>>(`${this.basePath}/role/getAll`,
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
     * createRole
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
      public createRole(body?: RoleCreate, observe?: 'body', reportProgress?: boolean): Observable<Role>;
      public createRole(body?: RoleCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Role>>;
      public createRole(body?: RoleCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Role>>;
      public createRole(body?: RoleCreate, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
  
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
  
          return this.httpClient.post<Role>(`${this.basePath}/role/create`,
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
     * updateRole
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
         public updateRole(body?: RoleUpdate, observe?: 'body', reportProgress?: boolean): Observable<Role>;
         public updateRole(body?: RoleUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Role>>;
         public updateRole(body?: RoleUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Role>>;
         public updateRole(body?: RoleUpdate, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
     
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
     
             return this.httpClient.put<Role>(`${this.basePath}/role/update`,
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
