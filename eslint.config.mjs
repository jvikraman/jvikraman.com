import { dirname } from 'path'
import { fileURLToPath } from 'url'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import nextConfig from 'eslint-config-next/core-web-vitals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // Next.js flat config (includes react, react-hooks, import, jsx-a11y, @next/next,
  // and @typescript-eslint plugins + rules)
  ...nextConfig,

  // Prettier: disable conflicting formatting rules, then enable prettier/prettier
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },

  // Custom rule overrides
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
      'react/prop-types': 0,
      '@typescript-eslint/no-unused-vars': 0,
      'react/no-unescaped-entities': 0,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },

  // Ignores (replaces .eslintignore)
  {
    ignores: ['node_modules/', '.contentlayer/', '.next/'],
  },
]

export default config
