import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Configuration } from "../configuration";
import { FilterPropertiesCreate } from "../model/filterPropertiesCreate";
import { Observable } from "rxjs/Observable";
import { FilterPropertiesFiltering } from "../model/filterPropertiesFiltering";
import { FilterPropertiesUpdate } from "../model/filterPropertiesUpdate";
export declare class FilterPropertiesService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    createFilterProperties(body?: FilterPropertiesCreate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    getAllFilterPropertiess(body?: FilterPropertiesFiltering, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    updateFilterProperties(body?: FilterPropertiesUpdate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
}
