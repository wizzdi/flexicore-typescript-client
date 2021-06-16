import { DateFilter } from "./dateFilter";

export class BasicPropertiesFilter {
  creationDateFilter?: DateFilter;
  nameLike?: string;
  names?: string[];
  softDelete?: boolean;
  updateDateFilter?: DateFilter;
}