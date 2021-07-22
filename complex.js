module.exports = class Complex {

    static fromPolar({ rho, theta }) {
        return {
            real: rho * Math.cos(theta),
            imag: rho * Math.sin(theta),
        };
    }

    static toPolar(c) {
        return {
            rho: Math.sqrt(c.real ** 2 + c.imag ** 2),
            theta: Math.atan2(c.imag, c.real),
        };
    }

    static fromArray(arr) {
        return {
            real: arr[0],
            imag: arr[1],
        };
    }

    static toArray(c) {
        return [ c.real, c.imag ];
    }

    static toString(c) {
        return `${c.real} ${c.imag < 0 ? "-" : "+"} ${Math.abs(c.imag)}i`;
    }

    static add(c1, c2) {
        return {
            real: c1.real + c2.real,
            imag: c1.imag + c2.imag,
        };
    }

    static subtract(c1, c2) {
        return {
            real: c1.real - c2.real,
            imag: c1.imag - c2.imag,
        };
    }

    static multiply(c1, c2) {
        return {
            real: c1.real * c2.real - c1.imag * c2.imag,
            imag: c1.real * c2.imag + c1.imag * c2.real,
        };
    }

    static scalar(c, s) {
        return {
            real: c.real * s,
            imag: c.imag * s,
        };
    }

    static conjugate(c) {
        return {
            real:  c.real,
            imag: -c.imag,
        };
    }

    static exp_i(x) {
        return {
            real: Math.cos(x),
            imag: Math.sin(x),
        }
    }
};
