export async function POST(req: Request) {
    const API_KEY = process.env.API_KEY;
    const formData = await req.json();

    if (!API_KEY) {
        return new Response(null, {
            status: 500,
            statusText: 'Internal Server Error | API KEY is not defined'
        });
    }

    const response = await fetch(`${process.env.API_URL}/telegram/notify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Api-key': API_KEY
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        const data = await response.json();
        return Response.json(data);
    } else {
        return new Response(null, {
            status: response.status,
            statusText: response.statusText
        });
    }

}