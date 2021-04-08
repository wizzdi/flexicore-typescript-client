import { ExecutionParametersHolder } from "./executionParametersHolder";
import { Baseclass } from "./baseclass";

export interface SecurityPolicy extends ExecutionParametersHolder {
    name?: string;
    description?: string;
    softDelete?: boolean;
    creationDate?: Date;
    updateDate?: Date;
    startTime?: Date;
    enabled?: boolean;
    policyRole?: PolicyRole;
    policyTenant?: SecurityTenant;
    security?: SecurityPolicyBaseClass;
}

export interface SecurityPolicyBaseClass extends Baseclass  {
    dtype?: string;
    creator?: SecurityUser;
    tenant?: SecurityTenant;
    systemObject?: boolean;
    clazz?: SecurityClazz;
    noSQL?: boolean;
}

export interface PolicyRole extends SecurityPolicyBaseClass {
    
}

export interface SecurityUser extends SecurityPolicyBaseClass {

}

export interface SecurityTenant extends SecurityPolicyBaseClass {
    externalId?: string;
}

export interface SecurityClazz extends SecurityPolicyBaseClass {
}