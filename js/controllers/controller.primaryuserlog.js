sivwebapp.controller('primaryUserLogCtrl', function($scope, $http) {
    $scope.primaryUserLogSubmit = function(){
    	console.log($scope.primaryuserlogdata);
        $http({
                url: "http://localhost:8080/api/v1/userlog",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.primaryuserlogdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});