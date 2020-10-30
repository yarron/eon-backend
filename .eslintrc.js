module.exports = {
  env: {
    browser: false,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],

  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },

    {
      files: ['*.js', '*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },

    {
      files: ['src/db/**/*.ts'],
      rules: {
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'import/no-cycle': 'off',
      },
    },
    {
      files: ['src/types/*.ts'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-multiple-empty-lines': 'off',
      },
    },
  ],
  rules: {
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
      },
    ],
    'require-jsdoc': 'off',
  },
};
