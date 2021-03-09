import { SecurityPolicy } from "./securityPolicy";

export interface TotpSecurityPolicy extends SecurityPolicy {
    forceTotp?: boolean;
    allowedConfigureOffsetMs?: number;
}