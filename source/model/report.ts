import { Baseclass } from "./baseclass";
import { ReportLanguage } from "./enums";
import { FileResource } from "./fileResource";

export interface Report extends Baseclass { 
        fileResource?: FileResource;
        url?: string;
        unsecured?: boolean;
        currentPage?: number;
        request?: string;
        totalPages?: number;
        reportLanguage?: ReportLanguage;
        scheduled?: boolean;
        autoPeriod?: string;
        endDate?: string;
}