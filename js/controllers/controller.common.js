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
      $scope.menulist= JSON.parse($scope.userdata.menulist);
      $scope.instituteLogoUrl = $scope.userdata.instituteLogo;
        //Do something when the user is connected
      }
    }, true);

    
    $rootScope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd/MM/yyyy', 'shortDate'];
    $rootScope.format = $rootScope.formats[2];
    $rootScope.dateDisableFutureOptions = {  
      formatYear: 'yy',
      maxDate: new Date(),
      startingDay: 0
    };
    $rootScope.dateOpenOptions = {  
      formatYear: 'yy',
      startingDay: 0
    };
    $rootScope.open1 = function(scopeName) {
      // if (opened) {
      //   $rootScope[opened].opened = true;
      // }
      $rootScope[scopeName] = true;
      // $(form).find(`[name=${elementName}]`).attr('is-open', true);
      // $rootScope.popup1.opened = true;
    };
    $rootScope.popup1 = {
        opened: false
    };
}]);