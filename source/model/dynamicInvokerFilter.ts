import { BasicPropertiesFilter } from "./basicPropertiesFilter";
import { PaginationFilter } from "./paginationFilter";

export interface DynamicInvokerFilter extends PaginationFilter{
  basicPropertiesFilter?: BasicPropertiesFilter;
  invokerTypes?: string[];
  methodNameLike?: string;
  pluginIds?: string[];
  handlingTypes?: string[];
}