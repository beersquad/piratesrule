angular.module('CBSApp',[
    'CBSApp.cover',
    'CBSApp.map',
    'CBSApp.rate',
    'CBSApp.services',
    'ui.router'
  ])

.config(function($stateProvider,$urlRouterProvider,$qProvider){
  $stateProvider
    .state('cover', {
      url: '/cover',
      templateUrl: 'app/initial/initial.html',
      controller: 'coverController'
    })
    .state('buttonsMap', {
      url: '/buttonsMap',
      templateUrl: 'app/buttonsMap/buttonsMap.html',
      controller: 'mapController'
    })
    .state('showRate', {
      url: '/showRate',
      templateUrl: 'app/showRate/showRate.html',
      controller: 'rateController'
    })
    $urlRouterProvider.otherwise('/cover');
    $qProvider.errorOnUnhandledRejections(false);

})
