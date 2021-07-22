const Trig = require("./trigonometry.js");

module.exports = class Vector {

    static magnitude(vec) {
        return Math.sqrt(this.magnitudeSq(vec));
    }

    static magnitudeSq(vec) {
        return this.dot(vec, vec); 
    }

    static copy(vec) {
        let out = [];
        for (let i = 0; i < vec.length; i++) {
            out[i] = vec[i];
        }
        return out;
    }

    static unit(vec) {
        return this.scalar(vec, 1 / this.magnitude(vec));
    }

    static add(vec1, vec2) {
        let out = [];
        for (let i = 0; i < vec1.length; i++) {
            out[i] = vec1[i] + vec2[i];
        }
        return out;
    }

    static subtract(vec1, vec2) {
        let out = [];
        for (let i = 0; i < vec1.length; i++) {
            out[i] = vec1[i] - vec2[i];
        }
        return out;
    }

    static multiply(vec1, vec2) {
        let out = [];
        for (let i = 0; i < vec1.length; i++) {
            out[i] = vec1[i] * vec2[i];
        }
        return out;
    }

    static divide(vec1, vec2) {
        let out = [];
        for (let i = 0; i < vec1.length; i++) {
            out[i] = vec1[i] / vec2[i];
        }
        return out;
    }

    static scalar(vec, scalar) {
        let out = [];
        for (let i = 0; i < vec.length; i++) {
            out[i] = vec[i] * scalar;
        }
        return out;
    }

    static sum(vec) {
        let out = 0;
        for (let i = 0; i < vec.length; i++) {
            out += vec[i];
        }
        return out;
    }

    static dot(vec1, vec2) {
        return Vector.sum(Vector.multiply(vec1, vec2));  
    }

    static cross(vec1, vec2) {
        return [
            vec1[1] * vec2[2] - vec1[2] * vec2[1],
            vec1[2] * vec2[0] - vec1[0] * vec2[2],
            vec1[0] * vec2[1] - vec1[1] * vec2[0],
        ];
    }

    static toCartesian(vec) {
        let out = [];
        for (let i = 0; i < vec.length - 1; i++) {
            let x = vec[0];
            for (let j = 0; j < i; j++) {
                x *= Math.sin(vec[j + 1]);
            }
            out[i] = x * Math.cos(vec[i + 1]);
        }
        let x = vec[0];
        for (let j = 0; j < vec.length - 1; j++) {
            x *= Math.sin(vec[j + 1]);
        }
        out[vec.length - 1] = x;
        return out;
    }

    static toPolar(vec) {
        let out = [ this.magnitude(vec) ];
        for (let i = 0; i < vec.length - 1; i++) {
            out[i + 1] = Trig.acot(vec[i] / this.magnitude(vec.slice(i)));
        }
        let l1 = vec[vec.length - 2];
        let l2 = vec[vec.length - 1];
        out[vec.length - 1] = 2 * Trig.acot((l1 + Math.sqrt(Math.pow(l2, 2) + Math.pow(l1, 2))) / l2);
        return out;
    }
};
