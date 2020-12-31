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
let DevicesService = class DevicesService {
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
     * activate a link between a device and baseclass
     * @summary activateLink
     * @param baseId
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    activateLink(baseId, mac, authenticationkey, extraHttpRequestParams) {
        return this.activateLinkWithHttpInfo(baseId, mac, authenticationkey, extraHttpRequestParams)
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
     * Connect a Device to an instance of any entity in the system
     * @summary connectDeviceToBaseclass
     * @param baseId
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param someHeader
     */
    connectDeviceToBaseclass(baseId, mac, authenticationkey, someHeader, extraHttpRequestParams) {
        return this.connectDeviceToBaseclassWithHttpInfo(baseId, mac, authenticationkey, someHeader, extraHttpRequestParams)
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
     * creates a device
     * @summary createDevice
     * @param mac
     * @param serialNumber
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param name
     * @param lat
     * @param lon
     */
    createDevice(mac, serialNumber, authenticationkey, name, lat, lon, extraHttpRequestParams) {
        return this.createDeviceWithHttpInfo(mac, serialNumber, authenticationkey, name, lat, lon, extraHttpRequestParams)
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
     * deactivate all links between a device and baseclass
     * @summary deactivateAllLinks
     * @param baseId
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deactivateAllLinks(baseId, mac, authenticationkey, extraHttpRequestParams) {
        return this.deactivateAllLinksWithHttpInfo(baseId, mac, authenticationkey, extraHttpRequestParams)
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
     * deactivate link
     * @summary deactivateLink
     * @param linkId
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deactivateLink(linkId, authenticationkey, extraHttpRequestParams) {
        return this.deactivateLinkWithHttpInfo(linkId, authenticationkey, extraHttpRequestParams)
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
     * update device used properties
     * @summary getDeviceUsedProperties
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    getDeviceUsedProperties(mac, authenticationkey, body, pagesize, currentPage, extraHttpRequestParams) {
        return this.getDeviceUsedPropertiesWithHttpInfo(mac, authenticationkey, body, pagesize, currentPage, extraHttpRequestParams)
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
     *
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listDevices(authenticationKey, body, pagesize, currentPage, extraHttpRequestParams) {
        return this.listDevicesWithHttpInfo(authenticationKey, body, pagesize, currentPage, extraHttpRequestParams)
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
     * update device used properties
     * @summary setDeviceUsedProperties
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    setDeviceUsedProperties(mac, authenticationkey, body, extraHttpRequestParams) {
        return this.setDeviceUsedPropertiesWithHttpInfo(mac, authenticationkey, body, extraHttpRequestParams)
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
     * Sets Link as Updated
     * @summary setLinkUpdateDate
     * @param linkId
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param date
     */
    setLinkUpdateDate(linkId, authenticationkey, date, extraHttpRequestParams) {
        return this.setLinkUpdateDateWithHttpInfo(linkId, authenticationkey, date, extraHttpRequestParams)
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
     * activateLink
     * activate a link between a device and baseclass
     * @param baseId
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    activateLinkWithHttpInfo(baseId, mac, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/device/activateLink/${mac}/${baseId}'
            .replace('${' + 'baseId' + '}', String(baseId))
            .replace('${' + 'mac' + '}', String(mac));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'baseId' is not null or undefined
        if (baseId === null || baseId === undefined) {
            throw new Error('Required parameter baseId was null or undefined when calling activateLink.');
        }
        // verify required parameter 'mac' is not null or undefined
        if (mac === null || mac === undefined) {
            throw new Error('Required parameter mac was null or undefined when calling activateLink.');
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
     * connectDeviceToBaseclass
     * Connect a Device to an instance of any entity in the system
     * @param baseId
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param someHeader
     */
    connectDeviceToBaseclassWithHttpInfo(baseId, mac, authenticationkey, someHeader, extraHttpRequestParams) {
        const path = this.basePath + '/device/connectDeviceToBaseclass/${mac}/${baseId}'
            .replace('${' + 'baseId' + '}', String(baseId))
            .replace('${' + 'mac' + '}', String(mac));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'baseId' is not null or undefined
        if (baseId === null || baseId === undefined) {
            throw new Error('Required parameter baseId was null or undefined when calling connectDeviceToBaseclass.');
        }
        // verify required parameter 'mac' is not null or undefined
        if (mac === null || mac === undefined) {
            throw new Error('Required parameter mac was null or undefined when calling connectDeviceToBaseclass.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (someHeader !== undefined && someHeader !== null) {
            headers.set('someHeader', String(someHeader));
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
     * createDevice
     * creates a device
     * @param mac
     * @param serialNumber
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param name
     * @param lat
     * @param lon
     */
    createDeviceWithHttpInfo(mac, serialNumber, authenticationkey, name, lat, lon, extraHttpRequestParams) {
        const path = this.basePath + '/device/createDevice/${mac}/${serialNumber}'
            .replace('${' + 'mac' + '}', String(mac))
            .replace('${' + 'serialNumber' + '}', String(serialNumber));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mac' is not null or undefined
        if (mac === null || mac === undefined) {
            throw new Error('Required parameter mac was null or undefined when calling createDevice.');
        }
        // verify required parameter 'serialNumber' is not null or undefined
        if (serialNumber === null || serialNumber === undefined) {
            throw new Error('Required parameter serialNumber was null or undefined when calling createDevice.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (name !== undefined && name !== null) {
            headers.set('name', String(name));
        }
        if (lat !== undefined && lat !== null) {
            headers.set('lat', String(lat));
        }
        if (lon !== undefined && lon !== null) {
            headers.set('lon', String(lon));
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
     * deactivateAllLinks
     * deactivate all links between a device and baseclass
     * @param baseId
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deactivateAllLinksWithHttpInfo(baseId, mac, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/device/deactivateAllLinks/${mac}/${baseId}'
            .replace('${' + 'baseId' + '}', String(baseId))
            .replace('${' + 'mac' + '}', String(mac));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'baseId' is not null or undefined
        if (baseId === null || baseId === undefined) {
            throw new Error('Required parameter baseId was null or undefined when calling deactivateAllLinks.');
        }
        // verify required parameter 'mac' is not null or undefined
        if (mac === null || mac === undefined) {
            throw new Error('Required parameter mac was null or undefined when calling deactivateAllLinks.');
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
     * deactivateLink
     * deactivate link
     * @param linkId
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deactivateLinkWithHttpInfo(linkId, authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/device/deactivateLink/${linkId}'
            .replace('${' + 'linkId' + '}', String(linkId));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling deactivateLink.');
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
     * getDeviceUsedProperties
     * update device used properties
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    getDeviceUsedPropertiesWithHttpInfo(mac, authenticationkey, body, pagesize, currentPage, extraHttpRequestParams) {
        const path = this.basePath + '/device/getDeviceUsedProperties/${mac}'
            .replace('${' + 'mac' + '}', String(mac));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mac' is not null or undefined
        if (mac === null || mac === undefined) {
            throw new Error('Required parameter mac was null or undefined when calling getDeviceUsedProperties.');
        }
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
     *
     *
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listDevicesWithHttpInfo(authenticationKey, body, pagesize, currentPage, extraHttpRequestParams) {
        const path = this.basePath + '/device/listDevices';
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers.set('authenticationKey', String(authenticationKey));
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
     * setDeviceUsedProperties
     * update device used properties
     * @param mac
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    setDeviceUsedPropertiesWithHttpInfo(mac, authenticationkey, body, extraHttpRequestParams) {
        const path = this.basePath + '/device/setDeviceUsedProperties/${mac}'
            .replace('${' + 'mac' + '}', String(mac));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mac' is not null or undefined
        if (mac === null || mac === undefined) {
            throw new Error('Required parameter mac was null or undefined when calling setDeviceUsedProperties.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        headers.set('Content-Type', 'application/json');
        let requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
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
     * setLinkUpdateDate
     * Sets Link as Updated
     * @param linkId
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param date
     */
    setLinkUpdateDateWithHttpInfo(linkId, authenticationkey, date, extraHttpRequestParams) {
        const path = this.basePath + '/device/setLinkUpdateDate/${linkId}'
            .replace('${' + 'linkId' + '}', String(linkId));
        let queryParameters = new http_1.URLSearchParams();
        let headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'linkId' is not null or undefined
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling setLinkUpdateDate.');
        }
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        if (date !== undefined && date !== null) {
            headers.set('date', String(date));
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
DevicesService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional())
], DevicesService);
exports.DevicesService = DevicesService;
//# sourceMappingURL=devices.service.js.map