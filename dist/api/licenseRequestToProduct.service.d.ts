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
import { LicenseRequestToProduct } from '../model/licenseRequestToProduct';
import { Configuration } from '../configuration';
import { LicenseRequestToProductCreate, LicenseRequestToProductUpdate, PaginationResponse, LicenseRequestToProductFiltering } from '../model/models';
export declare class LicenseRequestToProductService {
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
    getAllLicenseRequestToProducts(authenticationkey?: string, body?: LicenseRequestToProductFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<LicenseRequestToProduct>>;
    getAllLicenseRequestToProducts(authenticationkey?: string, body?: LicenseRequestToProductFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<LicenseRequestToProduct>>>;
    getAllLicenseRequestToProducts(authenticationkey?: string, body?: LicenseRequestToProductFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<LicenseRequestToProduct>>>;
    /**
    *
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    * @param body
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    updateLicenseRequestToProduct(authenticationkey?: string, body?: LicenseRequestToProductUpdate, observe?: 'body', reportProgress?: boolean): Observable<LicenseRequestToProduct>;
    updateLicenseRequestToProduct(authenticationkey?: string, body?: LicenseRequestToProductUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LicenseRequestToProduct>>;
    updateLicenseRequestToProduct(authenticationkey?: string, body?: LicenseRequestToProductUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LicenseRequestToProduct>>;
    /**
    *
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    * @param body
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    createLicenseRequestToProduct(authenticationkey?: string, body?: LicenseRequestToProductCreate, observe?: 'body', reportProgress?: boolean): Observable<LicenseRequestToProduct>;
    createLicenseRequestToProduct(authenticationkey?: string, body?: LicenseRequestToProductCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LicenseRequestToProduct>>;
    createLicenseRequestToProduct(authenticationkey?: string, body?: LicenseRequestToProductCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LicenseRequestToProduct>>;
}
