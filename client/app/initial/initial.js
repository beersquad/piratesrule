angular.module('CBSApp.cover',[])
.controller("coverController",function($state, $timeout){
  $timeout(function() {
    $state.go('buttonsMap');
    }, 3000);
})
