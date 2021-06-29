import { Basic } from "./basic";
import { DynamicExecution } from "./dynamicExecution";
export interface GridPreset extends Basic {
    relatedClassCanonicalName?: string;
    dynamicExecution?: DynamicExecution;
    latMapping?: string;
    lonMapping?: string;
}
