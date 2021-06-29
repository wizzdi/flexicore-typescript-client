import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Configuration } from "../configuration";
import { CreateGridPreset } from "../model/createGridPreset";
import { Observable } from "rxjs/Observable";
import { GridPresetFiltering } from "../model/gridPresetFiltering";
import { UpdateGridPreset } from "../model/updateGridPreset";
import { CopyGridPreset } from "../model/copyGridPreset";
export declare class GridPresetsService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    createGridPreset(body?: CreateGridPreset, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    copyGridPreset(body?: CopyGridPreset, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    getAllGridPresets(body?: GridPresetFiltering, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    updateGridPreset(body?: UpdateGridPreset, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
}
