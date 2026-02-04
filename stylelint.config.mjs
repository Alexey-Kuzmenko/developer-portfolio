/** @type {import('stylelint').Config} */
const stylelintConfig = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-order-config-standard'
    ],
    plugins: ['stylelint-order'],
    rules: {
        'selector-class-pattern': null
    }
};

export default stylelintConfig
