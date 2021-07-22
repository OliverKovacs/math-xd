const ZEROS = 0;
const ONES = Number.MAX_SAFE_INTEGER;
const SIZE = Math.log2(ONES + 1);

module.exports = class BitArray {
    constructor(...args) {
        this.bits = [];
        switch (args.length) {
            case 0:
                this.__length = 0;
                break;
            case 1:
                this.__length = args[0];
                break;
            default:
                this.fromArray(args);
        }
    }

    get length() {
        return this.__length;
    }

    get(index) {
        if (index >= this.__length) return undefined;
        return Number(!!(this.bits[Math.floor(index / SIZE)] & (1 << (index % SIZE))));
    }

    set(index, value) {
        if (index >= this.__length) this.__length = index + 1;
        if (this.bits[Math.floor(index / SIZE)] === undefined) this.bits[Math.floor(index / SIZE)] = ZEROS;
        if (value) {
            this.bits[Math.floor(index / SIZE)] |= (1 << (index % SIZE));
        }
        else {
            this.bits[Math.floor(index / SIZE)] &= (ONES ^ (1 << (index % SIZE)));
        }
        return this;
    }

    fromArray(array) {
        this.bits = [];
        this.__length = array.length;
        for (let i = 0; i < array.length; i++) {
            this.set(i, array[i]);
        }
        return this;
    }

    toArray() {
        let out = [];
        for (let i = 0; i < this.__length; i++) {
            out[i] = this.get(i);
        }
        return out;
    }
};
