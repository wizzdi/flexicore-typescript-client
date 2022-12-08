import { ExecuteInvokerRequest } from "./executeInvokerRequest";

export interface ExportDynamicInvokerToCSVRequest extends ExecuteInvokerRequest { 
    csvFormat?: any;
    fieldProperties?: any;
}
