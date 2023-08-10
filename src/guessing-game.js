class GuessingGame {
	constructor() {
		this.number = null;
		this.range = [0, 100];
	}

	setRange(min, max) {
		this.range = [min, max];
	}

	guess() {
		this.number = Math.round((this.range[0] + this.range[1]) / 2);
		return this.number;
	}

	lower() {
		this.range[1] = this.number;
	}

	greater() {
		this.range[0] = this.number;
	}
}

module.exports = GuessingGame;
