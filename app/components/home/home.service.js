(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('app')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {
		return {};
	}

})();