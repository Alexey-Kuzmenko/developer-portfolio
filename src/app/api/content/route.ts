import { ContentType } from '@/models/content.model';
import getEnvVariable from '@/utils/getEnvVariable';
import { throwCustomError } from '@/utils/throwCustomError';

export async function GET(req: Request) {
    const API_KEY = getEnvVariable('NEXT_API_KEY');
    const API_URL = getEnvVariable('NEXT_API_URL');

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
            throwCustomError('content API route', error.message);
        }
    }
}
