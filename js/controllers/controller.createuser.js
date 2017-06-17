sivwebapp.controller('createUserCtrl', function($scope, $http) {
    $scope.createUserSubmit = function(){
    	console.log($scope.createuserdata);
        $http({
                url: "http://localhost:8080/api/v1/createuser",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.createuserdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});