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
	var responded = false;
	var acceptResponses = false;

	var series = [
		function(){return generateTrials(24, ['signal1.mp3', 'signal2.mp3', 'signal3.mp3', 'signal4.mp3'], ['noise1.mp3', 'noise2.mp3', 'noise3.mp3', 'noise4.mp3'], .5, 1100, 5000);},
		function(){return generateTrials(24, ['signal1.mp3', 'signal2.mp3', 'signal3.mp3', 'signal4.mp3', 'signal5.mp3', 'signal6.mp3'], 
			['noise1.mp3', 'noise2.mp3', 'noise3.mp3', 'noise4.mp3', 'noise5.mp3', 'noise6.mp3'], .5, 1100, 5000);},
		function(){return generateTrials(24, ['signal1.mp3', 'signal2.mp3', 'signal3.mp3', 'signal4.mp3', 'signal5.mp3', 'signal6.mp3'], 
			['noise1.mp3', 'noise2.mp3', 'noise3.mp3', 'noise4.mp3', 'noise5.mp3', 'noise6.mp3'], .2, 1100, 5000);},
	];

	function generateTrials(total, set1, set2, set1Pct, min, max) {

		var variation = max - min;
		var output = [];
		var set1Count = Math.round(total * set1Pct);
		var set1Len = set1.length;
		var set2Len = set2.length;

		//add signal and noise trials to match distribution
		//use randomized duration; ordering will be re-shuffled later
		for (var i = 0; i < set1Count; i++) {
			var s1 = i % set1Len;
			var duration = min + Math.round(Math.random() * variation);
			output[i] = { type: 'signal', value: set1[s1], duration: duration };
		}
		for (var i = set1Count; i < total; i++) {
			var s2 = i % set2Len;
			var duration = min + Math.round(Math.random() * variation);
			output[i] = { type: 'noise', value: set2[s2], duration: duration };
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

	function keyOn(){
		$(document).keypress(function(e){
			if(e.which == 32){
				trialutil.respond();
			}
		})
	}

	function keyOff(){
		$(document).off('keypress');
	}

	function respond() {
		clearTimeout(responseTimer);
		if (!responded && acceptResponses) { //only accept the first click per trial
			annotateResponse(trial, true);
			responded = true;
		}
	}

	function start(seriesIdx) {
		riot.mount('div#content', 'trial-view');
		index = 0;
		logs = [];
		if(seriesIdx > 2){
			seriesIdx = 2; //all further series use the same distribution
		}
		playlist = series[seriesIdx]();
		keyOn();
		setTimeout(function () {
			playNextTrial();
		}, 1100);
	}

	function playNextTrial() {
		selected = '';
		if (index < playlist.length) {
			trial = playlist[index];
			soundutil.sound(trial.value);
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
			keyOff();
			next();
		}
	}

	function intertrial(duration) {
		setTimeout(function () {
			//next trial
			index++;
			playNextTrial();
		}, duration);
	}

	function annotateResponse(trial, response) {
		var log = { type: trial.type, response: response, index: index };
		if (trial.type == 'signal') {
			if (response) {
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
		respond: respond,
		logs: getLogs
	};

}();