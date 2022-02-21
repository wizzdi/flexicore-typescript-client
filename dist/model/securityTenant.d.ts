import { SecurityEntity } from "./securityEntity";
export interface SecurityTenant extends SecurityEntity {
    externalId?: string;
}
