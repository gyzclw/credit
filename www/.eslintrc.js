module.exports = {
    "extends": ["airbnb/legacy","angular"],
    "plugins": [
        "react",
        "requirejs",
        "angular"
    ],
    "rules": {
      "no-param-reassign": [2, {"props": false}],
      "func-style": [2, "declaration", { "allowArrowFunctions": true }],
    "requirejs/no-invalid-define": 2,
    "requirejs/no-multiple-define": 2,
    "requirejs/no-named-define": 2,
    "requirejs/no-commonjs-wrapper": 2,
    "requirejs/no-object-define": 1
  }
};
