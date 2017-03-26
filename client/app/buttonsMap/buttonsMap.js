angular.module('CBSApp.map',[])
  .controller('mapController', function($scope,$interval, Map){
    //use promise after change server to promise

    $interval(function(){
      $scope.map = Map.getMap()
  },300)
})
