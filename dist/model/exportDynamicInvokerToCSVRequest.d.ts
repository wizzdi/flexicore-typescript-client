import { ExecuteInvokerRequest } from "./executeInvokerRequest";
import { FieldProperties } from "./fieldProperties";
export interface ExportDynamicInvokerToCSVRequest extends ExecuteInvokerRequest {
    csvFormat?: any;
    fieldProperties?: Map<string, FieldProperties>;
    lastExecuted?: Date;
}
