module.exports = class Color {

    static colorToHex(color) {
        return Math.round(color).toString(16).padStart(2, "0");
    }

    static rgbToHex(rgb) {
        return `#${this.colorToHex(rgb.r)}${this.colorToHex(rgb.g)}${this.colorToHex(rgb.b)}`;
    }

    static hexToRgb(hex) {
        return {
            r: parseInt(`0x${hex.substring(1, 3)}`),
            g: parseInt(`0x${hex.substring(3, 5)}`),
            b: parseInt(`0x${hex.substring(5, 7)}`),
        };
    }
};
