import { SecurityPolicyCreate } from "./securityPolicyCreate";
export interface PasswordSecurityPolicyCreate extends SecurityPolicyCreate {
    minLength?: number;
    forceDigits?: boolean;
    forceLetters?: boolean;
    forceCapital?: boolean;
    forceLowerCase?: boolean;
}
