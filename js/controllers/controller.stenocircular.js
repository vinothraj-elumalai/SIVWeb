sivwebapp.controller('circularCtrl', function($scope, $http) {
    $scope.circularSubmit = function(){
    	console.log($scope.circulardata);
        $http({
                url: "http://localhost:8080/api/v1/stenocircular",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.circulardata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});