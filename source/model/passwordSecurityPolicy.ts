import { SecurityPolicyCreate } from "./securityPolicyCreate";
import { SecurityPolicy } from "./securityPolicy";

export interface PasswordSecurityPolicy extends SecurityPolicy {
    minLength?: number;
    forceDigits?: boolean;
    forceLetters?: boolean;
    forceCapital?: boolean;
    forceLowerCase?: boolean;
}