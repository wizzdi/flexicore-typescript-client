import { ParameterInfo } from "./parameterInfo";

export interface InvokerMethodHolder {
  categories?: string[];
  description?: string;
  displayName?: string;
  id?: string;
  invokerName?: string;
  name?: string;
  parameterHolderType?: string;
  parameters?: ParameterInfo[];
  relatedMethodNames?: string[];
  returnType?: string;
}