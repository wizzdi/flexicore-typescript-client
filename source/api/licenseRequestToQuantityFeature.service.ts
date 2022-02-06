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


import { LicenseRequestToQuantityFeature } from '../model/licenseRequestToQuantityFeature';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { FlexiCoreDecycle } from './api';
import { LicenseRequestToFeatureCreate, LicenseRequestToFeatureUpdate, PaginationResponse, LicenseRequestToFeatureFiltering } from '../model/models';


@Injectable()
export class LicenseRequestToQuantityFeatureService {

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



     /**
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllLicenseRequestToFeatures(authenticationkey?: string, body?: LicenseRequestToFeatureFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<LicenseRequestToQuantityFeature>>;
    public getAllLicenseRequestToFeatures(authenticationkey?: string, body?: LicenseRequestToFeatureFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<LicenseRequestToQuantityFeature>>>;
    public getAllLicenseRequestToFeatures(authenticationkey?: string, body?: LicenseRequestToFeatureFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<LicenseRequestToQuantityFeature>>>;
    public getAllLicenseRequestToFeatures(authenticationkey?: string, body?: LicenseRequestToFeatureFiltering, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<PaginationResponse<LicenseRequestToQuantityFeature>>(`${this.basePath}/licenseRequestToQuantityFeatures/getAllLicenseRequestToFeatures`,
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
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateLicenseRequestToFeature(authenticationkey?: string,body?: LicenseRequestToFeatureUpdate, observe?: 'body', reportProgress?: boolean): Observable<LicenseRequestToQuantityFeature>;
    public updateLicenseRequestToFeature(authenticationkey?: string,body?: LicenseRequestToFeatureUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LicenseRequestToQuantityFeature>>;
    public updateLicenseRequestToFeature(authenticationkey?: string,body?: LicenseRequestToFeatureUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LicenseRequestToQuantityFeature>>;
    public updateLicenseRequestToFeature(authenticationkey?: string,body?: LicenseRequestToFeatureUpdate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.put<LicenseRequestToQuantityFeature>(`${this.basePath}/licenseRequestToQuantityFeatures/updateLicenseRequestToFeature`,
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
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createLicenseRequestToFeature(authenticationkey?: string,body?: LicenseRequestToFeatureCreate, observe?: 'body', reportProgress?: boolean): Observable<LicenseRequestToQuantityFeature>;
    public createLicenseRequestToFeature(authenticationkey?: string,body?: LicenseRequestToFeatureCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LicenseRequestToQuantityFeature>>;
    public createLicenseRequestToFeature(authenticationkey?: string,body?: LicenseRequestToFeatureCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LicenseRequestToQuantityFeature>>;
    public createLicenseRequestToFeature(authenticationkey?: string,body?: LicenseRequestToFeatureCreate, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<LicenseRequestToQuantityFeature>(`${this.basePath}/licenseRequestToQuantityFeatures/createLicenseRequestToFeature`,
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
