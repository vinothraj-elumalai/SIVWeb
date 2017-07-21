sivwebapp.controller('fuelFillingCtrl', function($scope, $http) {
    $scope.fuelFillingSubmit = function(){
    	console.log($scope.fuelfillingdata);
        $http({
                url: "http://localhost:8080/api/v1/fuelfilling",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.fuelfillingdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});