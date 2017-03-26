angular.module('CBSApp.services', [])

.factory('Map', function(){
  var data = [['1','1','0','0','1','1','1','1'],
              ['1','1','0','0','1','1','1','1'],
              ['1','1','1','1','0','0','0','0'],
              ['1','1','1','1','1','1','1','1']
            ]

  var getMap = function(){
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
