import { BasicPropertiesFilter } from "./basicPropertiesFilter";
import { AutoPeriod } from "./enums";

export interface EmailTargetFilter {
        pageSize?: number;
        currentPage?: number;
        autoPeriod?: AutoPeriod[];
        basicPropertiesFilter?: BasicPropertiesFilter;
        emailReportToEmailsIds?: string[];
        mail?: string[];
}