(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.component:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('app')
		.component('homeComponent', {
			bindings: {},
			controller: HomeCtrl,
			templateUrl: 'app/components/home/home-tpl.html',
		});

	/** @ngInject */
	function HomeCtrl(homeService) {

		var vm = this;
		vm.updateContry = updateContry;

		function updateContry(event) {
			vm.selectedCountry = event.id;
		}
	}

})();
