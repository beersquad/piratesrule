angular.module('CBSApp.map',[])
  .controller('mapController', function($scope, Map){
    //use promise after change server to promise
    $scope.map = Map.getMap()
  })
