/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

const backend = require('./backend');
const mobile = require('./mobile');
const recommended = require('./recommended');
const web = require('./web');

module.exports = {
  recommended,
  web,
  mobile,
  backend,
};
