sivwebapp.controller('primaryUserLogCtrl', function($scope, $http, hosturl) {
    $scope.primaryUserLogSubmit = function(){
    	console.log($scope.primaryuserlogdata);
        $http({
                url: hosturl+"/api/v1/userlog",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.primaryuserlogdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});