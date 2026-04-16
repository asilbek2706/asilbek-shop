import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    eslintConfigPrettier,

    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
    "rules" = {'react/no-unescaped-entities': 'off'}
]);

export default eslintConfig;
