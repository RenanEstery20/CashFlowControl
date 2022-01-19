module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  // eslint-disable-next-line quotes
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 13,
    // eslint-disable-next-line quotes
    sourceType: "module",
  },
  rules: {
    // eslint-disable-next-line quotes
    "no-console": "off",
    // eslint-disable-next-line quotes
    "class-methods-use-this": "off",
    quotes: "off",
    "import/first": "off",
    "implicit-arrow-linebreak": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    camelcase: "off",
  },
};
