import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@configs', replacement: fileURLToPath(new URL('./src/config', import.meta.url)) },
      { find: '@shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
      { find: '@utils', replacement: fileURLToPath(new URL('./src/shared/utils', import.meta.url)) },
      { find: '@constants', replacement: fileURLToPath(new URL('./src/shared/constants', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: '@apps', replacement: fileURLToPath(new URL('./src/apps', import.meta.url)) }
    ]
  }
})
