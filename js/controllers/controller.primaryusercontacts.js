sivwebapp.controller('primaryUserContactCtrl', function($scope, $http, hosturl) {
    $scope.primaryUserContactSubmit = function(){
    	console.log($scope.primaryusercontactdata);
        $http({
                url: hosturl+"/api/v1/primaryusercontact",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.primaryusercontactdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});