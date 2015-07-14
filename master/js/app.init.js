/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses
 * 
 */

if (typeof $ === 'undefined') { throw new Error('This application\'s JavaScript requires jQuery'); }


//APP START
//----------------------------------- 

var App = angular.module('angle', ['ngRoute', 'ngAnimate', 'ngStorage', 'ngCookies', 'pascalprecht.translate', 'ui.bootstrap', 'ui.router', 'oc.lazyLoad', 'cfp.loadingBar', 'ngSanitize', 'restangular'])
.run(["$rootScope", "$state", "$stateParams",  '$window', '$templateCache','authorization','principal', function ($rootScope, $state, $stateParams, $window, $templateCache, authorization, principal) {
	// Set reference to access them from any scope
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	$rootScope.$storage = $window.localStorage;

	// Uncomment this to disables template cache
	/*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                  if (typeof(toState) !== 'undefined'){
                    $templateCache.remove(toState.templateUrl);
                  }
              });*/

	// Scope Globals
	// ----------------------------------- 
	$rootScope.app = {
			name: 'Presentation',
			description: 'Presentation App',
			year: ((new Date()).getFullYear()),
			layout: {
				isFixed: true,
				isCollapsed: true,
				isBoxed: false,
				isRTL: false
			},
			viewAnimation: 'ng-fadeInUp'
	};
	$rootScope.user = {
			name:     'Fabrício',
			job:      'BestSmart',
			picture:  'app/img/user/02.jpg'
	};

	$rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
		// track the state the user wants to go to; authorization service needs this
		$rootScope.toState = toState;
		$rootScope.toStateParams = toStateParams;
		// if the principal is resolved, do an authorization check immediately. otherwise,
		// it'll be done when the state it resolved.
		if (principal.isIdentityResolved()) authorization.authorize();
	});
}
]);
