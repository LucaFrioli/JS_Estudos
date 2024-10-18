import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
	{
		languageOptions: { globals: globals.node },
		files: ['**/*.js', '**/*.ts'],
		ignores: ['node_modules/'],
	},
	pluginJs.configs.recommended,
	{
		plugins: { import: eslintPluginImport },
		rules: {
			'no-cond-assign': 'off', // ESLint recommended
			'no-irregular-whitespace': 'error', // ESLint recommended
			'no-unexpected-multiline': 'error', // ESLint recommended

			// Best Practices
			curly: ['error', 'multi-line'],
			'guard-for-in': 'error',
			'no-caller': 'error',
			'no-extend-native': 'error',
			'no-extra-bind': 'error',
			'no-invalid-this': 'error',
			'no-multi-spaces': 'error',
			'no-new-wrappers': 'error',
			'no-throw-literal': 'error', // ESLint recommended
			'no-with': 'error',
			'prefer-promise-reject-errors': 'error',
			'no-unused-vars': ['error', { args: 'none' }], // ESLint recommended

			// Stylistic Issues
			'array-bracket-spacing': ['error', 'never'],
			'block-spacing': ['error', 'never'],
			'brace-style': 'error',
			camelcase: ['error', { properties: 'never' }],
			'comma-dangle': ['error', 'always-multiline'],
			'comma-spacing': 'error',
			'comma-style': 'error',
			'computed-property-spacing': 'error',
			'eol-last': 'error',
			'func-call-spacing': 'error',
			indent: [
				'error',
				'tab',
				{
					CallExpression: {
						arguments: 1, // Indentação de argumentos em relação à chamada de função usando tab.
					},
					FunctionDeclaration: {
						body: 1, // Indentação do corpo da função.
						parameters: 1, // Indentação dos parâmetros.
					},
					FunctionExpression: {
						body: 1, // Indentação do corpo da função de expressão.
						parameters: 1, // Indentação dos parâmetros.
					},
					MemberExpression: 1, // Indentação de expressões de membro.
					ObjectExpression: 1, // Indentação de expressões de objeto.
					SwitchCase: 1, // Indentação de casos em switch.
					ignoredNodes: ['ConditionalExpression'], // Ignorar indentação para expressões condicionais.
				},
			],
			'key-spacing': 'error',
			'keyword-spacing': 'error',
			'linebreak-style': 'error',
			'max-len': [
				'error',
				{
					code: 80, // Alinha com o printWidth do Prettier.
					tabWidth: 4, // Consistente com o uso de tabs no EditorConfig.
					ignoreUrls: true, // Ignora URLs longos.
					ignorePattern: 'goog.(module|require)', // Ignora padrões específicos como "goog.module" e "goog.require".
					ignoreComments: true, // Ignora comprimento de linha em comentários.
					ignoreTrailingComments: true, // Ignora comentários após código.
					ignoreStrings: true, // Ignora comprimento em strings.
					ignoreTemplateLiterals: true, // Ignora comprimento em literais de template.
					ignoreRegExpLiterals: true, // Ignora comprimento em expressões regulares.
				},
			],
			'new-cap': 'error',
			'no-array-constructor': 'error',
			'no-mixed-spaces-and-tabs': 'error',
			'no-multiple-empty-lines': ['error', { max: 2 }],
			'no-new-object': 'error',
			'no-tabs': 'error',
			'no-trailing-spaces': 'error',
			'object-curly-spacing': 'error',
			'one-var': [
				'error',
				{
					var: 'never',
					let: 'never',
					const: 'never',
				},
			],
			'operator-linebreak': ['error', 'after'],
			'padded-blocks': ['error', 'never'],
			'quote-props': ['error', 'consistent'],
			quotes: ['error', 'single', { allowTemplateLiterals: true }],
			semi: 'error',
			'semi-spacing': 'error',
			'space-before-blocks': 'error',
			'space-before-function-paren': [
				'error',
				{
					asyncArrow: 'always',
					anonymous: 'never',
					named: 'never',
				},
			],
			'spaced-comment': ['error', 'always'],
			'switch-colon-spacing': 'error',

			// ECMAScript 6
			'arrow-parens': ['error', 'always'],
			'constructor-super': 'error', // ESLint recommended
			'generator-star-spacing': ['error', 'after'],
			'no-new-symbol': 'error', // ESLint recommended
			'no-this-before-super': 'error', // ESLint recommended
			'no-var': 'error',
			'prefer-const': ['error', { destructuring: 'all' }],
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'rest-spread-spacing': 'error',
			'yield-star-spacing': ['error', 'after'],
			'import/no-commonjs': 'error',
		},
	},
	{
		plugins: { prettier: eslintPluginPrettier },
		rules: {
			'prettier/prettier': 'error',
		},
	},
	prettier,
];
