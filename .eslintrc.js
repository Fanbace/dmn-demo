module.exports = {
  extends: ["airbnb-typescript"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    semi: "off",
    "@typescript-eslint/semi": ["error", "never"],
    "no-underscore-dangle": "off",
    "valid-jsdoc": [
      "warn",
      {
        requireReturnType: true,
        requireParamDescription: false,
        requireReturnDescription: true,
        requireParamType: false,
        requireReturn: true,
      },
    ],
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: false,
        },
      },
    ],
    "max-len": ["error", { code: 80 }],
    "max-classes-per-file": "off",
    "import/extensions": [
      0,
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
  },
};
