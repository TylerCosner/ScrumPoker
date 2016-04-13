(function() {
	"use strict";

	var model = {
		effortPlanning: true,
		// custom can be 4, https://www.planningpoker.com/dashboard
		cardSet: 0,
		autoFlip: false,
		changeVote: false,
		calculateScore: true,
		storyTimer: false,
		defaultGameSettings: false
	}

	var cardSets = [
		{
			label: "Fibonacci",
			text: ["0","1","2","3","5","8","13","21","34","55","89","?","Pass","Break"],
			value: [0,1,2,3,5,8,13,21,34,55,89,-1,-1,-1]
		},
		{
			label: "Modified Fibonacci",
			text: ["0","&frac12;","1","2","3","5","8","13","20","40","100","?","Pass","Break"],
			value: [0,0.5,1,2,3,5,8,13,20,40,100,-1,-1,-1]
		},
		{
			label: 
			text: ["xxs","xs","s","m","l","xl","xxl","?","Pass","Break"]
			value: [0,1,2,3,4,5,6,-1,-1,-1]
		},
		{
			label: "Powers of 2",
			text: ["0","1","2","4","8","16","32","64","?","Pass","Break"],
			value: [0,1,2,4,8,16,32,64,-1,-1,-1]
		}
	];

	angular
		.module("ScrumPoker", []);

	angular
		.module("ScrumPoker")
		.controller("ScrumPokerSettingsController", ScrumPokerSettingsController);

	function ScrumPokerSettingsController() {
		var vm = this;

		vm.model = model;
		vm.submit = submit;

		function submit() {

		}
	}

	angular
		.module("ScrumPoker")
		.controller("ScrumPokerController", ScrumPokerController);

	function ScrumPokerController() {
		var vm = this;

		// Toolbar Controls
		vm.invite = invite;
		vm.flip = flip;
		vm.reset = reset;
		vm.skip = skip;
		vm.viewResults = viewResults;

		init();

		///////////////////////////

		function init() {
			vm.settings = model;
			vm.cardSets = cardSets.map(function(x) {
				var concat = " ( ";
				for(var i = 0; i < x.text.length - 1; i++) {
					concat = concat + x + ", "
				}
				concat = concat + " ) ";
				x.label = x.label + concat;
			});

		}

		function invite() {

		}

		function flip() {

		}

		function reset() {

		}

		function skip() {

		}

		function viewResults() {

		}

		// Sidebar Controls
		vm.editScore = editScore;
		vm.saveScore = saveScore

		function editScore() {
			vm.view.saveScore = true;
		}

		function saveScore() {
			vm.view.editScore = true;
		}

		function submit() {

		}
	}
})