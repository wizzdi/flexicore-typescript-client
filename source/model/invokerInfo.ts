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
import { InvokerMethodInfo } from './invokerMethodInfo';


export interface InvokerInfo { 
    name?:string; //name to provide when refering to this invoker
    handlingType?:string; // type handled by this invoker - should equal json-type of the relevant object
    description?: string; // human readable description
    displayName?: string; //human readable display name
    methods?: Array<InvokerMethodInfo>; // list of method info
    pluginId?:string;
    
}
