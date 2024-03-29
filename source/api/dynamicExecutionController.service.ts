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
import {
  HttpClient, HttpHeaders, HttpResponse, HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { PaginationResponse } from '../model/paginationResponse';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import { FlexiCoreDecycle } from './api';
import { CreateDynamicExecution, DynamicExecution, DynamicExecutionExampleRequest, DynamicExecutionFilter, ExecuteDynamicExecution, ExecuteInvokersResponse, UpdateDynamicExecution } from '..';


@Injectable()
export class DynamicExecutionControllerService {

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

  public createDynamicExecution(authenticationKey?: string, body?: CreateDynamicExecution, observe?: 'body', reportProgress?: boolean): Observable<DynamicExecution>;
  public createDynamicExecution(authenticationKey?: string, body?: CreateDynamicExecution, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DynamicExecution>>;
  public createDynamicExecution(authenticationKey?: string, body?: CreateDynamicExecution, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DynamicExecution>>;
  public createDynamicExecution(authenticationKey?: string, body?: CreateDynamicExecution, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.post<DynamicExecution>(`${this.basePath}/dynamicExecution/create`,
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
   * executeInvoker
   * executeInvoker
   * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
   * @param body 
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public executeDynamicExecution(authenticationKey?: string, body?: ExecuteDynamicExecution, observe?: 'body', reportProgress?: boolean): Observable<ExecuteInvokersResponse>;
  public executeDynamicExecution(authenticationKey?: string, body?: ExecuteDynamicExecution, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ExecuteInvokersResponse>>;
  public executeDynamicExecution(authenticationKey?: string, body?: ExecuteDynamicExecution, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ExecuteInvokersResponse>>;
  public executeDynamicExecution(authenticationKey?: string, body?: ExecuteDynamicExecution, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.post<ExecuteInvokersResponse>(`${this.basePath}/dynamicExecution/executeDynamicExecution`,
      body,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
  }

  public getAllDynamicExecutions(authenticationKey?: string, body?: DynamicExecutionFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<DynamicExecution>>;
  public getAllDynamicExecutions(authenticationKey?: string, body?: DynamicExecutionFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<DynamicExecution>>>;
  public getAllDynamicExecutions(authenticationKey?: string, body?: DynamicExecutionFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<DynamicExecution>>>;
  public getAllDynamicExecutions(authenticationKey?: string, body?: DynamicExecutionFilter, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.post<PaginationResponse<DynamicExecution>>(`${this.basePath}/dynamicExecution/getAll`,
      body,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
  }

  public getDynamicExecutionReturnExample(authenticationKey?: string, body?: DynamicExecutionExampleRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
  public getDynamicExecutionReturnExample(authenticationKey?: string, body?: DynamicExecutionExampleRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public getDynamicExecutionReturnExample(authenticationKey?: string, body?: DynamicExecutionExampleRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public getDynamicExecutionReturnExample(authenticationKey?: string, body?: DynamicExecutionExampleRequest, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.post<any>(`${this.basePath}/dynamicExecution/getDynamicExecutionReturnExample`,
      body,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    ).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
  }

  public updateDynamicExecution(authenticationKey?: string, body?: UpdateDynamicExecution, observe?: 'body', reportProgress?: boolean): Observable<DynamicExecution>;
  public updateDynamicExecution(authenticationKey?: string, body?: UpdateDynamicExecution, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DynamicExecution>>;
  public updateDynamicExecution(authenticationKey?: string, body?: UpdateDynamicExecution, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DynamicExecution>>;
  public updateDynamicExecution(authenticationKey?: string, body?: UpdateDynamicExecution, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.put<DynamicExecution>(`${this.basePath}/dynamicExecution/update`,
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
