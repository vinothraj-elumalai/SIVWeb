sivwebapp.controller('sportsOdCtrl', function($scope, $http) {
    $scope.sportsOdSubmit = function(){
    	console.log($scope.sportsoddata);
        $http({
                url: "http://localhost:8080/api/v1/sportsod",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.sportsoddata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});