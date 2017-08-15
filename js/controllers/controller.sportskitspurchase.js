sivwebapp.controller('sportsKitsPurchaseCtrl', function($scope, $http) {
    $scope.sportsKitsPurchaseSubmit = function(){
    	console.log($scope.sportskitspurchasedata);
        $http({
                url: "http://localhost:8080/api/v1/sportskitspurchase",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.sportskitspurchasedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});