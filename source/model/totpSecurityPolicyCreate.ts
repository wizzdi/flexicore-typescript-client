import { SecurityPolicyCreate } from "./securityPolicyCreate";

export interface TotpSecurityPolicyCreate extends SecurityPolicyCreate {
    forceTotp?: boolean;
    allowedConfigureOffsetMs?: number;
}