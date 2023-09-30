import { AutoPeriod } from "./enums";

export interface EmailTargetCreate { 
        name?: string;
        description?: string;
        autoPeriod?: AutoPeriod;
        mail?: string;
}