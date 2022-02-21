import { BasicPropertiesFilter } from "..";
import { BaseclassFilter } from "./baseclassFilter";
export interface SecurityEntityFilter extends BaseclassFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
}
