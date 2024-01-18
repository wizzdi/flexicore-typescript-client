import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { PaginationResponse, RoleToUser } from '../model/models';
import { RoleToUserCreate } from '../model/roleToUserCreate';
import { RoleToUserFiltering } from '../model/roleToUserFiltering';
import { RoleToUserUpdate } from '../model/roleToUserUpdate';
export declare class RoleToUserService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    createRoleToUser(authenticationkey?: string, body?: RoleToUserCreate, observe?: 'body', reportProgress?: boolean): Observable<RoleToUser>;
    createRoleToUser(authenticationkey?: string, body?: RoleToUserCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleToUser>>;
    createRoleToUser(authenticationkey?: string, body?: RoleToUserCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleToUser>>;
    getAllRoleToUser(authenticationkey?: string, body?: RoleToUserFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<RoleToUser>>;
    getAllRoleToUser(authenticationkey?: string, body?: RoleToUserFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<RoleToUser>>>;
    getAllRoleToUser(authenticationkey?: string, body?: RoleToUserFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<RoleToUser>>>;
    updateRoleToUser(authenticationkey?: string, body?: RoleToUserUpdate, observe?: 'body', reportProgress?: boolean): Observable<RoleToUser>;
    updateRoleToUser(authenticationkey?: string, body?: RoleToUserUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleToUser>>;
    updateRoleToUser(authenticationkey?: string, body?: RoleToUserUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleToUser>>;
}
