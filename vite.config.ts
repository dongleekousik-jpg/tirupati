import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // This is critical: Vercel provides the key as a system env var.
      // We must explicitly replace 'process.env.API_KEY' in the client code 
      // with the actual string value during the build process.
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});
