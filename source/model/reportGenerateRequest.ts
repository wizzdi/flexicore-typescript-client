export interface ReportGenerateRequest { 
        reportId?: string;
        page?: number;
        createPages?: boolean;
        finalize?: boolean;
        recreate?: boolean;
}