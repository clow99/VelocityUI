import { mkdir, readdir } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const sharp = createRequire(require.resolve('next/package.json'))('sharp')
const input = new URL(
  '../../../output/playwright/example-captures/',
  import.meta.url,
)
const output = new URL('../public/examples/previews/', import.meta.url)
await mkdir(output, { recursive: true })
for (const file of await readdir(input)) {
  if (!file.endsWith('.png')) continue
  await sharp(fileURLToPath(new URL(file, input)))
    .resize(1120, 740, {
      fit: 'contain',
      position: 'top',
      background: '#fafafa',
    })
    .webp({ quality: 85 })
    .toFile(fileURLToPath(new URL(file.replace('.png', '.webp'), output)))
}
console.log('Optimized example previews.')
