sivwebapp.controller('securityVisitorPassCtrl', function($scope, $http) {
    $scope.securityVisitorPassSubmit = function(){
    	console.log($scope.securityvisitorpassdata);
        $http({
                url: "http://localhost:8080/api/v1/securityvisitorpass",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.securityvisitorpassdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});