sivwebapp.controller('securityMaterialInOutPassCtrl', function($scope, $http) {
    $scope.securityMaterialInOutSubmit = function(){
    	console.log($scope.securitymaterialinoutdata);
        $http({
                url: "http://localhost:8080/api/v1/securitymaterialinoutpass",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.securitymaterialinoutdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});