sivwebapp.controller('sportsKitsSockCtrl', function($scope, $http, hosturl) {
    $scope.sportsKitsStockSubmit = function(){
    	console.log($scope.sportskitsstockdata);
        $http({
                url: hosturl+"/api/v1/sportskitsstock",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.sportskitsstockdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});