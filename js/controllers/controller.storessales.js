sivwebapp.controller('storesSalesCtrl', function($scope, $http) {
    $scope.storesSalesSubmit = function(){
    	console.log($scope.storessalesdata);
        $http({
                url: "http://localhost:8080/api/v1/storessales",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.storessalesdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});