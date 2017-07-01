sivwebapp.controller('bonafideCtrl', function($scope, $http) {
    $scope.bonafideSubmit = function(){
    	console.log($scope.bonafidedata);
        $http({
                url: "http://localhost:8080/api/v1/bonafide",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.bonafidedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});