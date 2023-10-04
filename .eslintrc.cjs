module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals', // Turns on rules for measuring and sending core web vitals.
    'plugin:import/recommended', // Linting of ES2015+ import/export syntax.
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended', // Turns on rules from TypeScript-specific plugin.
    'eslint-config-prettier', // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort', // Plugin for sorting imports in file.
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off', // Somethime we know more than TS
    '@typescript-eslint/ban-ts-comment': 'off', // Turn off for mocking purposes
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
        noSortAlphabetically: true,
      },
    ],
  },

  overrides: [
    {
      files: ['./src/**/*.test.ts?(x)'],
      extends: [
        'plugin:jest/recommended', // Turns on rules from vitest plugin
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      plugins: ['jest', 'jest-dom', 'testing-library'],
      rules: {
        'testing-library/no-unnecessary-act': 'off', // Turn off cause RHF need click actions wrapped in act
      },
    },
  ],
}
