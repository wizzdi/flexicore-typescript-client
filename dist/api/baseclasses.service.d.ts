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
import { Observable } from 'rxjs';
import { Baseclass } from '../model/baseclass';
import { Baselink } from '../model/baselink';
import { BasicContainer } from '../model/basicContainer';
import { FileResource } from '../model/fileResource';
import { FilteringInformationHolder } from '../model/filteringInformationHolder';
import { LinkContainer } from '../model/linkContainer';
import { RoleToUser } from '../model/roleToUser';
import { RoleUserContainer } from '../model/roleUserContainer';
import { Configuration } from '../configuration';
import { SetBaseclassTenantRequest, ParameterInfo, PaginationResponse } from '../model/models';
import { GetClassInfo } from '../model/getClassInfo';
import { ExportBaseclassGeneric } from '../model/exportBaseclassGeneric';
import { BasicDelete } from '../model/basicDelete';
import { BasicDeleteResponse } from '../model/basicDeleteResponse';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
export declare class BaseclassesService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj;
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    count(type: string, authenticationkey?: string, body?: FilteringInformationHolder, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<number>;
    count(type: string, authenticationkey?: string, body?: FilteringInformationHolder, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    count(type: string, authenticationkey?: string, body?: FilteringInformationHolder, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    /**
     *
     * @param wantedClazzName
     * @param id
     * @param linkClazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body filtering information
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    countConnected(wantedClazzName: string, id: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<number>;
    /**
     *
     * @param wantedClazzName
     * @param id
     * @param linkClazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body filtering information
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    countDisconnected(wantedClazzName: string, id: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<number>;
    /**
     * Creates a link between two instances in a generic way, provide values of the link
     * @summary Create a link
     * @param leftId an ID of existing instance, class of which must fit the required class for the supplied Link class
     * @param rightId an ID of existing instance, class of which must fit the required class for the supplied Link class
     * @param linkClazzName The canonical name of the class of the link, for example: com.flexicore.model.MediaToBundle, in this case the left ID must be of Media class and the RightID must be of a bundle class
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value The ID of any instance inheriting from FC Baseclass, this effectively creates a triple link
     * @param simpleValue An explicit value of a string that can be part of the link
     * @param check If true, check if the link with these Left, Right and Complex Value values exists, if yes, then it will not be created
     */
    createBaselink(leftId: string, rightId: string, linkClazzName: string, authenticationkey?: string, value?: string, simpleValue?: string, check?: boolean, extraHttpRequestParams?: any): Observable<Baselink>;
    /**
     * deletes an entity by id
     * @summary delete
     * @param id The id of the instance to be deleted
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteById(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * deletes an entity by id
     * @summary delete
     * @param id The id of the instance to be deleted
     * @param className The type of the instance to be deleted
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteById_1(id: string, className: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Remove an existing link by the ID of its 'sides'
     * @summary Remove a link
     * @param leftId The ID of the left side of the link
     * @param rightId The ID of the right side of the link
     * @param linkClazzName The canonical name of the class of the link, for example: com.flexicore.model.MediaToBundle, in this case the left ID must be of Media class and the RightID must be of a bundle class
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    detachEntities(leftId: string, rightId: string, linkClazzName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * duplicate an entity by Id , returns null if not successfully duplicated
     * @summary duplicate an entity, shallow by id
     * @param id The ID of the entity required
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    duplicate(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Baseclass>;
    /**
     * exports to file
     * @summary export baseclass
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    exportBaseclass(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<FileResource>;
    /**
     * Find an entity by Id and type, returns null if not found
     * @summary find entity by id and class
     * @param id The ID of the entity required
     * @param classname The canonical classname of the required entity
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    findById(id: string, classname: string, authenticationkey?: string, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<Baseclass>;
    findById(id: string, classname: string, authenticationkey?: string, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Baseclass>>;
    findById(id: string, classname: string, authenticationkey?: string, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Baseclass>>;
    /**
     * Find an instance of a Baseclass extender by its id, returns an instance of a Baseclass
     * @summary Find an instance by ID
     * @param ID The id of instance to be foundw
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    findById_2(ID: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Baseclass>;
    /**
     * returns a list of instances of the type requested
     * @summary Find an instance by its name
     * @param name The name of instance to be found
     * @param classname The cannonical classname of the instance to be found
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    findByName(name: string, classname: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Array<Baseclass>>;
    /**
     *
     * @param left
     * @param right
     * @param classname
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value
     * @param simpleValue
     */
    findBySidesId(left: string, right: string, classname: string, authenticationkey?: string, value?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * @param left
     * @param right
     * @param classname
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value
     * @param simpleValue
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    findLinks(left: string, right: string, classname: string, authenticationkey?: string, value?: string, simpleValue?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, extraHttpRequestParams?: any): Observable<Array<Baselink>>;
    /**
     *
     * @param left
     * @param right
     * @param classname
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value
     * @param simpleValue
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    findLinksContainers(left: string, right: string, classname: string, authenticationkey?: string, value?: string, simpleValue?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, extraHttpRequestParams?: any): Observable<Array<LinkContainer>>;
    /**
     *
     * @param left
     * @param right
     * @param classname
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value
     * @param simpleValue
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    findLinksValues(left: string, right: string, classname: string, authenticationkey?: string, value?: string, simpleValue?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, extraHttpRequestParams?: any): Observable<Array<Baseclass>>;
    /**
     *
     * @param wantedClazzName
     * @param id
     * @param linkClazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body filtering information
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    getConnected(wantedClazzName: string, id: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Array<Baseclass>>;
    /**
  *
  * @param wantedClazzName
  * @param id
  * @param linkClazzName
  * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
  * @param body filtering information
  * @param pagesize Number of entries to be retrieved per page or -1 for full list
  * @param currentpage The current page or -1 for full list
  */
    getConnectedClasses(wantedClazzName: string, id: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     *
     * @param id
     * @param wantedClazzName
     * @param linkClazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    getDisconnected(id: string, wantedClazzName: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Array<Baseclass>>;
    /**
     * import baseclass
     * @summary import baseclass
     * @param className
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    importBaseclass(className: string, authenticationkey?: string, body?: string, extraHttpRequestParams?: any): Observable<boolean>;
    /**
     *
     * @param leftId
     * @param rightId
     * @param operationId
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    linkBaseclassTouser(leftId: string, rightId: string, operationId: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<boolean>;
    /**
     * Helper class for linking Role and User using a RoleUserContainer class, can be carried out by using the Generic createBaselink call
     * @summary Link Role and User
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    linkroleuser(authenticationkey?: string, body?: RoleUserContainer, extraHttpRequestParams?: any): Observable<RoleToUser>;
    /**
     * soft delete baseclass
     * @summary softDelete
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    softDelete(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Update an instance of a Baseclass using a BasicContainer instance
     * @summary Update basic data
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    updateBasicDetails(authenticationkey?: string, body?: BasicContainer, extraHttpRequestParams?: any): Observable<boolean>;
    /**
       *
       *
       * @param wantedClazzName
       * @param id
       * @param linkClazzName
       * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
       * @param body filtering information
       * @param pagesize Number of entries to be retrieved per page or -1 for full list
       * @param currentpage The current page or -1 for full list
       */
    countConnectedWithHttpInfo(wantedClazzName: string, id: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param wantedClazzName
     * @param id
     * @param linkClazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body filtering information
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    countDisconnectedWithHttpInfo(wantedClazzName: string, id: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create a link
     * Creates a link between two instances in a generic way, provide values of the link
     * @param leftId an ID of existing instance, class of which must fit the required class for the supplied Link class
     * @param rightId an ID of existing instance, class of which must fit the required class for the supplied Link class
     * @param linkClazzName The canonical name of the class of the link, for example: com.flexicore.model.MediaToBundle, in this case the left ID must be of Media class and the RightID must be of a bundle class
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value The ID of any instance inheriting from FC Baseclass, this effectively creates a triple link
     * @param simpleValue An explicit value of a string that can be part of the link
     * @param check If true, check if the link with these Left, Right and Complex Value values exists, if yes, then it will not be created
     */
    createBaselinkWithHttpInfo(leftId: string, rightId: string, linkClazzName: string, authenticationkey?: string, value?: string, simpleValue?: string, check?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete
     * deletes an entity by id
     * @param id The id of the instance to be deleted
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteByIdWithHttpInfo(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete
     * deletes an entity by id
     * @param id The id of the instance to be deleted
     * @param className The type of the instance to be deleted
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteById_1WithHttpInfo(id: string, className: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Remove a link
     * Remove an existing link by the ID of its &#39;sides&#39;
     * @param leftId The ID of the left side of the link
     * @param rightId The ID of the right side of the link
     * @param linkClazzName The canonical name of the class of the link, for example: com.flexicore.model.MediaToBundle, in this case the left ID must be of Media class and the RightID must be of a bundle class
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    detachEntitiesWithHttpInfo(leftId: string, rightId: string, linkClazzName: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * duplicate an entity, shallow by id
     * duplicate an entity by Id , returns null if not successfully duplicated
     * @param id The ID of the entity required
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    duplicateWithHttpInfo(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * export baseclass
     * exports to file
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    exportBaseclassWithHttpInfo(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * export baseclass
     * exports to file
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    setBaseclassTenant(authenticationkey?: string, body?: SetBaseclassTenantRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Find an instance by ID
     * Find an instance of a Baseclass extender by its id, returns an instance of a Baseclass
     * @param ID The id of instance to be found
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    findById_2WithHttpInfo(ID: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Find an instance by its name
     * returns a list of instances of the type requested
     * @param name The name of instance to be found
     * @param classname The cannonical classname of the instance to be found
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    findByNameWithHttpInfo(name: string, classname: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param left
     * @param right
     * @param classname
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value
     * @param simpleValue
     */
    findBySidesIdWithHttpInfo(left: string, right: string, classname: string, authenticationkey?: string, value?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param left
     * @param right
     * @param classname
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value
     * @param simpleValue
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    findLinksWithHttpInfo(left: string, right: string, classname: string, authenticationkey?: string, value?: string, simpleValue?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param left
     * @param right
     * @param classname
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value
     * @param simpleValue
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    findLinksContainersWithHttpInfo(left: string, right: string, classname: string, authenticationkey?: string, value?: string, simpleValue?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param left
     * @param right
     * @param classname
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param value
     * @param simpleValue
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    findLinksValuesWithHttpInfo(left: string, right: string, classname: string, authenticationkey?: string, value?: string, simpleValue?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, extraHttpRequestParams?: any): Observable<Response>;
    getFilterClassInfo(body?: GetClassInfo, authenticationkey?: string, observe?: 'body', reportProgress?: boolean): Observable<ParameterInfo>;
    getFilterClassInfo(body?: GetClassInfo, authenticationkey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ParameterInfo>>;
    getFilterClassInfo(body?: GetClassInfo, authenticationkey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ParameterInfo>>;
    getClassInfo(authenticationkey?: string, body?: GetClassInfo, extraHttpRequestParams?: any): Observable<ParameterInfo>;
    getExample(authenticationkey?: string, body?: GetClassInfo, extraHttpRequestParams?: any): Observable<any>;
    getClassInfoWithHttpInfo(authenticationkey?: string, body?: GetClassInfo, extraHttpRequestParams?: any): Observable<Response>;
    getExampleWithHttpInfo(authenticationkey?: string, body?: GetClassInfo, extraHttpRequestParams?: any): Observable<Response>;
    listInheritingClasses(authenticationKey?: string, body?: GetClassInfo, extraHttpRequestParams?: any, observe?: 'body', reportProgress?: boolean): Observable<Response>;
    listInheritingClasses(authenticationKey?: string, body?: GetClassInfo, extraHttpRequestParams?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Response>>;
    listInheritingClasses(authenticationKey?: string, body?: GetClassInfo, extraHttpRequestParams?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Response>>;
    listAllBaseclassGeneric<T extends FilteringInformationHolder, E>(authenticationkey?: string, body?: T, extraHttpRequestParams?: any): Observable<PaginationResponse<E>>;
    listAllBaseclassGenericWithHttpInfo<T extends FilteringInformationHolder>(authenticationkey?: string, body?: T, extraHttpRequestParams?: any): Observable<Response>;
    exportBaseclassGeneric<T extends FilteringInformationHolder>(authenticationkey?: string, body?: ExportBaseclassGeneric<T>, extraHttpRequestParams?: any): Observable<FileResource>;
    exportBaseclassGenericWithHttpInfo<T extends FilteringInformationHolder>(authenticationkey?: string, body?: ExportBaseclassGeneric<T>, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param wantedClazzName
     * @param id
     * @param linkClazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body filtering information
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    getConnectedWithHttpInfo(wantedClazzName: string, id: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param wantedClazzName
     * @param id
     * @param linkClazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body filtering information
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    getConnectedClassesWithHttpInfo(wantedClazzName: string, id: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     * @param wantedClazzName
     * @param linkClazzName
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    getDisconnectedWithHttpInfo(id: string, wantedClazzName: string, linkClazzName: string, authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, valueId?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * import baseclass
     * import baseclass
     * @param className
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    importBaseclassWithHttpInfo(className: string, authenticationkey?: string, body?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param leftId
     * @param rightId
     * @param operationId
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    linkBaseclassTouserWithHttpInfo(leftId: string, rightId: string, operationId: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Link Role and User
     * Helper class for linking Role and User using a RoleUserContainer class, can be carried out by using the Generic createBaselink call
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    linkroleuserWithHttpInfo(authenticationkey?: string, body?: RoleUserContainer, extraHttpRequestParams?: any): Observable<Response>;
    nameLike(classname: string, body?: FilteringInformationHolder, authenticationkey?: string, pagesize?: number, currentpage?: number, observe?: 'body', reportProgress?: boolean): Observable<Baseclass[]>;
    nameLike(classname: string, body?: FilteringInformationHolder, authenticationkey?: string, pagesize?: number, currentpage?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Baseclass[]>>;
    nameLike(classname: string, body?: FilteringInformationHolder, authenticationkey?: string, pagesize?: number, currentpage?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Baseclass[]>>;
    /**
     * softDelete
     * soft delete baseclass
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    softDeleteWithHttpInfo(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update basic data
     * Update an instance of a Baseclass using a BasicContainer instance
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    updateBasicDetailsWithHttpInfo(authenticationkey?: string, body?: BasicContainer, extraHttpRequestParams?: any): Observable<Response>;
    genericSoftDelete(body?: BasicDelete, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<BasicDeleteResponse>;
    recover(id: string, authenticationkey?: string, observe?: 'body', reportProgress?: boolean): Observable<Baseclass[]>;
    recover(id: string, authenticationkey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Baseclass[]>>;
    recover(id: string, authenticationkey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Baseclass[]>>;
}
