// @ts-check

import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...nextVitals,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            '@typescript-eslint/no-empty-interface': [
                'error',
                {
                    allowSingleExtends: true,
                }
            ],
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'semi': 'warn',
            'no-console': 'warn',
            'no-alert': 'error',
            'quotes': [
                'warn',
                'single'
            ],
            'max-len': [
                'warn',
                {
                    code: 120,
                    ignoreRegExpLiterals: true,
                }
            ],
            'eol-last': 'warn',
        }
    },
    globalIgnores([
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
]);