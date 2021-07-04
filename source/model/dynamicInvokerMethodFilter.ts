import { BasicPropertiesFilter } from "./basicPropertiesFilter";
import { DynamicInvokerFilter } from "./dynamicInvokerFilter";
import { PaginationFilter } from "./paginationFilter";

export interface DynamicInvokerMethodFilter extends PaginationFilter{
  basicPropertiesFilter?: BasicPropertiesFilter;
  categories?: string[];
  dynamicInvokerFilter?: DynamicInvokerFilter;
  emptyCategories?:boolean;

}