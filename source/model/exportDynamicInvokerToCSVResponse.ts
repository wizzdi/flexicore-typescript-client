import { Baseclass } from "./baseclass";

export interface ExportDynamicInvokerToCSVResponse extends Baseclass { 
    md5?: string;
    offset?: number;
    actualFilename?: string;
    originalFilename?: string;
    done?: boolean;
    dateTaken?: Date;
    nonDownloadable?: boolean;
    keepUntil?: Date;
    onlyFrom?: string;
    fullPath?: string;
    javaType?: string;
}
