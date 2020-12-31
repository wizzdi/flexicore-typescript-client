import { FilteringInformationHolder } from './filteringInformationHolder';
export interface InvokersFilter extends FilteringInformationHolder {
    invokerTypes?: Array<string>;
    classTypes?: Array<string>;
}
