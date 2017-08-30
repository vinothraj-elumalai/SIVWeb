sivwebapp.controller('primaryKeyUserCtrl', function($scope, $http) {
    $scope.primaryKeyUserSubmit = function(){
    	console.log($scope.primarykeyuserdata);
        $http({
                url: "http://localhost:8080/api/v1/primarykeyuser",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.primarykeyuserdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});