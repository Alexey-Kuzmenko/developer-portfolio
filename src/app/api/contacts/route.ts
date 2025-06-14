export const dynamic = 'force-dynamic';

import getEnvVariable from '@/utils/getEnvVariable';
import { throwCustomError } from '@/utils/throwCustomError';

export async function GET() {
    const API_KEY = getEnvVariable('NEXT_API_KEY');
    const API_URL = getEnvVariable('NEXT_API_URL');

    try {
        const response = await fetch(`${API_URL}/contacts`, {
            headers: {
                'Api-key': API_KEY
            }
        });

        if (response.ok) {
            const data = await response.json();
            return new Response(JSON.stringify(data), {
                status: response.status
            });
        } else {
            return new Response(null, {
                status: response.status,
                statusText: response.statusText
            });
        }
    } catch (error) {
        if (error instanceof Error) {
            throwCustomError('contacts API route', error.message);
        }
    }
}
