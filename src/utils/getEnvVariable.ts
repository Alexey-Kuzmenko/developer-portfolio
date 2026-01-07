/* 
    * Don't use this function for runtime env variables 
    * Runtime env variables have a NEXT_PUBLIC_ prefix
*/

import { EnvFileKeys } from '@/types/env-file-keys.type';

export default function getEnvVariable(name: EnvFileKeys) {
    const value: string | undefined = process.env[name];

    if (!value) {
        throw new Error(`Environment variable: ${name} isn't defined in .env file`);
    }

    return value;
}
