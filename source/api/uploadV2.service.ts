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

import { FileResource } from '../model/fileResource';
import { Job } from '../model/job';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { IUploadService } from './iUploadService.service';


@Injectable()
export class UploadV2Service implements IUploadService{

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
     * 
     * @param md5 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public getFileResource(md5: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<FileResource> {
        return this.getFileResourceWithHttpInfo(md5, authenticationkey, extraHttpRequestParams)
           .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }

  

    public uploadFileWithChunkMd5(authenticationkey?: string, md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, extraHttpRequestParams?: any): Observable<FileResource> {
        return this.uploadFileWithHttpInfo(authenticationkey, md5, name, chunkMd5, lastChunk, blob, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response.body) || {};
                }
            }));
    }


   

    /**
     * 
     * 
     * @param md5 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public getFileResourceWithHttpInfo(md5: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<any> {
        const path = this.basePath + '/fileResource/${md5}'
            .replace('${' + 'md5' + '}', String(md5));

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        // verify required parameter 'md5' is not null or undefined
        if (md5 === null || md5 === undefined) {
            throw new Error('Required parameter md5 was null or undefined when calling getFileResource.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions = new HttpRequest(
            'GET',
            path,
            {
                headers: headers,
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.httpClient.request(requestOptions);
    }

  

    /**
        * 
        * 
        * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
        * @param body 
        */
    public uploadFileWithHttpInfo(authenticationkey?: string, md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, extraHttpRequestParams?: any): Observable<any> {
        const path = this.basePath + '/upload';

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }

        if (md5 !== undefined && md5 !== null) {
            headers = headers.set('md5', String(md5));
        }

        if (name !== undefined && name !== null) {
            headers = headers.set('name', String(name));
        }
        if (chunkMd5 !== undefined && chunkMd5 !== null) {
            headers = headers.set('chunkMd5', String(chunkMd5));
        }
        if (lastChunk !== undefined && lastChunk !== null) {
            headers = headers.set('lastChunk', String(lastChunk));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let httpHeaderAccepts: string[] = [
            'application/octet-stream'
        ];
        // const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        // if (httpHeaderAcceptSelected != undefined) {
        //     headers = headers.set('Accept', httpHeaderAcceptSelected);
        // }
        headers = headers.set('Accept', ' application/json');
        headers = headers.set('Content-Type', 'application/octet-stream');
        let requestOptions = new HttpRequest(
            'POST',
            path,
            blob,
            {
                headers,
                withCredentials: this.configuration.withCredentials
            });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.httpClient.request(requestOptions);
    }

}