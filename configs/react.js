/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

module.exports = {
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/core-modules': [
      'react',
    ],
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        children: true,
      },
    ],
    'react/jsx-equals-spacing': 'error',
    'react/jsx-key': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/display-name': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
  },
};
