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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable }                                      from 'rxjs';


import { FilteringInformationHolder } from '../model/filteringInformationHolder';
import { NewUserUserClass } from '../model/newUserUserClass';
import { ResetUserPasswordRequest } from '../model/resetUserPasswordRequest';
import { RunningUser } from '../model/runningUser';
import { UserClass } from '../model/userClass';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { FlexiCoreDecycle } from './api';
import { UserProfileRequest } from '../model/userProfileRequest';
import { UserProfile } from '../model/userProfile';
import { UserCreate, UserUpdate, UserFiltering, PaginationResponse, ImpersonateRequest, ImpersonateResponse, Baselink, Baseclass, PermissionSummaryRequest, PermissionSummaryResponse } from '../model/models';
import { BaselinkFilter } from '../model/baselinkFilter';
import { GetConnected } from '../model/getConnected';
import { GetDisconnected } from '../model/getDisconnected';
import { BaselinkUpdate } from '../model/baselinkUpdate';
import {  BaselinkMassCreate } from '../model/baselinkMassCreate';
import { BaselinkCreate } from '../model/baselinkCreate';


@Injectable()
export class SecurityService {

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

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    public getPermissionsSummary(authenticationkey?: string, body?: PermissionSummaryRequest, observe?: 'body', reportProgress?: boolean): Observable<PermissionSummaryResponse>;
    public getPermissionsSummary(authenticationkey?: string, body?: PermissionSummaryRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PermissionSummaryResponse>>;
    public getPermissionsSummary(authenticationkey?: string, body?: PermissionSummaryRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PermissionSummaryResponse>>;
    public getPermissionsSummary(authenticationkey?: string, body?: PermissionSummaryRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<PermissionSummaryResponse>(`${this.basePath}/security/getPermissionsSummary`,
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
