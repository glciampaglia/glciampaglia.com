var score = [0,0];

var scenarios = {
	"equal": {
		"ad": {"h":-10, "a":5},
		"a0": {"h":5, "a":-5},
		"0d": {"h":0, "a":-5},
		"00": {"h":0, "a":0},
		"nashEq": {"a": 0.33,"h": 0.33}
	},
	"+hacker": {
		"ad": {"h":-10, "a":5},
		"a0": {"h":50, "a":-5},
		"0d": {"h":0, "a":-5},
		"00": {"h":0, "a":0},
		"nashEq": {"a": 0.33,"h": 0.83}
	},
	"+analyst": {
		"ad": {"h":-10, "a":50},
		"a0": {"h":5, "a":-5},
		"0d": {"h":0, "a":-5},
		"00": {"h":0, "a":0},
		"nashEq": {"a": 0.08,"h": 0.33}
	}		
};

function fightHacker(defend, scenario){
	var clash = '';
	if(Math.random() <= scenario.nashEq.h){
		clash = 'a' + defend;
	} else {
		clash = '0' + defend;
	}
	result = scenario[clash];
	result.clash = clash;
	return result;
}

function fightAnalyst(attack, scenario){
	var clash = '';
	if(Math.random() <= scenario.nashEq.a){
		clash = attack + 'd';
	} else {
		clash = attack + '0';
	}
	result = scenario[clash];
	result.clash = clash;
	return result;
}