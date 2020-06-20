sivwebapp.controller('dashboardCtrl', function(constantService, $scope, $location, $rootScope, hosturl) {
  $scope.dashboardgoto =  function(gotopath){
  	$location.url(gotopath);
  }
});
