import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
export default defineConfig(function (_a) {
    var isSsrBuild = _a.isSsrBuild;
    return ({
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        build: {
            target: 'es2020',
            sourcemap: false,
            rollupOptions: {
                output: isSsrBuild
                    ? {}
                    : {
                        manualChunks: {
                            react: ['react', 'react-dom', 'react-router-dom'],
                            motion: ['framer-motion'],
                        },
                    },
            },
        },
    });
});
