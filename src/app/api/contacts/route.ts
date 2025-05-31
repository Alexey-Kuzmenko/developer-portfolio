import { ApiRoutesErrors } from '@/constants/errors';
import getEnvVariable from '@/utils/getEnvVariable';

export async function GET() {
    const API_KEY = getEnvVariable('API_KEY');
    const API_URL = getEnvVariable('API_URL');

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
            throw new Error(`${ApiRoutesErrors.CONTACTS_ROUTE_ERROR} ${error.message}`);
        }
    }

}
