/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

module.exports = {
  extends: [
    'plugin:react-native/all',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-native'],
};
