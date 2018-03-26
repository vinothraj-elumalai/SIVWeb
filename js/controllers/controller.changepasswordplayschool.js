sivwebapp.controller('changePasswordCtrl', function($scope, $http, hosturl) {
    $scope.changePasswordPlaySchoolSubmit = function(){
    	console.log($scope.changepasswordplayschooldata);
        $http({
                url: hosturl+"/api/v1/certificatesubmission",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.changepasswordplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});