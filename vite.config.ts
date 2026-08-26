import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  resolve: {
    tsconfigPaths: true,
  },
    server: {
    host: '0.0.0.0', // Exposes the server to the local network
    port: 5173       // Optional: enforce your default port
  },
  plugins: [react(), tailwindcss()],
}));
