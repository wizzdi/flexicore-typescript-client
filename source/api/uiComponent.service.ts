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


import { Inject, Injectable, Optional } from '@angular/core'; 
import { FlexiCoreDecycle } from './flexiCoreDecycle';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { UIComponent } from '../model/uIComponent';
import { UIComponentsRegistrationContainer } from '../model/uIComponentsRegistrationContainer';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class UIComponentService {

	protected basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
	public defaultHeaders: HttpHeaders = new HttpHeaders();
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
	 * registers components if not exists and returns allowed
	 * @summary registerAndGetAllowedUIComponents
	 * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
	 * @param body 
	 */
	public registerAndGetAllowedUIComponents(body?: UIComponentsRegistrationContainer, authenticationkey?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<UIComponent>>;
	public registerAndGetAllowedUIComponents(body?: UIComponentsRegistrationContainer, authenticationkey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UIComponent>>>;
	public registerAndGetAllowedUIComponents(body?: UIComponentsRegistrationContainer, authenticationkey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UIComponent>>>;
	public registerAndGetAllowedUIComponents(body?: UIComponentsRegistrationContainer, authenticationkey?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

		return this.httpClient.post<Array<UIComponent>>(`${this.basePath}/uiPlugin/registerAndGetAllowedUIComponents`,
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