import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": "/src",
            "~": "/public",
        },
        
    },
    server: {
        host: '192.168.112.106', // Địa chỉ IP của máy tính chạy ứng dụng
        port: 3000, // Cổng
    },
});
