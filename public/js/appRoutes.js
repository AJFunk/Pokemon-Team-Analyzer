angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/pokedex.html',
			controller: 'MainController'
		})


		// 
		.when('/pokedex', {
			templateUrl: 'views/pokedex.html',
			controller: 'MainController'	
		});

	$locationProvider.html5Mode(true);

}]);