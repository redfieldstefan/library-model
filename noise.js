'use strict';

var disruptionMeter = 0;

var makeNoise = function() {
		disruptionMeter = disruptionMeter + 1;
		if (disruptionMeter === 1) {
			console.log('SHHHHHH!!!!');
		} else if (disruptionMeter === 2) {
			console.log('AGAIN WITH THIS?');
		} else if (disruptionMeter === 3) {
			console.log('THATS IT, IM CALLING SECURITY.');
		}
		console.log('Librarian temper meter = ' + disruptionMeter);
};

module.exports = makeNoise;