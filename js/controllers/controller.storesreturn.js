sivwebapp.controller('storesReturnCtrl', function($scope, $http) {
    $scope.storesReturnSubmit = function(){
    	console.log($scope.storesreturndata);
        $http({
                url: "http://localhost:8080/api/v1/storesreturn",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.storesreturndata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});