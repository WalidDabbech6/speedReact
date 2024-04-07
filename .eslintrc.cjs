module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'

  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 12, ecmaFeatures: {'jsx':true},sourceType:"module" },
  settings: { react: { version: '18.2' } },
  plugins: [
    "react",
    "unused-imports"
  ],
  rules: {
    'indent': "off",
    'linebreak-style': "off",
    'quotes': "off",
    "unused-imports/no-unused-imports": "warn", // Change severity to warn
    "react/jsx-no-undef": [
      "warn",
      { "allowGlobals": true } // Avoids errors for undeclared React in JSX
    ],
    "react/jsx-no-duplicate-props": [
      "warn",
      { "ignoreCase": true } // Avoids errors for duplicate props in JSX
    ],
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/prop-types": "off", // Disable prop-types check if not needed
    "react/react-in-jsx-scope": "off", // Disable React import requirement for Next.js
    "react/no-children-prop": "off", // Disable warning about using `children` prop
    "react/no-danger": "off", // Disable warning about using dangerouslySetInnerHTML
    "react/no-unescaped-entities": "off", // Disable warning about unescaped HTML entities
    "no-unused-vars": "warn",
    "react/no-unknown-property":"warn",
    "semi":"off"
    

  },
}
