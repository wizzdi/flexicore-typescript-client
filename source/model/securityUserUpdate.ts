import { SecurityEntityCreate } from "./securityEntityCreate";
import { SecurityUserCreate } from "./securityUserCreate";

export interface SecurityUserUpdate extends SecurityUserCreate{
    id?:string;

}