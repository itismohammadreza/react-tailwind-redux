import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

export default defineConfig({
  base: '/react-tailwind-redux/',
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "./src/assets/"),
      "@components": resolve(__dirname, "./src/components/"),
      "@config": resolve(__dirname, "./src/config/"),
      "@contexts": resolve(__dirname, "./src/contexts/"),
      "@hooks": resolve(__dirname, "./src/hooks/"),
      "@locales": resolve(__dirname, "./src/locales/"),
      "@models": resolve(__dirname, "./src/models/"),
      "@pages": resolve(__dirname, "./src/pages/"),
      "@powell": resolve(__dirname, "./src/powell/"),
      "@redux": resolve(__dirname, "./src/redux/"),
      "@services": resolve(__dirname, "./src/services/"),
      "@styles": resolve(__dirname, "./src/styles/"),
      "@theme": resolve(__dirname, "./src/theme/"),
      "@utils": resolve(__dirname, "./src/utils/"),
      "@root": resolve(__dirname, "./src/"),
    }
  }
})
