module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "google"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "always",
                asyncArrow: "always"
            }
        ],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "require-jsdoc": [
            "error",
            {
                require: {
                    FunctionDeclaration: false,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false
                }
            }
        ],
        "object-curly-spacing": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "operator-linebreak": [
            "error",
            "after",
            { overrides: { "?": "before", ":": "before" } }
        ]
    }
};
