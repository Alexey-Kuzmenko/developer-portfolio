export interface reCaptchaResponse {
    success: boolean;
    challenge_ts?: Date;
    hostname: string;
    errorCodes?: Array<string>;
}