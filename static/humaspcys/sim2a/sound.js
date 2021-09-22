var soundutil = (function () {
	//SOUND
	var _preloadedSounds = {};
	var _soundInitialized = false;
	var _soundRetryCount = 0;
	var _soundReady = false;
	/**
	 *Initialize the soundmanager library
	 */
	function soundInit() {
		_soundInitialized = true;
		soundManager.setup({
			url: '.',
			debugMode: false,
			onready: function() {
				_soundReady = true;
			}
		});
	}

	function waitSoundInit(onReady) {
		if (_soundInitialized && _soundRetryCount < 4) {
			if (!_soundReady) {
				_soundRetryCount += 1;
				setTimeout(function() {
					waitSoundInit(onReady);
				}, 500);
				return;
			} else {
				_soundRetryCount = 0;
				onReady();
			}
		} else {
			alert('There was an error playing a sound file.');
		}
	}

	function preloadSounds(soundlist, onComplete) {
		var preloadCount = 0;
		waitSoundInit(function () {
			for (var i = 0; i < soundlist.length; i++) {
				var sound = soundManager.createSound({
					stream: false,
					id: i,
					url: soundlist[i],
					autoload: true,
					onload: function () {
						preloadCount += 1;
						if (preloadCount >= soundlist.length) {
							for (var key in _preloadedSounds) {
								delete _preloadedSounds[key].onload;
							}
							if (onComplete) {
								onComplete();
							}
						}
					}
				});
				sound.load();
				_preloadedSounds[soundlist[i]] = sound;
			}
		});
	}

	/**
	 *Play a soundfile.
	 @param soundpath
	 */
	function sound(soundpath, onComplete) {
		sounds([soundpath], 0, onComplete);
	}

	/**
	 * Play a list of sound files, with optional time in between.
	 */
	function sounds(soundlist, between, onComplete) {
		var soundIdx = 0;
		if(!between){
			between = 0;
		}
		waitSoundInit(function() {
			var playNext = function () {
				if (soundIdx < soundlist.length) {
					var soundpath = soundlist[soundIdx];
					var sound;
					if (soundpath in _preloadedSounds) {
						sound = _preloadedSounds[soundpath];
					} else {
						sound = soundManager.createSound(soundpath, soundpath);
						sound.load();
						_preloadedSounds[soundpath] = sound;
					}
					sound.play({
						onfinish: function () {
							window.setTimeout(function () {
								window.setTimeout(playNext, between);
							 }, 50); //add padding of 50ms; onfinish completes early							
						}
					});
					
					soundIdx += 1;
				} else {
					if (typeof(onComplete) == 'function') {
						onComplete();
					}
				}
			};
			playNext();
		});
	}

	function soundStop(){
		soundManager.stopAll();
	}

	return {
		soundInit: soundInit,
		preloadSounds: preloadSounds,
		sound: sound,
		sounds: sounds,
		soundStop: soundStop
	};
})();	