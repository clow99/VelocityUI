import { readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'

// Reuse the image processor installed with Next.js. No runtime dependency is added.
const require = createRequire(import.meta.url)
const requireFromNext = createRequire(require.resolve('next/package.json'))
const sharp = requireFromNext('sharp')
const publicDirectory = new URL('../public/', import.meta.url)
const source = await readFile(new URL('logo.svg', publicDirectory))
const render = (size) => sharp(source, { density: 384 }).resize(size, size).png().toBuffer()

for (const [name, size] of [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
]) {
  await writeFile(new URL(name, publicDirectory), await render(size))
}

// ICO directory with three PNG image entries for legacy favicon discovery.
const sizes = [16, 32, 48]
const images = await Promise.all(sizes.map(render))
const directory = Buffer.alloc(6 + sizes.length * 16)
directory.writeUInt16LE(1, 2)
directory.writeUInt16LE(sizes.length, 4)
let offset = directory.length
images.forEach((image, index) => {
  const entry = 6 + index * 16
  directory[entry] = sizes[index]
  directory[entry + 1] = sizes[index]
  directory.writeUInt16LE(1, entry + 4)
  directory.writeUInt16LE(32, entry + 6)
  directory.writeUInt32LE(image.length, entry + 8)
  directory.writeUInt32LE(offset, entry + 12)
  offset += image.length
})
await writeFile(new URL('favicon.ico', publicDirectory), Buffer.concat([directory, ...images]))
console.log('Generated favicon, Apple, and Android icons from public/logo.svg.')
