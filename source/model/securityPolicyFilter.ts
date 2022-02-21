import { BaseclassFilter } from "./baseclassFilter";
import { FilteringInformationHolder } from "./filteringInformationHolder";

export interface SecurityPolicyFilter extends BaseclassFilter {
    securityTenantsIds?: string[];
    rolesIds?: string[];
    startTime?: Date;
    enabled?: boolean;
    includeNoRole?: boolean;
}