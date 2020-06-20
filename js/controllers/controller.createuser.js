sivwebapp.controller('createUserCtrl', function($scope, $http, hosturl) {
    $scope.createUserSubmit = function(){
        $http({
                url: hosturl+"/api/v1/createuser",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.createuserdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});