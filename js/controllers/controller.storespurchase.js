sivwebapp.controller('storesPurchaseCtrl', function($scope, $http) {
    $scope.storesPurchaseSubmit = function(){
    	console.log($scope.storespurchasedata);
        $http({
                url: "http://localhost:8080/api/v1/storespurchasedata",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.storespurchasedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});