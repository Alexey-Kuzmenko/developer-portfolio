import { EnvFileKeys } from '@/types/env-file-keys.type';

export default function getEnvVariable(name: EnvFileKeys) {
    const value: string | undefined = process.env[name];

    if (!value) {
        throw new Error(`Environment variable: ${name} isn't defined in .env file`);
    }

    return value;
}