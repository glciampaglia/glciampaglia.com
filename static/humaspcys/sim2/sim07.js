var lite = {
	ready: function(fn) {
		if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	},

	get: function(filename, onload){
		var xreqI = new XMLHttpRequest();
		xreqI.onload = onload;
		xreqI.open("get", filename, true);
		xreqI.send();
	}
} 


var trialutil = function () {
	var timer = null;
	var playlist = [];	
	var index = 0;
	var responseTimer = null;
	var logs = [];
	var selected = '';
	var displaying = false;
	var responded = false;
	var acceptResponses = false;

	var series = [
		function(){return generateTrials(24, ['signal1.png', 'signal2.png', 'signal3.png', 'signal4.png'], ['noise1.png', 'noise2.png', 'noise3.png', 'noise4.png'], .5, 1100, 5000);},
		function(){return generateTrials(24, ['signal1.png', 'signal2.png', 'signal3.png', 'signal4.png', 'signal5.png', 'signal6.png'], 
			['noise1.png', 'noise2.png', 'noise3.png', 'noise4.png', 'noise5.png', 'noise6.png'], .5, 1100, 5000);},
		function(){return generateTrials(24, ['signal1.png', 'signal2.png', 'signal3.png', 'signal4.png', 'signal5.png', 'signal6.png'], 
			['noise1.png', 'noise2.png', 'noise3.png', 'noise4.png', 'noise5.png', 'noise6.png'], .2, 1100, 5000);},
	];

	function generateTrials(total, set1, set2, set1Pct, min, max) {
		var preload = set1.concat(set2);
		preload.forEach(function (i) {
			new Image().src = i;
		});

		var variation = max - min;
		var output = [];
		var quadrants = ['ne', 'nw', 'sw', 'se'];
		var set1Count = Math.round(total * set1Pct);
		var set1Len = set1.length;
		var set2Len = set2.length;

		//add signal and noise trials to match distribution
		//use randomized duration/quadrants; ordering will be re-shuffled later
		for (var i = 0; i < set1Count; i++) {
			var s1 = i % set1Len;
			var duration = min + Math.round(Math.random() * variation);
			var quadrant = quadrants[Math.floor(Math.random() * 4)];
			output[i] = { type: 'signal', value: set1[s1], duration: duration, quadrant: quadrant };
		}
		for (var i = set1Count; i < total; i++) {
			var s2 = i % set2Len;
			var duration = min + Math.round(Math.random() * variation);
			var quadrant = quadrants[Math.floor(Math.random() * 4)];
			output[i] = { type: 'noise', value: set2[s2], duration: duration, quadrant: quadrant };
		}

		shuffle(output);
		shuffle(output);
		return output;
	}

	function shuffle(array) {
		//fisher-yates
		var i = 0, j = 0;
		var temp = null;

		for (i = array.length - 1; i > 0; i -= 1) {
			j = Math.floor(Math.random() * (i + 1))
			temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}
	}

	function exhibit(trial){
		riot.mount('div#content', 'exhibit-view', { clicked: clicked, 'trial': trial, selected: selected });
	}

	function clicked(where) {
		selected = where;
		clearTimeout(responseTimer);
		if (!responded && acceptResponses) { //only accept the first click per trial
			if(displaying){
				exhibit(trial);
			} else {
				exhibit();
			}
			annotateResponse(trial, where);
			responded = true;
		}
	}

	function start(seriesIdx) {
		index = 0;
		logs = [];
		if(seriesIdx > 2){
			seriesIdx = 2; //all further series use the same distribution
		}
		playlist = series[seriesIdx]();
		exhibit();

		setTimeout(function () {
			displayNextTrial();
		}, 1100);
	}

	function displayNextTrial() {
		selected = '';
		if (index < playlist.length) {
			trial = playlist[index];
			exhibit(trial);
			displaying = true;
			responded = false;

			//display stimuli for 500ms
			setTimeout(function () {
				intertrial(trial.duration);
			}, 500);

			//enable response for 1500ms
			acceptResponses = true;
			responseTimer = setTimeout(function () {
				acceptResponses = false;
				//no response
				annotateResponse(trial, null);
				responded = true;
			}, 1500);
		} else { //end of trials
			next();
		}
	}

	function intertrial(duration) {
		displaying = false;
		exhibit();

		setTimeout(function () {
			//next trial
			index++;
			displayNextTrial();
		}, duration);
	}

	function annotateResponse(trial, response) {
		var log = { type: trial.type, response: response, index: index };
		if (trial.type == 'signal') {
			if (response == trial.quadrant) {
				log.result = 'hit';
			} else {
				log.result = 'miss';
			}
		} else { //noise
			if (response) {
				log.result = 'false alarm';
			} else {
				log.result = 'reject';
			}
		}
		logs.push(log);
	}

	function getLogs(){
		return logs;
	}

	return {
		start: start,
		logs: getLogs
	};

}();