sivwebapp.controller('dashboardCtrl', function(constantService, $scope, $location, $rootScope, hosturl) {
  // $scope.menulist= constantService.usermenu('MGMT');
  // $scope.menulist= constantService.usermenu($rootScope.userStatus.userRole);

  $scope.dashboardgoto =  function(gotopath){
  	//alert(gotopath);
  	$location.url(gotopath);
  }
});
