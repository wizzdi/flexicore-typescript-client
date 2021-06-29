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
exports.DebugService = void 0;
/* tslint:disable:no-unused-variable member-ordering */
const core_1 = require("@angular/core");
const flexiCoreDecycle_1 = require("./flexiCoreDecycle");
const http_1 = require("@angular/http");
const http_2 = require("@angular/http");
const variables_1 = require("../variables");
const configuration_1 = require("../configuration");
let DebugService = class DebugService {
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
     * create heap dump
     * @summary createHeapDump
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path
     */
    createHeapDump(authenticationkey, path, extraHttpRequestParams) {
        return this.createHeapDumpWithHttpInfo(authenticationkey, path, extraHttpRequestParams)
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
     * delete heap dump
     * @summary deleteHeapDump
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteHeapDump(id, authenticationkey, extraHttpRequestParams) {
        return this.deleteHeapDumpWithHttpInfo(id, authenticationkey, extraHttpRequestParams)
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
     * list heap dumps
     * @summary listHeapDumps
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     * @param start
     */
    listHeapDumps(authenticationkey, body, pagesize, currentpage, start, extraHttpRequestParams) {
        return this.listHeapDumpsWithHttpInfo(authenticationkey, body, pagesize, currentpage, start, extraHttpRequestParams)
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
     * createHeapDump
     * create heap dump
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path
     */
    createHeapDumpWithHttpInfo(authenticationkey, pathparam, extraHttpRequestParams) {
        const path = this.basePath + '/debug/createHeapDump';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (path !== undefined && path !== null) {
            headers.set('path', String(pathparam));
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
     * deleteHeapDump
     * delete heap dump
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteHeapDumpWithHttpInfo(id, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/debug/deleteHeapDump/${id}'
            .replace('${' + 'id' + '}', String(id));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteHeapDump.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Delete,
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
     * listHeapDumps
     * list heap dumps
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     * @param start
     */
    listHeapDumpsWithHttpInfo(authenticationkey, body, pagesize, currentpage, start, extraHttpRequestParams) {
        const path = this.basePath + '/debug/listHeapDumps';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (pagesize !== undefined && pagesize !== null) {
            headers.set('pagesize', String(pagesize));
        }
        if (currentpage !== undefined && currentpage !== null) {
            headers.set('currentpage', String(currentpage));
        }
        if (start !== undefined && start !== null) {
            headers.set('start', String(start));
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
};
DebugService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __param(1, core_1.Inject(variables_1.BASE_PATH)),
    __param(2, core_1.Optional())
], DebugService);
exports.DebugService = DebugService;
//# sourceMappingURL=debug.service.js.map