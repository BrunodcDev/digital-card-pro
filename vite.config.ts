import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Para GitHub Pages: mude '/nome-do-repositorio/' para o nome do seu repo
  // Exemplo: se o repo é 'meu-cartao', coloque base: '/meu-cartao/'
  // Para domínio customizado ou root, use base: '/'
  base: process.env.NODE_ENV === 'production' ? '/digital-card-pro/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
