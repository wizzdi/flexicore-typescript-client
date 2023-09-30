import { Baseclass } from "./baseclass";

export interface EmailTarget extends Baseclass { 
        mail?: string;
        autoPeriod?: string;
}