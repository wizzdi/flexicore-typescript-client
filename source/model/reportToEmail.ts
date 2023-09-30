import { Baseclass } from "./baseclass";
import { EmailTarget } from "./emailTarget";
import { AutoPeriod, EmailType } from "./enums";
import { Report } from "./report";

export interface ReportToEmail extends Baseclass { 
        email?: EmailTarget;
        emailType?: EmailType;
        autoPeriod?: AutoPeriod;
        report?: Report;
}