import {defineConfig, loadEnv, splitVendorChunkPlugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  let env = loadEnv(mode, process.cwd() + '/env', '');
  return {
    base: env.BASE_URL,
    mode: mode,
    envDir: "env",
    publicDir: "public",
    assetsInclude: [
      "**/*.gif",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.png"
    ],
    plugins: [
      vue(),
      splitVendorChunkPlugin(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    logLevel: "info"
  }
})
