// @ts-check
import eslintConfig from '@repo/eslint-config'

export default eslintConfig.append({
  files: ['src/**/*.ts'],
  rules: {
    'ts/no-unsafe-function-type': 'off',
    'ts/no-empty-object-type': 'off',
    'ts/no-wrapper-object-types': 'off',
    'ts/ban-ts-comment': 'off',
    'unused-imports/no-unused-vars': 'off',
    'style/operator-linebreak': 'off',
    'node/prefer-global/process': 'off',
    'turbo/no-undeclared-env-vars': 'off',
  },
}, {
  files: ['playground/**'],
  rules: {
    'no-console': 'off',
  },
})
