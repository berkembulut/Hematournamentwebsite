import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// For GitHub/Vercel deployment: resolves figma:asset/ imports to local src/assets/ files.
// Only activates when src/assets/ directory exists (i.e., NOT in Figma Make).
function figmaAssetPlugin() {
  const assetsDir = path.resolve(__dirname, 'src/assets')
  const hasLocalAssets = fs.existsSync(assetsDir)

  return {
    name: 'figma-asset-resolver',
    enforce: 'pre' as const,
    resolveId(source: string) {
      if (!hasLocalAssets) return null // In Figma Make — let platform handle it
      if (source.startsWith('figma:asset/')) {
        const filename = source.replace('figma:asset/', '')
        return path.resolve(assetsDir, filename)
      }
      return null
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})