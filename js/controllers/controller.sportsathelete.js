sivwebapp.controller('sportsAtheleteCtrl', function($scope, $http) {
    $scope.sportsAhteleteSubmit = function(){
    	console.log($scope.sportsatheletedata);
        $http({
                url: "http://localhost:8080/api/v1/sportsathelete",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.sportsatheletedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});