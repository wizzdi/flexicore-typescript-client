import { Baseclass, FileResource } from "@flexicore/flexicore-client";
import { ReportLanguage } from "./enums";

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