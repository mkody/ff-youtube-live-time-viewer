import { crx, defineManifest } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import packageJson from './package.json'

const { description, version, productName } = packageJson

const manifest = defineManifest({
  name: productName,
  description,
  version,
  manifest_version: 3,
  icons: {
    128: 'icon.png',
  },
  background: {
    scripts: ['src/background.ts'],
  },
  content_scripts: [
    {
      matches: ['https://www.youtube.com/*'],
      js: ['src/content-script.ts'],
    },
    {
      matches: ['https://www.youtube.com/live_chat_replay*'],
      all_frames: true,
      js: ['src/content-script-frame.ts'],
    },
  ],
  permissions: ['storage'],
  host_permissions: ['https://www.youtube.com/*'],
  // @ts-ignore
  browser_specific_settings: {
    gecko: {
      id: 'ff-youtube-live-time-viewer@kdy.ch',
      strict_min_version: '115.0',
    },
  },
})

export default defineConfig({
  plugins: [crx({ manifest }), tsconfigPaths()],
  server: { port: 9012, hmr: { port: 9012 } },
})
