import { BasicPropertiesFilter } from "./basicPropertiesFilter";

export interface SecurityTenantsFiltering {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
}