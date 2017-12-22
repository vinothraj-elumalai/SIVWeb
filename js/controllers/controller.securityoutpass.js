sivwebapp.controller('securityOutPassCtrl', function($scope, $http, hosturl) {
    $scope.securityOutPassSubmit = function(){
    	console.log($scope.securityoutpassdata);
        $http({
                url: hosturl+"/api/v1/securityoutpass",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.securityoutpassdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});