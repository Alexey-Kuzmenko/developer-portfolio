export async function GET() {
    const API_KEY = process.env.API_KEY ? process.env.API_KEY : '';

    if (!API_KEY) {
        return new Response(null, {
            status: 500,
            statusText: 'Internal Server Error | API_KEY is not defined'
        });
    }

    const response = await fetch(`${process.env.API_URL}/contacts`, {
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
