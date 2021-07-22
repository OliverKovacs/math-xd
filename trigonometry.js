module.exports = class Trigonometry {

    static sin = Math.sin;                  // sine
    static cos = Math.cos;                  // cosine
    static tan = Math.tan;                  // tangent
    static cot = x => 1 / Math.tan(x);      // cotangent
    static sec = x => 1 / Math.cos(x);      // secant
    static csc = x => 1 / Math.sin(x);      // cosecant

    static asin = Math.asin;
    static acos = Math.acos;
    static atan = Math.atan;
    static acot = x => (Math.PI / 2) - Math.atan(x);
    static asec = x => 1 / Math.acos(1 / x);
    static acsc = x => 1 / Math.asin(1 / x)

    static sinh = Math.sinh;
    static cosh = Math.cosh;
    static tanh = Math.tanh;
    static coth = x => Math.cosh(x) / Math.sinh(x);
    static sech = x => 1 / Math.cosh(x);
    static csch = x => 1 / Math.sinh(x);

    static asinh = Math.asinh;
    static acosh = Math.acosh;
    static atanh = Math.atanh;
    static acoth = x => 0.5 * Math.log((x + 1) / (x - 1));
    static asech = x => Math.log((1 / x) + Math.sqrt((1 / Math.pow(x, 2)) - 1));
    static acsch = x => Math.log((1 / x) + Math.sqrt((1 / Math.pow(x, 2)) + 1));

    static ver = x => 1 - Math.cos(x);          // versed sine
    static vcs = x => 1 + Math.cos(x);          // versed cosine
    static cvs = x => 1 - Math.sin(x);          // coversed sine
    static cvc = x => 1 + Math.sin(x);          // coversed cosine
    static hav = x => (1 - Math.cos(x)) / 2;    // haversed sine
    static hvc = x => (1 + Math.cos(x)) / 2;    // haversed cosine
    static hcv = x => (1 - Math.sin(x)) / 2;    // hacoversed sine
    static hcc = x => (1 + Math.sin(x)) / 2;    // hacoversed cosine

    static aver = x => Math.acos(1 - x);
    static avcs = x => Math.acos(x - 1);
    static acvs = x => Math.asin(1 - x);
    static acvc = x => Math.asin(x - 1);
    static ahav = x => Math.acos(1 - 2 * x);
    static ahvc = x => Math.acos(2 * x - 1);
    static ahcv = x => Math.asin(1 - 2 * x);
    static ahcc = x => Math.asin(2 * x - 1);

    static exsec = x => (1 / Math.cos(x)) - 1;  // exsecant
    static excsc = x => (1 / Math.sin(x)) - 1;  // excosecant

    static toRad = deg => deg * Math.PI / 180;
    static toDeg = rad => rad * 180 / Math.PI;
};
