import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

let mochaPlugins: any = [];
try {
  const mocha = await import("@getmocha/vite-plugins");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mochaPlugins = mocha.mochaPlugins(process.env as any);
} catch (error) {
  console.log("Running without Mocha plugins");
}

export default defineConfig({
  plugins: [...mochaPlugins, react(), cloudflare()],
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
