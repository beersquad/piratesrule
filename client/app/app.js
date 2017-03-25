angular.module('CBSApp',[
    'CBSApp.map',
    'CBSApp.services',
    'ui.router'
  ])

.config(function($stateProvider,$urlRouterProvider,$qProvider){
  $stateProvider
    .state('buttonsMap', {
      url: '/buttonsMap',
      templateUrl: 'app/buttonsMap/buttonsMap.html',
      controller: 'mapController'
    })
    $urlRouterProvider.otherwise('/buttonsMap');
    $qProvider.errorOnUnhandledRejections(false);

})
