angular.module('CBSApp.map',[])
  .controller('mapController', function($scope, $interval, Map){
    //use promise after change server to promise
    $interval(function(){

      Map.getMap()
        .then(function(map){
          $scope.map = map
          console.log($scope.map)
          $scope.showMe = false
          var filledSpot = $scope.map.reduce(function(a,b) {
            return a.concat(b)})
            .reduce(function(a,b) {
              return a + b });
          if($scope.map.length * $scope.map[0].length - filledSpot >= 5){
            $scope.showMe = true
          }
        })
        .catch(function(error){
          console.error(error)
    })},300)

      // $scope.showMe = false
      // var filledSpot = $scope.map.reduce(function(a,b) {
      //   return a.concat(b)})
      //   .reduce(function(a,b) {
      //     return a + b });
      // if($scope.map.length * $scope.map[0].length - filledSpot >= 10){
      //   $scope.showMe = true
      // }

})
