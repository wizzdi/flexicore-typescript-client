"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable member-ordering */
const core_1 = require("@angular/core");
const flexiCoreDecycle_1 = require("./flexiCoreDecycle");
const http_1 = require("@angular/http");
const http_2 = require("@angular/http");
const variables_1 = require("../variables");
const configuration_1 = require("../configuration");
let DynamicPropertiesService = class DynamicPropertiesService {
    constructor(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
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
    extendObj(objA, objB) {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    /**
     * Connect a property and a baseclass with a complex type, this is the actual action of assigning a Complex Value of a property to a specific Baseclass , any Baseclasss
     * @summary connect Property
     * @param propertyId the ID of the Property instance to use
     * @param baseclassId The ID of the Baseclass to which we want to assign this complex value
     * @param valueId The ID of the ? extends Baseclass which is the complex value
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    connectPropertyComplex(propertyId, baseclassId, valueId, authenticationkey, extraHttpRequestParams) {
        return this.connectPropertyComplexWithHttpInfo(propertyId, baseclassId, valueId, authenticationkey, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * Connect property and a baseclass with simple value, assign a value of a Property to an instance of Baseclass, any Baseclass instance
     * @summary connect Property
     * @param propertyId The ID of the property, this Property must be connected eith the Clazz of the Baseclass in the baseclass_id parameter
     * @param baseclassId The Baseclass instance to which this value (for that property) is set
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param simpleValue The value to set, must be a String
     */
    connectPropertySimple(propertyId, baseclassId, authenticationkey, simpleValue, extraHttpRequestParams) {
        return this.connectPropertySimpleWithHttpInfo(propertyId, baseclassId, authenticationkey, simpleValue, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * creates a property given a type and a name, properties can be created and linked with Types. instances of these types can have associated values
     * @summary creates Property
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyName
     * @param propertyType
     */
    createProperty(authenticationkey, propertyName, propertyType, extraHttpRequestParams) {
        return this.createPropertyWithHttpInfo(authenticationkey, propertyName, propertyType, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * creates a property Type given  a name
     * @summary creates Property Type
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyTypeName  the name of the property type to create
     */
    createPropertyType(authenticationkey, propertyTypeName, extraHttpRequestParams) {
        return this.createPropertyTypeWithHttpInfo(authenticationkey, propertyTypeName, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * get all properties connected to baseclass
     * @summary get Connected Properties
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyClazz
     * @param plainView
     */
    getDynamicProperties(id, authenticationkey, propertyClazz, plainView, extraHttpRequestParams) {
        return this.getDynamicPropertiesWithHttpInfo(id, authenticationkey, propertyClazz, plainView, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * get all properties connected to baseclass
     * @summary get Connected Properties With Categories
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyClazz
     * @param plainView
     */
    getDynamicPropertiesWithCategories(id, authenticationkey, propertyClazz, plainView, extraHttpRequestParams) {
        return this.getDynamicPropertiesWithCategoriesWithHttpInfo(id, authenticationkey, propertyClazz, plainView, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * get all Properties, paged, filtered and sorted by a FilteringInformationHolder
     * @summary listProperties
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listProperties(authenticationkey, body, pagesize, currentPage, extraHttpRequestParams) {
        return this.listPropertiesWithHttpInfo(authenticationkey, body, pagesize, currentPage, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * get all property types, filtered and sorted
     * @summary listPropertyTypes
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listPropertyTypes(authenticationkey, body, pagesize, currentPage, extraHttpRequestParams) {
        return this.listPropertyTypesWithHttpInfo(authenticationkey, body, pagesize, currentPage, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * set Property to use with specific Clazz, a Clazz is an Entity in FlexiCore, the PropertySetContainer has the required default values for both simple and complex values
     * @summary set Property
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    setProperty(authenticationkey, body, extraHttpRequestParams) {
        return this.setPropertyWithHttpInfo(authenticationkey, body, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * update Simple value of a Dynamic Property of a Baseclass instance
     * @summary updateSimple
     * @param linkId The link id (of PropertyToBaseclass type)
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param simpleValue The value to update
     */
    updateSimple(linkId, authenticationkey, simpleValue, extraHttpRequestParams) {
        return this.updateSimpleWithHttpInfo(linkId, authenticationkey, simpleValue, extraHttpRequestParams)
            .map((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        });
    }
    /**
     * connect Property
     * Connect a property and a baseclass with a complex type, this is the actual action of assigning a Complex Value of a property to a specific Baseclass , any Baseclasss
     * @param propertyId the ID of the Property instance to use
     * @param baseclassId The ID of the Baseclass to which we want to assign this complex value
     * @param valueId The ID of the ? extends Baseclass which is the complex value
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    connectPropertyComplexWithHttpInfo(propertyId, baseclassId, valueId, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/property/connectComplex/${propertyId}/${baseclass_id}/${value_id}'
            .replace('${' + 'propertyId' + '}', String(propertyId))
            .replace('${' + 'baseclass_id' + '}', String(baseclassId))
            .replace('${' + 'value_id' + '}', String(valueId));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'propertyId' is not null or undefined
        if (propertyId === null || propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling connectPropertyComplex.');
        }
        // verify required parameter 'baseclassId' is not null or undefined
        if (baseclassId === null || baseclassId === undefined) {
            throw new Error('Required parameter baseclassId was null or undefined when calling connectPropertyComplex.');
        }
        // verify required parameter 'valueId' is not null or undefined
        if (valueId === null || valueId === undefined) {
            throw new Error('Required parameter valueId was null or undefined when calling connectPropertyComplex.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * connect Property
     * Connect property and a baseclass with simple value, assign a value of a Property to an instance of Baseclass, any Baseclass instance
     * @param propertyId The ID of the property, this Property must be connected eith the Clazz of the Baseclass in the baseclass_id parameter
     * @param baseclassId The Baseclass instance to which this value (for that property) is set
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param simpleValue The value to set, must be a String
     */
    connectPropertySimpleWithHttpInfo(propertyId, baseclassId, authenticationkey, simpleValue, extraHttpRequestParams) {
        const path = this.basePath + '/property/connectSimple/${propertyId}/${baseclass_id}'
            .replace('${' + 'propertyId' + '}', String(propertyId))
            .replace('${' + 'baseclass_id' + '}', String(baseclassId));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'propertyId' is not null or undefined
        if (propertyId === null || propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling connectPropertySimple.');
        }
        // verify required parameter 'baseclassId' is not null or undefined
        if (baseclassId === null || baseclassId === undefined) {
            throw new Error('Required parameter baseclassId was null or undefined when calling connectPropertySimple.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (simpleValue !== undefined && simpleValue !== null) {
            headers.set('simpleValue', String(simpleValue));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * creates Property
     * creates a property given a type and a name, properties can be created and linked with Types. instances of these types can have associated values
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyName
     * @param propertyType
     */
    createPropertyWithHttpInfo(authenticationkey, propertyName, propertyType, extraHttpRequestParams) {
        const path = this.basePath + '/property';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (propertyName !== undefined && propertyName !== null) {
            headers.set('propertyName', String(propertyName));
        }
        if (propertyType !== undefined && propertyType !== null) {
            headers.set('propertyType', String(propertyType));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * creates Property Type
     * creates a property Type given  a name
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyTypeName  the name of the property type to create
     */
    createPropertyTypeWithHttpInfo(authenticationkey, propertyTypeName, extraHttpRequestParams) {
        const path = this.basePath + '/property/createType';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (propertyTypeName !== undefined && propertyTypeName !== null) {
            headers.set('propertyTypeName', String(propertyTypeName));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * get Connected Properties
     * get all properties connected to baseclass
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyClazz
     * @param plainView
     */
    getDynamicPropertiesWithHttpInfo(id, authenticationkey, propertyClazz, plainView, extraHttpRequestParams) {
        const path = this.basePath + '/property/${id}'
            .replace('${' + 'id' + '}', String(id));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDynamicProperties.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (propertyClazz !== undefined && propertyClazz !== null) {
            headers.set('propertyClazz', String(propertyClazz));
        }
        if (plainView !== undefined && plainView !== null) {
            headers.set('plainView', String(plainView));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * get Connected Properties With Categories
     * get all properties connected to baseclass
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyClazz
     * @param plainView
     */
    getDynamicPropertiesWithCategoriesWithHttpInfo(id, authenticationkey, propertyClazz, plainView, extraHttpRequestParams) {
        const path = this.basePath + '/property/getDynamicPropertiesWithCategories/${id}'
            .replace('${' + 'id' + '}', String(id));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDynamicPropertiesWithCategories.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (propertyClazz !== undefined && propertyClazz !== null) {
            headers.set('propertyClazz', String(propertyClazz));
        }
        if (plainView !== undefined && plainView !== null) {
            headers.set('plainView', String(plainView));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * listProperties
     * get all Properties, paged, filtered and sorted by a FilteringInformationHolder
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listPropertiesWithHttpInfo(authenticationkey, body, pagesize, currentPage, extraHttpRequestParams) {
        const path = this.basePath + '/property/listProperties';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (pagesize !== undefined && pagesize !== null) {
            headers.set('pagesize', String(pagesize));
        }
        if (currentPage !== undefined && currentPage !== null) {
            headers.set('currentPage', String(currentPage));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * listPropertyTypes
     * get all property types, filtered and sorted
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listPropertyTypesWithHttpInfo(authenticationkey, body, pagesize, currentPage, extraHttpRequestParams) {
        const path = this.basePath + '/property/listPropertyTypes';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (pagesize !== undefined && pagesize !== null) {
            headers.set('pagesize', String(pagesize));
        }
        if (currentPage !== undefined && currentPage !== null) {
            headers.set('currentPage', String(currentPage));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * set Property
     * set Property to use with specific Clazz, a Clazz is an Entity in FlexiCore, the PropertySetContainer has the required default values for both simple and complex values
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    setPropertyWithHttpInfo(authenticationkey, body, extraHttpRequestParams) {
        const path = this.basePath + '/property/set';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body),
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
    /**
     * updateSimple
     * update Simple value of a Dynamic Property of a Baseclass instance
     * @param linkId The link id (of PropertyToBaseclass type)
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param simpleValue The value to update
     */
    updateSimpleWithHttpInfo(linkId, authenticationkey, simpleValue, extraHttpRequestParams) {
        const path = this.basePath + '/property/updateSimple/${linkId}'
            .replace('${' + 'linkId' + '}', String(linkId));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling updateSimple.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (simpleValue !== undefined && simpleValue !== null) {
            headers.set('simpleValue', String(simpleValue));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }
};
DynamicPropertiesService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional())
], DynamicPropertiesService);
exports.DynamicPropertiesService = DynamicPropertiesService;
//# sourceMappingURL=dynamicProperties.service.js.map