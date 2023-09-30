import { BasicPropertiesFilter } from "./basicPropertiesFilter";
import { EmailType } from "./enums";

export interface ReportToEmailFilter { 
        pageSize?: number;
        currentPage?: number;
        basicPropertiesFilter?: BasicPropertiesFilter;
        emailIds?: string[];
        emailType?: EmailType[];
        reportIds?: string[];
}