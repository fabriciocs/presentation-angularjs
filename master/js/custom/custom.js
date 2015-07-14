//To run this code, edit file 
//index.html or index.jade and change
//html data-ng-app attribute from
//angle to myAppName
//----------------------------------- 

App.controller('SingleViewCtrl', [ '$scope', 'AuthRestangular', '$log','principal','$rootScope',
                                   function($scope, AuthRestangular, $log, principal, $rootScope) {
	AuthRestangular.get().one('usuarios').get().then(function(usuarios){
		$scope.resource = usuarios[0];
	});
	$rootScope.logout = function(){
		principal.logout();
	}
} ]);
