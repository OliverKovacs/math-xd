const Vector = require("./vector.js");

module.exports = class Matrix {

    static identity(n, number = 1) {
        let out = [];
        for (let x = 0; x < n; x++) {
            out[x] = [];
            for (let y = 0; y < n; y++) {
                out[x][y] = x === y ? number : 0;
            }
        }
        return out;
    }

    static multiply(mat1, mat2) {
        let out = [];
        for (let x = 0; x < mat2.length; x++) {
            out[x] = [];
            for (let y = 0; y < mat1[0].length; y++) {
                out[x][y] = Vector.dot(Matrix.sliceY(mat1, y), Matrix.sliceX(mat2, x));
            }
        }
        return out;
    }

    static scalar(mat, scalar) {
        let out = [];
        for (let x = 0; x < mat.length; x++) {
            out[x] = [];
            for (let y = 0; y < mat[0].length; y++) {
                out[x][y] = mat[x][y] * scalar;
            }
        }
        return out;
    }

    static sliceX(mat, x) {
        return mat[x];
    }

    static sliceY(mat, y) {
        let out = [];
        for (let i = 0; i < mat.length; i++) {
            out[i] = mat[i][y];
        }
        return out;
    }

    static transpose(mat) {
        let out = [];
        for (let y = 0; y < mat[0].length; y++) {
            out[y] = [];
            for (let x = 0; x < mat.length; x++) {
                out[y][x] = mat[x][y];
            }
        }
        return out;
    }

    static subMatrix(mat, x, y) {
        let out = [];
        for (let i = 0; i < mat.length; i++) {
            if (x === i) continue;
            let col = [];
            for (let j = 0; j < mat[0].length; j++) {
                if (y === j) continue;
                col.push(mat[i][j]);
            }
            out.push(col);
        }
        return out;
    }

    static determinant(mat) {
        if (mat.length === 2) return mat[0][0] * mat[1][1] - mat[1][0] * mat[0][1];
        let det = 0;
        for (let x = 0; x < mat.length; x++) {
            det += -((2 * (x % 2)) - 1)  * mat[x][0] * Matrix.determinant(Matrix.subMatrix(mat, x, 0));
        }
        return det;
    }

    static minor(mat, x, y) {
        return Matrix.determinant(Matrix.subMatrix(mat, x, y));
    }

    static minorMatrix(mat) {
        let out = [];
        for (let x = 0; x < mat.length; x++) {
            out[x] = [];
            for (let y = 0; y < mat[0].length; y++) {
                out[x][y] = Matrix.minor(mat, x, y);
            }
        }
        return out;
    }

    static toCofactors(mat) {
        let out = [];
        for (let x = 0; x < mat.length; x++) {
            out[x] = [];
            for (let y = 0; y < mat[0].length; y++) {
                out[x][y] = -((2 * (((x + (y % 2))) % 2)) - 1) * mat[x][y];
            }
        }
        return out;
    }

    static inverse(mat) {
        let minors = Matrix.minorMatrix(mat);
        let cofactors = Matrix.toCofactors(minors);
        let adjugate = Matrix.transpose(cofactors);
        let determinant = Matrix.determinant(mat);
        return Matrix.scalar(adjugate, 1 / determinant);
    }
};
