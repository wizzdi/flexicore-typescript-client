import { BasicPropertiesFilter } from "./basicPropertiesFilter";
import { PaginationFilter } from "./paginationFilter";

export class PresetFilter extends PaginationFilter {
  basicPropertiesFilter?: BasicPropertiesFilter;
}