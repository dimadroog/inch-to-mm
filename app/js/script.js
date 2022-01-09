let itm = new Vue({
    el: '#inch-to-metric',
    data: function() {
        return {
            modelInteger: 0,
            modelDividend: 0,
            modelDivisor: 0,
            inactive: false,
            decimalPoint: {
                mm: 1,
                cm: 2,
                m: 4,
            }
        }
    },

    computed: {
        result() {
            let result = 0;
            let integer = this.cleanData(this.modelInteger);
            let dividend = this.cleanData(this.modelDividend);
            let divisor = this.cleanData(this.modelDivisor);
            if (dividend != 0 && divisor != 0) {
                result = integer + (dividend / divisor);
                this.inactive = false;
            } else {
                result = integer;
                this.inactive = true;
            }
            result = result*25.4;
            result = {
                mm: result.toFixed(this.decimalPoint.mm),
                cm: (result/100).toFixed(this.decimalPoint.cm),
                m: (result/1000).toFixed(this.decimalPoint.m),
            }
            return result;
        }
    },

    methods: {
        cleanData(param){
            let result = 0;
            if (param) {
                result = parseInt(param);
            }
            return result;
        },

        DPDecrease(unit){
            if (this.decimalPoint[unit] > 0) {
                this.decimalPoint[unit]--;
            }
        },

        DPIncrease(unit){
            if (this.decimalPoint[unit] < 9) {
                this.decimalPoint[unit]++;
            }
        },
    }
});