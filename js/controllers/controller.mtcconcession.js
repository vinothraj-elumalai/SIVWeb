sivwebapp.controller('mtcconcessionCtrl', function($scope, $http) {
    $scope.mtcconcessionSubmit = function(){
    	console.log($scope.mtcconcessiondata);
        $http({
                url: "http://localhost:8080/api/v1/mtcconcession",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.mtcconcessiondata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});