export interface TotpFinishSetupRequest {
    code?: string;
}
export interface TotpFinishSetupResponse {
    totpRecoveryCodes?: string[];
}
export interface TotpRecoverRequest {
    recoveryCode?: string;
}
export interface TotpRecoverResponse {
    totpAuthenticationToken?: string;
}
export interface TotpAuthenticationRequest {
    code?: string;
}
export interface TotpAuthenticationResponse {
    totpAuthenticationToken?: string;
}
export interface TotpSetupRequest {
}
export interface TotpSetupResponse {
    secret?: string;
    base64QRCode?: string;
}
