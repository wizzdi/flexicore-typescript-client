import { EmailType } from "./enums";

export interface ReportToEmailCreate { 
        name?: string;
        description?: string;
        emailId?: string;
        emailType?: EmailType;
        reportId?: string;
}