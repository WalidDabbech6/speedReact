import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
   eslintPlugin({
    cache: false,
    include: ['./src/**/*.js', './src/**/*.jsx'],
    exclude: [],
   }),
  ],
  server: {
    host: true,
    hmr:{
      overlay:false
    },
    port: 4200, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
     
  }})
