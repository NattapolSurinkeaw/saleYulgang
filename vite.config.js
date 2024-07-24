import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                    'resources/js/app.jsx',
                    
                    'public/js/detailProduct.js',
                    'public/js/main.js',
                    'public/js/navbar.js',
                    'public/css/modal.css',
                    'resources/css/app.css',
                    'resources/css/modal.css',
            ],
            refresh: true,
        }),
        react(),
    ],
});
