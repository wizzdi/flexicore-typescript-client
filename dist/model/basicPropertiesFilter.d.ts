import { DateFilter } from "./dateFilter";
export declare class BasicPropertiesFilter {
    creationDateFilter?: DateFilter;
    nameLike?: string;
    names?: string[];
    softDelete?: boolean;
    updateDateFilter?: DateFilter;
    onlyIds?: string[];
    nameLikeCaseSensitive?: boolean;
}
