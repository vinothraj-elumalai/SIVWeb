sivwebapp.controller('securityLateComersCtrl', function($scope, $http) {
    $scope.securityLateComersSubmit = function(){
    	console.log($scope.securitylatecomersdata);
        $http({
                url: "http://localhost:8080/api/v1/securitylatecomers",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.securitylatecomersdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});