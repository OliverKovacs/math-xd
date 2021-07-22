const Matrix = require("./matrix.js");
const Linear = require("./linear.js");

module.exports = class Polynomial {

    /**
     * Solves for the coefficients of the polynomial function described by a list of points
     * @param {number[][]} points Array of 2d points
     * @returns Array of coefficients
     */
    static solveForCoefficients(points) {
        let pointsX = [], pointsY = [];
        for (let i = 0; i < points.length; i++) {
            pointsX[i] = points[i][0];
            pointsY[i] = points[i][1];
        }
        let linearCoefficients = this.getLinearCoefficients(pointsX);
        return Linear.solve(linearCoefficients, pointsY);
    }

    static getLinearCoefficients(points) {
        let out = [];
        for (let i = 0; i < points.length; i++) {
            out[i] = [];
            for (let j = 0; j < points.length; j++) {
                out[i][j] = Math.pow(points[i], j);
            }
        }
        return Matrix.transpose(out);
    }
};
