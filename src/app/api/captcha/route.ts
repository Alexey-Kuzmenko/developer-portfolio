import { reCaptchaResponse } from '@/models/reCaptcha-response.model';
import getEnvVariable from '@/utils/getEnvVariable';
import { throwCustomError } from '@/utils/throwCustomError';

export async function POST(request: Request) {
    const captchaResponse = await request.json();
    const API_URL = getEnvVariable('API_URL');
    const API_KEY = getEnvVariable('API_KEY');

    try {
        const response = await fetch(`${API_URL}/captcha/verify`, {
            method: 'POST',
            headers: {
                'Api-key': API_KEY,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(captchaResponse)
        });

        const data: reCaptchaResponse = await response.json();

        if (data.success) {
            return new Response(JSON.stringify(data), {
                status: response.status
            });
        }

        if (!data.success) {
            return new Response(null, {
                status: 400,
                statusText: data.errorCodes?.toString()
            });
        }
    } catch (error) {
        if (error instanceof Error) {
            throwCustomError('captcha API route', error.message);
        }
    }

}