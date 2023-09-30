import { BasicPropertiesFilter } from "./basicPropertiesFilter";

export interface ReportFilter { 
        pageSize?: number;
        currentPage?: number;
        autoPeriod?: string;
        basicPropertiesFilter?: BasicPropertiesFilter;
        employeeNameLike?: string;
        currentPageEnd?: number;
        currentPageStart?: number;
        endDateEnd?: string;
        endDateStart?: string;
        fileResource?: string[];
        reportGeneratedPagesIds?: string[];
        reportReportToEmailsIds?: string[];
        request?: string[];
        scheduled?: string[];
        startDateEnd?: string;
        startDateStart?: string;
        totalPagesEnd?: number;
        totalPagesStart?: number;
        uniqueId?: string[];
        url?: string[];
}