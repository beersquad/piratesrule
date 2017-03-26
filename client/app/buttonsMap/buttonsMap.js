angular.module('CBSApp.map',[])
  .controller('mapController', function($scope,$interval, Map){
    //use promise after change server to promise

    $interval(function(){
      $scope.map = Map.getMap()

      $scope.showMe = false
      var filledSpot = $scope.map.reduce(function(a,b) {
        return a.concat(b)})
        .reduce(function(a,b) {
          return a + b });
      if($scope.map.length * $scope.map[0].length - filledSpot >= 2){
        $scope.showMe = true
      }

  },300)
})
