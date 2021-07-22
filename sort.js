module.exports = class Sort {
    
    /**
     * LSD radix sort
     * @param {Number[]} array Integers to be sorted
     * @param {Number} [base=10] Base of the integers
     * @returns {Number[]} Sorted list
     */
    static radix(array, base = 10) {
        let l = 0;
        for (let i = 0; i < array.length; i++) {
            l = Math.max(l, `${array[i]}`.length);
        }
        for (let i = 0; i < array.length; i++) {
            array[i] = `${Array(l - `${array[i]}`.length + 1).join("0")}${array[i]}`;
        }
        for (let i = l - 1; i >= 0; i--) {
            temp = [];
            for (let j = 0; j < base; j++) {
                for (let k = 0; k < array.length; k++) {
                    if (array[k][i] == j) {
                        temp.push(array[k]);
                    }
                }
            }
            array = temp;
        }
        for (let i = 0; i < array.length; i++) {
            array[i] = JSON.parse(array[i].replace(/0*/, "") || "0");
        }
        return array;
    }
};
