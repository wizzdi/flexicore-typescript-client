import { ExecuteInvokerRequest } from "./executeInvokerRequest";

export interface ExportDynamicInvokerToCSVRequest extends ExecuteInvokerRequest { 
    lastExecuted?: Date;
    csvFormat?: any;
    fieldProperties?: any;
}
