import { BasicCreate } from "./basicCreate";
export interface CreateGridPreset extends BasicCreate {
    relatedClassCanonicalName?: string;
    dynamicExecutionId?: string;
    latMapping?: string;
    lonMapping?: string;
}
