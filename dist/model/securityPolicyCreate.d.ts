export interface SecurityPolicyCreate {
    name?: string;
    description?: string;
    softDelete?: boolean;
    idForCreate?: string;
    startTime?: Date;
    enabled?: boolean;
    policyRoleId?: string;
    policyTenantId?: string;
    securityId?: string;
}
