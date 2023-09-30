import { BasicPropertiesFilter } from "./basicPropertiesFilter";
import { ScheduledPeriod } from "./enums";

export interface EmailTargetFilter {
        pageSize?: number;
        currentPage?: number;
        autoPeriod?: ScheduledPeriod[];
        basicPropertiesFilter?: BasicPropertiesFilter;
        emailReportToEmailsIds?: string[];
        mail?: string[];
}