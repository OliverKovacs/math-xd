const Matrix = require("./matrix.js");

module.exports = class Linear {

    static solve(coefficients, values) {
        return Matrix.multiply(Matrix.inverse(coefficients), [ values ])[0];
    }
};
