"use strict";
/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V3.2.0
 * Contact: avishay@flexi-core.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
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
exports.PermissionGroupService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const variables_1 = require("../variables");
const configuration_1 = require("../configuration");
const api_1 = require("./api");
let PermissionGroupService = class PermissionGroupService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = '/FlexiCore';
        this.defaultHeaders = new http_1.HttpHeaders();
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
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    connectPermissionGroupToBaseclass(body, authenticationkey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(`${this.basePath}/permissionGroup/connectPermissionGroupToBaseclass`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => api_1.FlexiCoreDecycle.retrocycle(o));
    }
    createPermissionGroup(body, authenticationkey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/permissionGroup/createPermissionGroup`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => api_1.FlexiCoreDecycle.retrocycle(o));
    }
    copyPermissionGroup(body, authenticationkey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/permissionGroup/copyPermissionGroup`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => api_1.FlexiCoreDecycle.retrocycle(o));
    }
    updatePermissionGroup(body, authenticationkey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/permissionGroup/updatePermissionGroup`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => api_1.FlexiCoreDecycle.retrocycle(o));
    }
    getAllPermissionGroups(body, authenticationkey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers = headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/permissionGroup/getAllPermissionGroups`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => api_1.FlexiCoreDecycle.retrocycle(o));
    }
};
PermissionGroupService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional())
], PermissionGroupService);
exports.PermissionGroupService = PermissionGroupService;
//# sourceMappingURL=permissionGroup.service.js.map