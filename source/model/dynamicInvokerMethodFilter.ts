import { DynamicInvokerFilter } from "./dynamicInvokerFilter";

export interface DynamicInvokerMethodFilter {
  categories?: string[];
  currentPage?: number;
  dynamicInvokerFilter?: DynamicInvokerFilter;
  nameLike?: string;
  pageSize?: number;
}