class GuessingGame {
    constructor() {
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.max - this.min) / 2) + this.min;
    }

    lower() {
        this.max = this.guess();
        console.log('min: ' + this.min + '    max: ' + this.max);
    }

    greater() {
        this.min = this.guess();
        console.log('min: ' + this.min + '    max: ' + this.max);
    }
}

module.exports = GuessingGame;

