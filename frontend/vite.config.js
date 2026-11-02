import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    // ngrok tunnels use a random *.ngrok-free.app host; Vite blocks unknown
    // Host headers by default, so allow the whole domain.
    allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.dev', '.ngrok.app', '.ngrok.io'],
  },
  preview: {
    host: true,
    allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.dev', '.ngrok.app', '.ngrok.io'],
  },
})
