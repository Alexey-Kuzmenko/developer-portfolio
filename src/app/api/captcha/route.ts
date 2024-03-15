import { reCaptchaResponse } from '@/models/reCaptcha-response.model';

export async function POST(request: Request) {
    const captchaResponse = await request.json();

    const response = await fetch(`${process.env.API_URL}/captcha/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(captchaResponse)
    });

    const data: reCaptchaResponse = await response.json();

    if (data.success) {
        return Response.json(data);
    } else {
        return new Response(null, {
            status: 400,
            statusText: data.errorCodes?.toString()
        });
    }
}