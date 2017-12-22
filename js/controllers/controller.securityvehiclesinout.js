sivwebapp.controller('securityVehiclesInOutCtrl', function($scope, $http, hosturl) {
    $scope.securityVehiclesInOutPassSubmit = function(){
    	console.log($scope.securityvehiclesinoutdata);
        $http({
                url: hosturl+"/api/v1/securityvehiclesinout",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.securityvehiclesinoutdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});