import { ReportLanguage } from "./enums";

export interface ReportCreate { 
        name?: string;
        description?: string;
        autoPeriod?: string;
        currentPage?: number;
        request?: string;
        scheduled?: boolean;
        totalPages?: number;
        reportLanguage?: ReportLanguage;
        unsecured?: boolean;
        url?: string;
}