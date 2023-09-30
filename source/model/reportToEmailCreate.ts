import { AutoPeriod, EmailType } from "./enums";

export interface ReportToEmailCreate { 
        name?: string;
        description?: string;
        autoPeriod?: AutoPeriod;
        emailId?: string;
        emailType?: EmailType;
        reportId?: string;
}