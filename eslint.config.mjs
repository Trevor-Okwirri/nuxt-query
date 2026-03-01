// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// @ts-ignore Needed due to moduleResolution Node vs Bundler
import { tanstackConfig } from '@tanstack/eslint-config'
import pluginCspell from '@cspell/eslint-plugin'
import vitest from '@vitest/eslint-plugin'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: true,
  },
  dirs: {
    src: [
      './playground',
    ],
  },
})
  .append(
    /** @type {any} */(tanstackConfig),
    {
      name: 'tanstack/temp',
      plugins: {
        cspell: /** @type {any} */ (pluginCspell),
      },
      rules: {
        'cspell/spellchecker': [
          'warn',
          {
            cspell: {
              words: [
                'Promisable', // Our public interface
                'TSES', // @typescript-eslint package's interface
                'codemod', // We support our codemod
                'combinate', // Library name
                'datatag', // Query options tagging
                'extralight', // Our public interface
                'jscodeshift',
                'refetches', // Query refetch operations
                'retryer', // Our public interface
                'solidjs', // Our target framework
                'tabular-nums', // https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
                'tanstack', // Our package scope
                'todos', // Too general word to be caught as error
                'tsqd', // Our public interface (TanStack Query Devtools shorthand)
                'tsup', // We use tsup as builder
                'typecheck', // Field of vite.config.ts
                'vue-demi', // dependency of @repo/nuxt-query
                'ɵkind', // Angular specific
                'ɵproviders', // Angular specific
              ],
            },
          },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unsafe-function-type': 'off',
        'no-case-declarations': 'off',
        'prefer-const': 'off',
      },
    },
    {
      files: ['**/*.spec.ts*', '**/*.test.ts*', '**/*.test-d.ts*'],
      plugins: { vitest: /** @type {any} */ (vitest) },
      rules: {
        ...vitest.configs.recommended.rules,
        'vitest/no-standalone-expect': [
          'error',
          {
            additionalTestBlockFunctions: ['testIf'],
          },
        ],
      },
      settings: { vitest: { typecheck: true } },
    },
  )
