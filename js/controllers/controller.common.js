sivwebapp.controller('commonCtrl',['$scope','constantService', '$rootScope', 'hosturl', 'Auth', '$location' ,function($scope,constantService, $rootScope, hosturl, Auth, $location) {
    $scope.USERNAME = "testdata";


    
    	$rootScope.logginStatus = false;
    	$rootScope.istogglemenu = true;
    	istogglemenu = false
    $rootScope.togglemenu = function (){
    	$rootScope.istogglemenu = !$rootScope.istogglemenu;
    }
    $scope.$watch(Auth.isLoggedIn, function (value, oldValue) {

    if(!value && oldValue) {
      console.log("Disconnect");
      $location.path('/login');
    }

    if(value) {
      console.log("Connect");
    $scope.userdata = Auth.isLoggedIn();
    console.log($scope.userdata.userRole);
    $scope.menulist= constantService.usermenu($scope.userdata.userRole);
    $scope.instituteLogoUrl = $scope.userdata.instituteLogo;
      //Do something when the user is connected
    }

  }, true);
}]);