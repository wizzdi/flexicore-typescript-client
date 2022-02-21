import { BaseclassFilter } from "./baseclassFilter";
export interface SecurityPolicyFilter extends BaseclassFilter {
    securityTenantsIds?: string[];
    rolesIds?: string[];
    startTime?: Date;
    enabled?: boolean;
    includeNoRole?: boolean;
}
