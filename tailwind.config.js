/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

function generateSizes(from = 1, to = 96, step = 1, unit = 'rem', unitStep = 0.25, keyPrefix = '') {
  const sizes = {}

  for (let n = from; n <= to; n += step) {
    const key = `${keyPrefix}${n}`
    sizes[key] = `${n * unitStep}${unit}`

    console.log(`added: '${key}': '${sizes[key]}'`)
  }

  return sizes
}

module.exports = {
  mode: 'jit',
  theme: {
    darkMode: 'class',
    extend: {
      backgroundImage: {
        trabi: "url('/img/trabi.svg')",
      },
      fontFamily: {
        sans: ['Lato'],
      },
      zIndex: {
        '-1': '-1',
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66666%',
      },
      minWidth: generateSizes(8, 64, 8),
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    },
  },
}
