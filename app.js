(function() {
	"use strict";

	angular
		.module("ScrumPoker", []);

	angular
		.module("ScrumPoker")
		.controller("ScrumPokerSettingsController", ScrumPokerSettingsController);

	function ScrumPokerSettingsController() {
		var vm = this;

		vm.submit = submit;

		vm.model = {
			effortPlanning: true,
			// custom can be 4, https://www.planningpoker.com/dashboard
			cardSet: 0,
			autoFlip: false,
			changeVote: false,
			calculateScore: true,
			storyTimer: false,
			defaultGameSettings: false
		}

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
		vm.viewResults = viewResults

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
		vm.editScore
	}
})