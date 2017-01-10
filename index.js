module.exports = {
    "extends": "google",
    "env": {
        "browser": true,
        "jquery": true
    },
    "globals": {
        "requirejs": true,
        "define": true,
        "require": true
    },
    "rules": {
        "space-before-function-paren": ["error", "always"],
        "no-trailing-spaces": 2,
        "no-unused-vars": ["error", { "varsIgnorePattern": "_" }],
        "semi": ["error", "always"],
        "quotes": [1, "single"],
        "valid-jsdoc": 1,
        "linebreak-style": 0
    }
};
