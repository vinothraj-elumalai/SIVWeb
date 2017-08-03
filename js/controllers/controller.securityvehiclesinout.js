sivwebapp.controller('securityVehiclesInOutCtrl', function($scope, $http) {
    $scope.securityVehiclesInOutPassSubmit = function(){
    	console.log($scope.securityvehiclesinoutdata);
        $http({
                url: "http://localhost:8080/api/v1/securityvehiclesinout",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.securityvehiclesinoutdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});