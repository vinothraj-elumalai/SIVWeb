sivwebapp.controller('admissionStatusManagementPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.getAdmissionStatusPlaySchoolSubmit = function(){
    	console.log($scope.getAdmissionStatusManagementData);
        $http({
                url: hosturl+"/api/v1/admissionStatusManagementPlaySchool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getAdmissionStatusManagementData)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});