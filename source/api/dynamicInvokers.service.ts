import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpResponse, HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import { FlexiCoreDecycle } from './api';
import { ExportDynamicInvokerToCSVRequest } from '../model/exportDynamicInvokerToCSVRequest';
import { ExportDynamicInvokerToCSVResponse } from '../model/exportDynamicInvokerToCSVResponse';


@Injectable()
export class DynamicInvokersService {

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

  public exportDynamicInvokerToCSV(authenticationKey?: string, body?: ExportDynamicInvokerToCSVRequest, observe?: 'body', reportProgress?: boolean): Observable<ExportDynamicInvokerToCSVResponse>;
  public exportDynamicInvokerToCSV(authenticationKey?: string, body?: ExportDynamicInvokerToCSVRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ExportDynamicInvokerToCSVResponse>>;
  public exportDynamicInvokerToCSV(authenticationKey?: string, body?: ExportDynamicInvokerToCSVRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ExportDynamicInvokerToCSVResponse>>;
  public exportDynamicInvokerToCSV(authenticationKey?: string, body?: ExportDynamicInvokerToCSVRequest, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.post<ExportDynamicInvokerToCSVResponse>(`${this.basePath}/DynamicInvokerCSV`,
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
