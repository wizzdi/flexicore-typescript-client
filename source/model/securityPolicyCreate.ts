import { BasicCreate } from "..";

export interface SecurityPolicyCreate extends BasicCreate{
    startTime?: Date,
    enabled?: boolean,
    policyRoleId?: string,
    policyTenantId?: string,
    securityId?: string,
}