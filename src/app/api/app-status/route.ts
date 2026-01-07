import { APP_STATUS_CHECK_UNAUTHORIZED } from '@/constants/errors';
import { APP_STATUS_CHECK_HEADER_REGEX } from '@/constants/regex';

export async function GET(request: Request) {
    const appStatusCheckHeader = request.headers.get('x-app-status-check') ?? '';

    if (APP_STATUS_CHECK_HEADER_REGEX.test(appStatusCheckHeader)) {
        return new Response(`Portfolio app is running | ${new Date().toLocaleString(undefined, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        })}`, { status: 200 });
    }

    return new Response(null, {
        status: 401,
        statusText: APP_STATUS_CHECK_UNAUTHORIZED
    });
}
