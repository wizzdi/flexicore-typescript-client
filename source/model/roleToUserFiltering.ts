import { FilteringInformationHolder } from "./filteringInformationHolder";

export interface RoleToUserFiltering extends FilteringInformationHolder {
    clazzIds?: string[];
    usersIds?: string[];
    rolesIds?: string[]
}
