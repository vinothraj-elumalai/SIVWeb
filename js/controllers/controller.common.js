sivwebapp.controller('commonCtrl', function($scope,constantService, $rootScope) {
    $scope.USERNAME = "testdata";
    $scope.menulist= constantService.usermenu('MGMT');


    
    	$rootScope.logginStatus = false;
    	$rootScope.istogglemenu = true;
    	istogglemenu = false
    $rootScope.togglemenu = function (){
    	$rootScope.istogglemenu = !$rootScope.istogglemenu;
    }
});