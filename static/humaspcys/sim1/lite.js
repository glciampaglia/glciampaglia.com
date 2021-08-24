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


