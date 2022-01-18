module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {
    strapi: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['module-resolver', 'import', 'unicorn', 'ava', 'node', 'promise', 'sonarjs', 'tailwind'],
  extends: [
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:ava/recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:tailwind/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src', 'test'],
      },
      'babel-module': { allowExistingDirectories: true },
    },
  },
  rules: {
    'max-len': ['error', { code: 240 }],
    'module-resolver/use-alias': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-extraneous-import': ['error', {
      allowModules: ['webdriverio'],
      resolvePaths: [],
      tryExtensions: [],
    }],
    'sonarjs/no-nested-template-literals': 'off',
    'ava/no-ignored-test-files': 'off', // doesn't work atm
    'unicorn/prefer-node-protocol': 'off', // nice rule, but doesn't really work with imports
    'unicorn/prefer-module': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
