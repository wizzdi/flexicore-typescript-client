import { Baseclass } from "./baseclass";
import { FileResource } from "./fileResource";

export interface SecurityTenants extends Baseclass {
    javaType?: string;
    noSQL?: boolean;
    icon?: FileResource;
    externalId?: string;
    systemObject?: boolean;
    dtype?: string;
}