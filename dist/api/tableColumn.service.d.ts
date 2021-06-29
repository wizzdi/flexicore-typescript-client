import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Configuration } from "../configuration";
import { TableColumnCreate } from "../model/tableColumnCreate";
import { Observable } from "rxjs/Observable";
import { TableColumnFiltering } from "../model/tableColumnFiltering";
import { TableColumnUpdate } from "../model/tableColumnUpdate";
export declare class TableColumnService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    createTableColumn(body?: TableColumnCreate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    getAllTableColumns(body?: TableColumnFiltering, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    updateTableColumn(body?: TableColumnUpdate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
}
