
App.factory('AuthRestangular', ['Restangular','principal','$rootScope',function(Restangular, principal, $rootScope) {
  return  { 
	  'get' : function(){
		  Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
			    if(response.status === 401) {
			       $rootScope.$state.go("login");
			        return false; // error handled
			    }
			    return true; // error not handled
			});
		  return Restangular.withConfig(function(RestangularConfigurer) {
			  RestangularConfigurer.setDefaultHeaders(principal.authHeaders());
			  RestangularConfigurer.setBaseUrl('http://localhost:3000/');
			  RestangularConfigurer.setRestangularFields({
			      id: "_id"
			  });
		  });
	}
  };
}]);

App.factory('principal', ['$q', '$http', '$timeout','$rootScope',
                          function($q, $http, $timeout,$rootScope) {
	var _identity = undefined,
	_credentials = undefined,
	_header = undefined,
	_authenticated = false;

	return {
		isIdentityResolved: function() {
			return angular.isDefined(_identity);
		},
		isAuthenticated: function() {
			return _authenticated;
		},
		isInRole: function(role) {
			if (!_authenticated || !_identity.roles) return false;

			return _identity.roles.indexOf(role) != -1;
		},
		isInAnyRole: function(roles) {
			if (!_authenticated || !_identity.roles) return false;

			for (var i = 0; i < roles.length; i++) {
				if (this.isInRole(roles[i])) return true;
			}

			return false;
		},
		login : function(credentials){
			_credentials = credentials;
			this.identity(true);
			$rootScope.$state.go("app.index")
		},
		logout : function(){
			_header = null;
			_credentials = null;
		},
		authenticate: function(identity) {
			_identity = identity;
			_authenticated = identity != null;
		},
		authHeaders: function(){
			return _header;
		},
		identity: function(force) {
			var deferred = $q.defer();

			if (force === true) _identity = undefined;

			// check and see if we have retrieved the identity data from the
			// server. if we have, reuse it by immediately resolving
			if (angular.isDefined(_identity)) {
				deferred.resolve(_identity);

				return deferred.promise;
			}
			_headers = _credentials ? {authorization : "Basic "
		        + btoa(_credentials.username + ":" + _credentials.password)
		    } : {};
			// otherwise, retrieve the identity data from the server, update the
			// identity object, and then resolve.
			$http.get('/user', { ignoreErrors: true, headers : _headers })
			.success(function(data) {
				_identity = data;
				_authenticated = true;
				deferred.resolve(_identity);
			})
			.error(function () {
				_identity = null;
				_authenticated = false;
				_credencials = null;
				_headers = null;
				deferred.resolve(_identity);
			});


			return deferred.promise;
		}
	};
}
]);

App.factory('authorization', ['$rootScope', '$state', 'principal',
                              function($rootScope, $state, principal) {
	return {
		authorize: function() {
			return principal.identity()
			.then(function() {
				var isAuthenticated = principal.isAuthenticated();

				if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 && !principal.isInAnyRole($rootScope.toState.data.roles)) {
					if (isAuthenticated) $state.go('login'); // user is
																// signed in but
																// not
																// authorized
																// for desired
																// state
					else {
						// user is not authenticated. stow the state they wanted
						// before you
						// send them to the signin state, so you can return them
						// when you're done
						$rootScope.returnToState = $rootScope.toState;
						$rootScope.returnToStateParams = $rootScope.toStateParams;

						// now, send them to the signin state so they can log in
						$state.go('login');
					}
				}
			});
		}
	};
}
])