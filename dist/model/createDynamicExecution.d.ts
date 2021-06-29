import { BasicCreate } from "./basicCreate";
import { ExecutionParametersHolder } from "./executionParametersHolder";
export interface CreateDynamicExecution extends BasicCreate {
    serviceCanonicalNames?: string[];
    methodName?: string;
    executionParametersHolder?: ExecutionParametersHolder;
}
