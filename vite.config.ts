import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:true,
    port: 3050, //docker spec
    watch: {
      usePolling: true
    },
  },
  build: {
    outDir: "build", //override original "dist" folder
  }
})
