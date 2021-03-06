(function (angular) {

	'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

	angular.module('app')
		.config(['$stateProvider', function ($stateProvider) {

			$stateProvider
				.state('home', {
					url: '/',
					component: 'homeComponent'
				});
		}]);

})(angular);