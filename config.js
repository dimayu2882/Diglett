import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/eslint-plugin-prettier.js';

export default [
	js.configs.recommended,
	{
		plugins: {
			prettier: prettier
		},
		rules: {
			'prettier/prettier': 'error',
			'semi': ['error', 'always'],
			'quotes': ['error', 'single']
		},
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module'
		}
	}
];
