sivwebapp.controller('admissionStatusManagementPlaySchoolCtrl', function($scope, $http) {
    $scope.getAdmissionStatusPlaySchoolSubmit = function(){
    	console.log($scope.getAdmissionStatusManagementData);
        $http({
                url: "http://localhost:8080/api/v1/applicationfollowup",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getAdmissionStatusManagementData)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});