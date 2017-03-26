angular.module('CBSApp.services', [])


.factory('Map', function($http,$q){


  var getMap = function(){
    return $http({
      method: 'GET',
      url: '/api/map'
    })
    .then(function (resp) {
      return resp.data;
    });
  }



  return {
    getMap: getMap
  }
})


// var getMap = function(){
//   return $http({
//     method: 'GET',
//     url: '/api/map'
//   })
//   .then(function (resp) {
//     return resp.data;
//   });
// }


// $q.all([Restaurants.getAll(), Auth.getUser()]).then(function(results) {
//   $scope.restaurants = []
//   $scope.favorList = results[1].favor
//   for(i=0; i<results[0].length; i++){
//     if($scope.favorList.includes(results[0][i].id)){
//       $scope.restaurants.push(results[0][i])
//     }
//   }
// })
