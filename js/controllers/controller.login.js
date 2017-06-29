sivwebapp.controller('loginCtrl', function($scope, $http, $location) {
    $scope.loginSubmit = function(){
    	console.log($scope.logindata);
        $http({
                url: "http://localhost:8080/api/v1/user",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.logindata)
            }).then(function(response) {
                console.log(response);
                $scope.userStatus=response.data;
                if($scope.userStatus.errorMessage=="WRONG PASSWORD"){
                    alert("Invalid Username/Password");
                }else{
                    if($scope.userStatus.userRole != ""){
                        $location.url("/createuser");
                    }
                }
            },function (error){
            	
   			});
    }
});