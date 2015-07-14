/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

App.config(['$httpProvider','$stateProvider','$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider', 'APP_REQUIRES', 'RouteHelpersProvider',
function ($httpProvider, $stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, appRequires, helper) {
  'use strict';

  App.controller = $controllerProvider.register;
  App.directive  = $compileProvider.directive;
  App.filter     = $filterProvider.register;
  App.factory    = $provide.factory;
  App.service    = $provide.service;
  App.constant   = $provide.constant;
  App.value      = $provide.value;
  App.url        = 'http://localhost:3000/';

  // LAZY MODULES
  // ----------------------------------- 

  $ocLazyLoadProvider.config({
    debug: false,
    events: true,
    modules: appRequires.modules
  });

  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

  // default route
  $urlRouterProvider.otherwise('/app/index');

  // 
  // Application Routes
  // -----------------------------------   
  $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: helper.basepath('app.html'),
        controller: 'AppController',
        resolve: helper.resolveFor('modernizr', 'icons')
    })
    .state('app.index', {
        url: '/index',
        title: 'Single View',
        controller: 'SingleViewCtrl',
        resolve: helper.resolveFor('modernizr', 'icons'),
        templateUrl: helper.basepath('singleview.html')
    })
    .state('login', {
        url: '/login',
        title: 'Login',
        controller: 'LoginCtrl',
        resolve: helper.resolveFor('modernizr', 'icons','parsley'),
        templateUrl: helper.basepath('login.html')
    }).state('logout', {
        url: '/logout',
        title: 'Logout',
        controller: ['$scope','principal',function($scope, principal){
        	principal.logout();
        }],
        resolve: helper.resolveFor('modernizr', 'icons'),
        templateUrl: helper.basepath('logout.html')
    })
    .state('app.cadastro-usuario', {
        url: '/cadastro-usuario',
        title: 'Cadastro Usuário',
        templateUrl: helper.basepath('usuario/cadastro-usuario.html')
    })
    // 
    // CUSTOM RESOLVES
    //   Add your own resolves properties
    //   following this object extend
    //   method
    // ----------------------------------- 
    // .state('app.someroute', {
    //   url: '/some_url',
    //   templateUrl: 'path_to_template.html',
    //   controller: 'someController',
    //   resolve: angular.extend(
    //     helper.resolveFor(), {
    //     // YOUR RESOLVES GO HERE
    //     }
    //   )
    // })
    ;

}]).config(['$translateProvider', function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix : App.url+'/i18n/',
        suffix : '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLocalStorage();

}]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.parentSelector = '.wrapper > section';
  }])
.controller('NullController', function() {});
