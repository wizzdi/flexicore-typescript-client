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
import { Observable } from 'rxjs';
import { Clazz } from '../model/clazz';
import { Configuration } from '../configuration';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
export declare class ClazzService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj;
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * Get a list of all Operations defined for the this Class, Some Operations have meaning with some Classes only
     * @summary Get all Operations
     * @param clazzName The canonical classname of the link required
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getAllOperations(clazzName: string, authenticationkey?: string, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<any>;
    getAllOperations(clazzName: string, authenticationkey?: string, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    getAllOperations(clazzName: string, authenticationkey?: string, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Returns a list of ClazzLinkContainer instances of the given link(!) canonical name
     * @summary Get a list of all associations
     * @param clazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getAssociations(clazzName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<any>;
    /**
     * Return a concrete instance of type Clazz, every type in the system including those created by Plug-ins have a concrete instance of Clazz type describing it.
     * @summary Get a Clazz instance from a canonical name
     * @param clazzName The canonical classname for which the instance is required
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getClazz(clazzName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Clazz>;
    /**
     * Get all Operations
     * Get a list of all Operations defined for the this Class, Some Operations have meaning with some Classes only
     * @param clazzName The canonical classname of the link required
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getAllOperationsWithHttpInfo(clazzName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get a list of all associations
     * Returns a list of ClazzLinkContainer instances of the given link(!) canonical name
     * @param clazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getAssociationsWithHttpInfo(clazzName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get a Clazz instance from a canonical name
     * Return a concrete instance of type Clazz, every type in the system including those created by Plug-ins have a concrete instance of Clazz type describing it.
     * @param clazzName The canonical classname for which the instance is required
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getClazzWithHttpInfo(clazzName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Field Containers per class
     * get a list of all FieldContainers per class, use it for the creation of a new instance and for updating one
     * @param clazzName The canonical name of the Class for which the list is to be obtained
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getFieldsWithHttpInfo(clazzName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
}
