module.exports = {
  singleQuote: true,
  bracketSpacing: false,
  printWidth: 120,
  overrides: [
    {
      files: '*.sol',
      options: {
        printWidth: 120,
        tabWidth: 4,
        singleQuote: false,
      },
    },
  ],
  plugins: [require.resolve('prettier-plugin-solidity')],
};
