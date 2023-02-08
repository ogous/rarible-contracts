/** @type {import('prettier').Config} */

module.exports = {
  singleQuote: true,
  tabWidth: 2,
  semi: false,
  trailingComma: "none",
  overrides: [
    {
      files: "*.sol",
      options: {
        compiler: "0.8.7",
      },
    },
  ],
};
