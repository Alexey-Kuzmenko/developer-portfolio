import { ContentType } from '@/models/content.model';

export async function GET(req: Request) {
    const API_KEY = process.env.API_KEY;
    const { searchParams } = new URL(req.url);
    const contentLang = searchParams.get('lang');

    if (!API_KEY) {
        return new Response(null, {
            status: 500,
            statusText: 'Internal Server Error | API KEY is not defined'
        });
    }

    const response = await fetch(`${process.env.API_URL}/content/${ContentType.CONTACTS}/${contentLang}`, {
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

}