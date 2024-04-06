import { reCaptchaResponse } from '@/models/reCaptcha-response.model';

export async function POST(request: Request) {
    const captchaResponse = await request.json();
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
        return new Response(null, {
            status: 500,
            statusText: 'Internal Server Error | API_KEY is not defined'
        });
    }

    const response = await fetch(`${process.env.API_URL}/captcha/verify`, {
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
}