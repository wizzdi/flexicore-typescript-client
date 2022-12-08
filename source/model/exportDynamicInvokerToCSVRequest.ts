export interface ExportDynamicInvokerToCSVRequest { 
    executionParametersHolder?: any;
    invokerNames?: string[];
    invokerMethodName?: string;
    lastExecuted?: Date;
    csvFormat?: any;
    fieldProperties?: any;
}
