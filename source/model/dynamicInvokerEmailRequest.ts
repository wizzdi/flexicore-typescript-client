import { ExportDynamicInvokerToCSVRequest } from "./exportDynamicInvokerToCSVRequest";

export interface DynamicInvokerEmailRequest { 
    exportDynamicInvoker?: ExportDynamicInvokerToCSVRequest;
    emails?: string[];
    zoneOffset?: string;
    title?: string;
}
