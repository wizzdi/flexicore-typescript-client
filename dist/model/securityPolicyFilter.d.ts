import { FilteringInformationHolder } from "./filteringInformationHolder";
export interface SecurityPolicyFilter extends FilteringInformationHolder {
    securityTenantsIds?: string[];
    rolesIds?: string[];
    startTime?: Date;
    enabled?: boolean;
    includeNoRole?: boolean;
}
