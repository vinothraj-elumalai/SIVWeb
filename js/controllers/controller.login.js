sivwebapp.controller('loginCtrl', function($scope, $http, $location,$rootScope, hosturl, Auth) {
    $scope.logindata = {};
    $scope.logindata.sourceDevice = "web";
    $scope.loginSubmit = function(){
        $http({
                url: hosturl+"/api/v1/user",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.logindata)
            }).then(function(response) {
                $rootScope.userStatus=response.data;
                if($rootScope.userStatus.errorMessage=="WRONG PASSWORD"){
                    alert("Invalid Username/Password");
                }else{
                    if($rootScope.userStatus.userRole != ""){

                        Auth.setUser($rootScope.userStatus);
                        $location.url("/dashboard");
                        $rootScope.logginStatus = true;
                        $rootScope.istogglemenu = false;
                    }
                }
            },function (error){
            	alert("Something went wrong!");
   			});
    }
});