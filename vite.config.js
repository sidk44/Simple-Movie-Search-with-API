import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Simple-Movie-Search-with-API/',
  plugins: [react()],
})

// export default defineConfig({
//   base: '/Simple-Movie-Search-with-API/',
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['@suprsend/react-inbox']
//   },
//   build: {
//     rollupOptions: {
//       external: ['@suprsend/react-inbox']
//     }
//   }
// });