import js from '@eslint/js';
import globals from 'globals';

// Only team-authored assets/custom.js and custom-*.js is linted; Dawn's original JS is left untouched.
export default [
  { ignores: ['**/*.js', '**/*.mjs', '!assets/custom.js', '!assets/custom-*.js'] },
  js.configs.recommended,
  {
    files: ['assets/custom.js', 'assets/custom-*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.browser,
        // Dawn globals (plus the Swiper CDN build)
        Shopify: 'readonly',
        routes: 'readonly',
        trapFocus: 'readonly',
        debounce: 'readonly',
        PUB_SUB_EVENTS: 'readonly',
        publish: 'readonly',
        subscribe: 'readonly',
        Swiper: 'readonly',
      },
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'prefer-template': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-alert': 'error',
      'max-depth': ['error', 4],
      'no-shadow': 'error',
      'no-use-before-define': 'error',
      'no-loop-func': 'error',
      'no-duplicate-imports': 'error',
      'no-unsafe-optional-chaining': 'error',
      'array-callback-return': 'error',
      'no-useless-return': 'error',
    },
  },
];
