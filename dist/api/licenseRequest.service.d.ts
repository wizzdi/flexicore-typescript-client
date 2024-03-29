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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LicenseRequest } from '../model/licenseRequest';
import { Configuration } from '../configuration';
import { LicenseRequestCreate, LicenseRequestUpdate, LicenseRequestFiltering, PaginationResponse } from '../model/models';
export declare class LicenseRequestService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
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
    getAllLicenseRequests(authenticationkey?: string, body?: LicenseRequestFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<LicenseRequest>>;
    getAllLicenseRequests(authenticationkey?: string, body?: LicenseRequestFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<LicenseRequest>>>;
    getAllLicenseRequests(authenticationkey?: string, body?: LicenseRequestFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<LicenseRequest>>>;
    /**
    *
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    * @param body
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    updateLicenseRequest(authenticationkey?: string, body?: LicenseRequestUpdate, observe?: 'body', reportProgress?: boolean): Observable<LicenseRequest>;
    updateLicenseRequest(authenticationkey?: string, body?: LicenseRequestUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LicenseRequest>>;
    updateLicenseRequest(authenticationkey?: string, body?: LicenseRequestUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LicenseRequest>>;
    /**
    *
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    * @param body
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    createLicenseRequest(authenticationkey?: string, body?: LicenseRequestCreate, observe?: 'body', reportProgress?: boolean): Observable<LicenseRequest>;
    createLicenseRequest(authenticationkey?: string, body?: LicenseRequestCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LicenseRequest>>;
    createLicenseRequest(authenticationkey?: string, body?: LicenseRequestCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LicenseRequest>>;
}
