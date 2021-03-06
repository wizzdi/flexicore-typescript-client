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
export interface ParameterInfo {
    name?: string;
    description?: string;
    displayName?: string;
    type?: string;
    subParameters?: ParameterInfo[];
    idRefType?: string;
    mandatory?: boolean;
    list?: boolean;
    idRef?: boolean;
    rangeMax?: number;
    rangeMin?: number;
    valueSteps?: number;
    regexValidation?: string;
}
