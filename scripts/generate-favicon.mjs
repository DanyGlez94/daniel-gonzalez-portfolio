import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svgPath = join(root, 'app', 'icon.svg')
const icoPath = join(root, 'app', 'favicon.ico')
const appleIconPath = join(root, 'app', 'apple-icon.png')

const svgRounded = await readFile(svgPath)
// iOS applies its own squircle mask — the apple-touch-icon must be a flat
// square so the OS mask isn't applied on top of an already-rounded shape.
const svgSquare = Buffer.from(svgRounded.toString().replace(/\srx="\d+"/, ''))

const renderPng = (src, size) =>
  sharp(src, { density: 384 }).resize(size, size).png().toBuffer()

const [png48, png32, png16, png180] = await Promise.all([
  renderPng(svgRounded, 48),
  renderPng(svgRounded, 32),
  renderPng(svgRounded, 16),
  renderPng(svgSquare, 180),
])

const ico = await pngToIco([png48, png32, png16])
await writeFile(icoPath, ico)
await writeFile(appleIconPath, png180)

console.log(`favicon.ico    ${ico.length} bytes  (16+32+48, rounded)`)
console.log(`apple-icon.png ${png180.length} bytes  (180x180, flat square)`)
