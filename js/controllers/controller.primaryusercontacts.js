sivwebapp.controller('primaryUserContactCtrl', function($scope, $http) {
    $scope.primaryUserContactSubmit = function(){
    	console.log($scope.primaryusercontactdata);
        $http({
                url: "http://localhost:8080/api/v1/primaryusercontact",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.primaryusercontactdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});