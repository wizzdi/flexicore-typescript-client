import { ExportDynamicInvokerToCSVRequest } from "./exportDynamicInvokerToCSVRequest";

export interface DynamicInvokerCSVEmailRequest { 
    exportDynamicInvoker?: ExportDynamicInvokerToCSVRequest;
    emails?: string[];
    zoneOffset?: string;
    title?: string;
}
