angular.module('CBSApp.services', [])


.factory('Map', function($http,$q){
  var data = [[1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,0,0],
              [1,1,1,1,1,0,1,1]

.factory('Map', function(){
  var data = [['1','1','0','0','1','1','1','1'],
              ['1','1','0','0','1','1','1','1'],
              ['1','1','1','1','0','0','0','0'],
              ['1','1','1','1','1','1','1','1']
            ]

  var getMap = function(){
    return data
  }

  var getRate = function(){
    /////backend
    /////check the button matrix data when first vibration move(open door),
    /////check the button matrix data when second vibration move(close door)
    /////front end just request and get the rate
  }

  return {
    getMap: getMap,
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
