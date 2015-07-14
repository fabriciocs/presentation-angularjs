/**
 * 
 */
App.controller('LoginCtrl',['$scope','principal', function($scope, principal){
	$scope.login = function(){
		principal.login($scope.identity);
	}
}]);