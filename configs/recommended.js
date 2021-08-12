/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

const extensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.json',
];

module.exports = {
  extends: [
    'airbnb-typescript',
  ],
  ignorePatterns: [
    '**/*.d.ts',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions,
      },
      alias: {
        map: [
          ['~', './src'],
        ],
        extensions,
      },
    },
  },
  plugins: [
    'sonarjs',
    'import',
    'simple-import-sort',
  ],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. `react` related packages come first.
          ['^react$', '^react-dom$', '^react-native$', '^react-'],
          // Packages with scope.
          ['^@\\w'],
          // Other packages without scope.
          ['^'],
          // Parent imports. Put `~/` last.
          ['^~/(?!/?$)', '^~/?$'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Please use `lodash-es` instead.',
          },
          {
            name: 'lodash-es',
            importNames: [
              'throttle',
              'debounce',
              'isObject',
              'isArray',
              'isString',
              'merge',
              'map',
              'find',
              'reduce',
              'each',
              'forEach',
            ],
            message: 'Please use `@dewebsitejongens/utilities` instead.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/@(test|__tests__)/**/*.ts?(x)',
        '**/?(*.)test.ts?(x)',
      ],
      extends: [
        require.resolve('./test-unit.js'),
      ],
    },
    {
      files: [
        '**/specs/**/*.ts?(x)',
        '**/?(*.)spec.ts?(x)',
      ],
      extends: [
        require.resolve('./test-e2e.js'),
      ],
    },
    {
      files: [
        'bin/**/*.js',
      ],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: [
        '**/*.ts?(x)',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
};
