import { MakerDeb } from '@electron-forge/maker-deb'
import { MakerRpm } from '@electron-forge/maker-rpm'
import { MakerSquirrel } from '@electron-forge/maker-squirrel'
import { MakerZIP } from '@electron-forge/maker-zip'
import { VitePlugin } from '@electron-forge/plugin-vite'
import type { ForgeConfig } from '@electron-forge/shared-types'

const config: ForgeConfig = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({}),
    new MakerZIP({}, ['darwin']),
    new MakerRpm({}),
    new MakerDeb({})
  ],
  plugins: [
    new VitePlugin({
      build: [{
        entry: 'src/main/main.ts',
        config: 'vite.main.config.ts'
      }, {
        entry: 'src/preload/preload.ts',
        config: 'vite.preload.config.ts'
      }],
      renderer: [{
        name: 'main_window',
        config: 'vite.main_window.config.ts'
      }]
    })
  ]
}

export default config
