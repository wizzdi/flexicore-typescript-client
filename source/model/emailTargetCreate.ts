import { ScheduledPeriod } from "./enums";

export interface EmailTargetCreate { 
        name?: string;
        description?: string;
        autoPeriod?: ScheduledPeriod;
        mail?: string;
}