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
    type: 'module',
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
  action: {
    default_icon: {
      128: 'icon.png',
    },
    default_popup: 'src/popup.html',
  },
  permissions: ['storage'],
  host_permissions: ['https://www.youtube.com/*'],
  // @ts-expect-error
  browser_specific_settings: {
    gecko: {
      id: 'ff-youtube-live-time-viewer@kdy.ch',
      strict_min_version: '115.0',
      data_collection_permissions: {
        required: ['none'],
      },
    },
  },
})

export default defineConfig({
  plugins: [crx({ manifest }), tsconfigPaths()],
  server: {
    cors: {
      origin: [/chrome-extension:\/\//],
    },
  },
})
