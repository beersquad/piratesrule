angular.module('CBSApp.services', [])

.factory('Map', function(){
  var getMap = function(){
    var data = [[0,0,0],
                [0,1,0]]
    return data
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
