import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(12rem, 18rem) auto',
      },
    },
  },
  plugins: [],
}
export default config
