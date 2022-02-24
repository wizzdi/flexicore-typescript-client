import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuration } from '../configuration';
import { DeleteObjectRequests } from '../model/deleteObjectRequests';
import { DeleteResponse } from '../model/deleteResponse';
import { BASE_PATH } from '../variables';
import { FlexiCoreDecycle } from './flexiCoreDecycle';

@Injectable()
export class GenericDeleteService {

  protected basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
  public defaultHeaders = new HttpHeaders();
  public configuration: Configuration = new Configuration();

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
   *
   * Extends object by coping non-existing properties.
   * @param objA object to be extended
   * @param objB source object
   */
  private extendObj<T1, T2>(objA: T1, objB: T2) {
    for (let key in objB) {
      if (objB.hasOwnProperty(key)) {
        (objA as any)[key] = (objB as any)[key];
      }
    }
    return <T1 & T2>objA;
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (let consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   * softDelete
   * softDeletes all requested objects
   * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
   * @param body
   * @param observe set whether to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public softDelete(authenticationKey?: string, body?: DeleteObjectRequests, observe?: 'body', reportProgress?: boolean): Observable<DeleteResponse>;
  public softDelete(authenticationKey?: string, body?: DeleteObjectRequests, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DeleteResponse>>;
  public softDelete(authenticationKey?: string, body?: DeleteObjectRequests, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DeleteResponse>>;
  public softDelete(authenticationKey?: string, body?: DeleteObjectRequests, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let headers = this.defaultHeaders;
    if (authenticationKey !== undefined && authenticationKey !== null) {
      headers = headers.set('authenticationKey', String(authenticationKey));
    }

    // to determine the header
    let httpHeaderAccepts: string[] = [
      'application/json'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    const requestOptions = {
      headers,
      body,
      withCredentials: this.configuration.withCredentials,
      observe: observe,
      reportProgress: reportProgress
    }

    return this.httpClient.delete<DeleteResponse>(`${ this.basePath }/generic/softDelete`, requestOptions)
      .pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
  }

}