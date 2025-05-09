import js from '@eslint/js';

export default [
	{
		files: ['**/*.js'],
		...js.configs.recommended,
		rules: {
			'semi': ['error', 'always'],
			'quotes': ['error', 'single'],
			'no-unused-vars': 'warn',
			'no-undef': 'error',
			'indent': ['error', 'tab'],
		},
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				'document': 'readonly',
				'window': 'readonly',
				'globalThis': 'readonly'
			}
		}
	}
];
