import { Baseclass } from "./baseclass";
import { Basic, Role, SecurityTenant } from "..";
export interface SecurityPolicy extends Basic {
    startTime?: Date;
    enabled?: boolean;
    policyRole?: Role;
    policyTenant?: SecurityTenant;
    security?: Baseclass;
}
