import getEnvVariable from '@/utils/getEnvVariable';
import { throwCustomError } from '@/utils/throwCustomError';

export async function POST(request: Request) {
    const API_URL = getEnvVariable('API_URL');
    const API_KEY = getEnvVariable('API_KEY');
    const formData = await request.json();

    try {
        const response = await fetch(`${API_URL}/telegram/notify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Api-key': API_KEY
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            return new Response(null, {
                status: 200
            });
        } else {
            return new Response(null, {
                status: response.status,
                statusText: response.statusText
            });
        }
    } catch (error) {
        if (error instanceof Error) {
            throwCustomError('order API route', error.message);
        }
    }
}