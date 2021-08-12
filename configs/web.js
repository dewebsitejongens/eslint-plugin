/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    window: true,
    document: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    require.resolve('./recommended.js'),
    require.resolve('./react.js'),
  ],
};
