module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended', // uses react-specific linting rules
    'prettier/react', // disables react-specific linting rules that conflict with prettier
    'plugin:prettier/recommended', // uses react-specific linting rules
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['react', 'react-native', 'react-hooks', 'import'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'import/no-unresolved': ['error', {commonjs: true, amd: true}],
    'import/named': 0,
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
};
