/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-order-config-standard'
    ],
    plugins: ['stylelint-order'],
    rules: {
        'selector-class-pattern': null
    }
};
