sivwebapp.controller('transportInsuranceCtrl', function($scope, $http, hosturl) {
    $scope.transportInsuranceSubmit = function(){
    	console.log($scope.transportinsurancedata);
        $http({
                url: hosturl+"/api/v1/transportinsurance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.transportinsurancedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});