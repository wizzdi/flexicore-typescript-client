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
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { IUploadService } from './iUploadService.service';


@Injectable()
export class UploadService implements IUploadService {

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
    public deleteFileResource(md5: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteFileResourceWithHttpInfo(md5, authenticationkey, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }

    /**
     * finalize FileResource , sending it for processing
     * @summary finalize
     * @param md5 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param hint 
     * @param fileType 
     * @param dontProcess 
     */
    public finalizeUpload(md5: string, authenticationkey?: string, hint?: string, fileType?: string, dontProcess?: boolean, extraHeaders?: Map<String, String>, extraHttpRequestParams?: any): Observable<Job> {
        return this.finalizeUploadWithHttpInfo(md5, authenticationkey, hint, fileType, dontProcess, extraHeaders, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }

    public getFileResource(md5: string, authenticationkey?: string, observe?: 'body', reportProgress?: boolean): Observable<FileResource>;
    public getFileResource(md5: string, authenticationkey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FileResource>>;
    public getFileResource(md5: string, authenticationkey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FileResource>>;
    public getFileResource(md5: string, authenticationkey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        let headers = {};

        if (md5 === null || md5 === undefined) {
            throw new Error('Required parameter md5 was null or undefined when calling getFileResource.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            Object.assign(headers, {'authenticationkey': String(authenticationkey)});
        }
        return this.httpClient.get<FileResource>(`${this.basePath}/resources/${md5}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * 
     * @param jobID 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public getJob(jobID: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Job> {
        return this.getJobWithHttpInfo(jobID, authenticationkey, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }

    /**
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path 
     * @param calcMd5 
     */
    public registerFile(authenticationkey?: string, path?: string, calcMd5?: boolean, extraHttpRequestParams?: any): Observable<FileResource> {
        return this.registerFileWithHttpInfo(authenticationkey, path, calcMd5, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }

    /**
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path 
     * @param hint 
     * @param fileType 
     * @param dontProcess 
     * @param calcMd5 
     */
    public registerFileAndFinlize(authenticationkey?: string, path?: string, hint?: string, fileType?: string, dontProcess?: boolean, calcMd5?: boolean, extraHttpRequestParams?: any): Observable<Job> {
        return this.registerFileAndFinlizeWithHttpInfo(authenticationkey, path, hint, fileType, dontProcess, calcMd5, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }

    /**
     * 
     * @param jobID 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public stopJob(jobID: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.stopJobWithHttpInfo(jobID, authenticationkey, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }

    /**
     * 
     * @param jobID 
     * @param phaseName 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public updateJobPhase(jobID: string, phaseName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateJobPhaseWithHttpInfo(jobID, phaseName, authenticationkey, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }

    /**
     * 
     * @param jobID 
     * @param key 
     * @param value 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public updateJobProperty(jobID: string, key: string, value: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateJobPropertyWithHttpInfo(jobID, key, value, authenticationkey, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }


    public uploadFile(authenticationkey?: string, md5?: string, name?: string, blob?: Blob, extraHttpRequestParams?: any): Observable<FileResource> {
        return this.uploadFileWithHttpInfo(authenticationkey, md5, name, null, false, blob, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }

    /**
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public validate(authenticationkey?: string, extraHttpRequestParams?: any): Observable<boolean> {
        return this.validateWithHttpInfo(authenticationkey, extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return FlexiCoreDecycle.retrocycle(response) || {};
                }
            }));
    }


    /**
     * 
     * 
     * @param md5 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public deleteFileResourceWithHttpInfo(md5: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resources/${md5}'
            .replace('${' + 'md5' + '}', String(md5));

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        // verify required parameter 'md5' is not null or undefined
        if (md5 === null || md5 === undefined) {
            throw new Error('Required parameter md5 was null or undefined when calling deleteFileResource.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }


        // to determine the Accept header
        let produces: string[] = [
        ];


        let requestOptions = new HttpRequest(
            'DELETE',
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

        return this.httpClient.request(requestOptions).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * finalize
     * finalize FileResource , sending it for processing
     * @param md5 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param hint 
     * @param fileType 
     * @param dontProcess 
     */
    public finalizeUploadWithHttpInfo(md5: string, authenticationkey?: string, hint?: string, fileType?: string, dontProcess?: boolean, extraHeaders?: Map<String, String>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resources/finalize/${md5}'
            .replace('${' + 'md5' + '}', String(md5));

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        // verify required parameter 'md5' is not null or undefined
        if (md5 === null || md5 === undefined) {
            throw new Error('Required parameter md5 was null or undefined when calling finalizeUpload.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }

        if (hint !== undefined && hint !== null) {
            headers.set('hint', String(hint));
        }

        if (fileType !== undefined && fileType !== null) {
            headers.set('fileType', String(fileType));
        }

        if (dontProcess !== undefined && dontProcess !== null) {
            headers.set('dontProcess', String(dontProcess));
        }
        if (extraHeaders !== undefined && extraHeaders !== null) {
            extraHeaders.forEach((value: string, key: string) => {
                headers.set(key, value);
            });
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

        return this.httpClient.request(requestOptions).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * 
     * 
     * @param jobID 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public getJobWithHttpInfo(jobID: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/jobProcess/${jobID}'
            .replace('${' + 'jobID' + '}', String(jobID));

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        // verify required parameter 'jobID' is not null or undefined
        if (jobID === null || jobID === undefined) {
            throw new Error('Required parameter jobID was null or undefined when calling getJob.');
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

        return this.httpClient.request(requestOptions).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path 
     * @param calcMd5 
     */
    public registerFileWithHttpInfo(authenticationkey?: string, pathparam?: string, calcMd5?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resources/register';

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers = headers.set('authenticationkey', String(authenticationkey));
        }

        if (path !== undefined && path !== null) {
            headers = headers.set('path', String(pathparam));
        }

        if (calcMd5 !== undefined && calcMd5 !== null) {
            headers = headers.set('calcMd5', String(calcMd5));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions = new HttpRequest(
            'POST',
            path,
            null,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials
            });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.httpClient.request(requestOptions).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path 
     * @param hint 
     * @param fileType 
     * @param dontProcess 
     * @param calcMd5 
     */
    public registerFileAndFinlizeWithHttpInfo(authenticationkey?: string, pathparam?: string, hint?: string, fileType?: string, dontProcess?: boolean, calcMd5?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resources/registerAndFinalize';

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        if (authenticationkey !== undefined && authenticationkey !== null) {
           headers =  headers = headers.set('authenticationkey', String(authenticationkey));
        }

        if (path !== undefined && path !== null) {
            headers = headers.set('path', String(pathparam));
        }

        if (hint !== undefined && hint !== null) {
            headers =headers.set('hint', String(hint));
        }

        if (fileType !== undefined && fileType !== null) {
            headers =headers.set('fileType', String(fileType));
        }

        if (dontProcess !== undefined && dontProcess !== null) {
            headers =headers.set('dontProcess', String(dontProcess));
        }

        if (calcMd5 !== undefined && calcMd5 !== null) {
            headers = headers.set('calcMd5', String(calcMd5));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions = new HttpRequest(
            'POST',
            path,
            {},
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials
            });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.httpClient.request(requestOptions).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * 
     * 
     * @param jobID 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public stopJobWithHttpInfo(jobID: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/jobProcess/${jobID}'
            .replace('${' + 'jobID' + '}', String(jobID));

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        // verify required parameter 'jobID' is not null or undefined
        if (jobID === null || jobID === undefined) {
            throw new Error('Required parameter jobID was null or undefined when calling stopJob.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions = new HttpRequest(
            'DELETE',
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

        return this.httpClient.request(requestOptions).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * 
     * 
     * @param jobID 
     * @param phaseName 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public updateJobPhaseWithHttpInfo(jobID: string, phaseName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/jobProcess/updateJobPhase/${jobID}/${phaseName}'
            .replace('${' + 'jobID' + '}', String(jobID))
            .replace('${' + 'phaseName' + '}', String(phaseName));

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        // verify required parameter 'jobID' is not null or undefined
        if (jobID === null || jobID === undefined) {
            throw new Error('Required parameter jobID was null or undefined when calling updateJobPhase.');
        }
        // verify required parameter 'phaseName' is not null or undefined
        if (phaseName === null || phaseName === undefined) {
            throw new Error('Required parameter phaseName was null or undefined when calling updateJobPhase.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions = new HttpRequest(
            'PUT',
            path,
            null,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials
            });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.httpClient.request(requestOptions).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    /**
     * 
     * 
     * @param jobID 
     * @param key 
     * @param value 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public updateJobPropertyWithHttpInfo(jobID: string, key: string, value: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/jobProcess/updateJobProperty/${jobID}/${key}/${value}'
            .replace('${' + 'jobID' + '}', String(jobID))
            .replace('${' + 'key' + '}', String(key))
            .replace('${' + 'value' + '}', String(value));

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

        // verify required parameter 'jobID' is not null or undefined
        if (jobID === null || jobID === undefined) {
            throw new Error('Required parameter jobID was null or undefined when calling updateJobProperty.');
        }
        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling updateJobProperty.');
        }
        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling updateJobProperty.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions = new HttpRequest(
            'PUT',
            path,
            null,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials
            });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.httpClient.request(requestOptions).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

    public uploadFileWithChunkMd5(authenticationkey?: string, md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, extraHttpRequestParams?: any,
        observe?: 'body', reportProgress?: boolean): Observable<FileResource>;
    public uploadFileWithChunkMd5(authenticationkey?: string, md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, extraHttpRequestParams?: any,
        observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FileResource>>;
    public uploadFileWithChunkMd5(authenticationkey?: string, md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, extraHttpRequestParams?: any,
        observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FileResource>>;
    public uploadFileWithChunkMd5(authenticationkey?: string, md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, extraHttpRequestParams?: any,
        observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        let headers = {};

        if (authenticationkey !== undefined && authenticationkey !== null) {
            Object.assign(headers, {'authenticationkey': String(authenticationkey)});
        }

        if (md5 !== undefined && md5 !== null) {
            Object.assign(headers, {'md5': String(md5)});
        }

        if (name !== undefined && name !== null) {
            Object.assign(headers, {'name': String(name)});
        }
        if (chunkMd5 !== undefined && chunkMd5 !== null) {
            Object.assign(headers, {'chunkMd5': String(chunkMd5)});
        }
        if (lastChunk !== undefined && lastChunk !== null) {
            Object.assign(headers, {'lastChunk': String(lastChunk)});
        }

        Object.assign(headers, {'Accept': 'application/json'});
        Object.assign(headers, {'Content-Type': 'application/octet-stream'});
        return this.httpClient.post<FileResource>(`${this.basePath}/resources/upload`,
            blob,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(map(o => FlexiCoreDecycle.retrocycle(o)));
    }


    /**
        * 
        * 
        * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
        * @param body 
        */
    public uploadFileWithHttpInfo(authenticationkey?: string, md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, extraHttpRequestParams?: any): Observable<any> {
        const path = this.basePath + '/resources/upload';

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


    /**
     * 
     * 
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    public validateWithHttpInfo(authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resources/validate';

        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845

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
                headers,
                search: queryParameters,
                withCredentials: this.configuration.withCredentials
            });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.httpClient.request(requestOptions).pipe(map(o=>FlexiCoreDecycle.retrocycle(o)));
    }

}
