# @dewebsitejongens/eslint-plugin

[ESLint](https://eslint.org/) plugin including configurations and custom rules for web, mobile, backend development.

## Installation

Install the module

```bash
yarn add @dewebsitejongens/eslint-plugin --dev
```

## Usage

To opt-in to the default configuration, extend your own project's `.eslintrc` file:

```json
{
  "extends": [
    "plugin:@dewebsitejongens/eslint-plugin/recommended"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}

```

### Rulesets

Alternatively, you can opt-in to only the more granular rulesets offered by the plugin. These include:

-   `recommended`
-   `backend`
-   `mobile`
-   `web`


For example, if your project does not use React, you could consider extending including only the ESNext rules in your project using the following `extends` definition:

```json
{
  "extends": [
    "plugin:@dewebsitejongens/eslint-plugin/backend"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
