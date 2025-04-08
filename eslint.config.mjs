import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: {globals: globals.browser}},
  {languageOptions: {parserOptions: {allowSyntheticDefaultImports: true}}},
  {settings: {react: {version: 'detect'}}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'indent': ['error', 2, {'SwitchCase': 1}],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/ban-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'eol-last': ['error', 'always'],
      'react/jsx-max-props-per-line': ['error', {maximum: 1, when: 'multiline'}],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    }
  },
]
