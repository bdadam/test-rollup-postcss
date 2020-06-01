// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import jsx from 'acorn-jsx';
import postcss from 'rollup-plugin-postcss';
import outputManifest from 'rollup-plugin-output-manifest';
import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/main.tsx',
    output: {
        // file: 'main.mjs',
        // assetFileNames: '[name].[hash].[ext]',
        // entryFileNames: '[name].[hash].js',
        // chunkFileNames: '[name].[hash].js',
        dir: 'dist',
        format: 'es',
    },
    acornInjectPlugins: [jsx()],
    plugins: [
        resolve(),
        typescript({
            // useTsconfigDeclarationDir: true,
            tsconfig: 'tsconfig.json',
            // jsx: 'react',
            // jsxFactory: 'h'
        }),
        babel({
            extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
            babelHelpers: 'bundled',
            presets: [
                // ['@babel/env', { modules: false }],
                ['@babel/env', { targets: { node: '14' } }],
                // ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
                ['@babel/preset-typescript'],
                '@babel/preset-react',
            ],
        }),
        commonjs(),
        terser(),
        postcss({
            extract: true,
            // minimize: true,
        }),
        outputManifest(),
    ],
};
