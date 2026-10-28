import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

// The site uses two theme colors, `brand` and `accent`. Change them here to recolor the whole site.
type Palette = Record<string, string>

// A near-black version of a gray palette, so brand gradients go from dark to the accent color.
// Light shades stay light because they are used for page backgrounds.
const dark = (gray: Palette): Palette => ({
  ...gray,
  '500': gray['700'],
  '600': gray['800'],
  '700': gray['900'],
  '800': gray['900'],
  '900': gray['950'],
})

// Dark slate fading into sky blue.
const theme = { brand: dark(colors.slate), accent: colors.sky }

const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

const toRgbChannels = (hex: string) => {
  const n = parseInt(hex.slice(1), 16)
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`
}

const themeVars = () => {
  const vars: Record<string, string> = {}
  for (const shade of shades) {
    vars[`--brand-${shade}`] = toRgbChannels(theme.brand[shade])
    vars[`--accent-${shade}`] = toRgbChannels(theme.accent[shade])
  }
  return vars
}

// Channels in CSS variables keep opacity modifiers like bg-brand-600/10 working.
const cssVarPalette = (name: string) =>
  Object.fromEntries(shades.map((shade) => [shade, `rgb(var(--${name}-${shade}) / <alpha-value>)`]))

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: cssVarPalette('brand'),
          accent: cssVarPalette('accent'),
        },
      },
    },
    plugins: [
      plugin(({ addBase }) => {
        addBase({ ':root': themeVars() })
      }),
    ],
  }
