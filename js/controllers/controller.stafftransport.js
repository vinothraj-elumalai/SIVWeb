sivwebapp.controller('staffTransportCtrl', function($scope, $http) {
    $scope.staffTransportSubmit = function(){
    	console.log($scope.stafftransportdata);
        $http({
                url: "http://localhost:8080/api/v1/stafftransport",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.stafftransportdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});