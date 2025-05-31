import { ApiRoutesErrors } from '@/constants/errors';
import { ContentType } from '@/models/content.model';
import getEnvVariable from '@/utils/getEnvVariable';

export async function GET(req: Request) {
    const API_KEY = getEnvVariable('API_KEY');
    const API_URL = getEnvVariable('API_URL');

    const { searchParams } = new URL(req.url);
    const contentLang = searchParams.get('lang');

    try {
        const response = await fetch(`${API_URL}/content/${ContentType.CONTACTS}/${contentLang}`, {
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
            throw new Error(`${ApiRoutesErrors.CONTENT_ROUTE_ERROR} ${error.message}`);
        }
    }
}