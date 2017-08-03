sivwebapp.controller('tournamentDataCtrl', function($scope, $http) {
    $scope.tournamentSubmit = function(){
    	console.log($scope.tournamentdata);
        $http({
                url: "http://localhost:8080/api/v1/tournamentdetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.tournamentdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});