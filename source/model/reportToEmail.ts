import { Baseclass } from "./baseclass";
import { EmailTarget } from "./emailTarget";
import { EmailType } from "./enums";
import { Report } from "./report";

export interface ReportToEmail extends Baseclass { 
        email?: EmailTarget;
        emailType?: EmailType;
        report?: Report;
}