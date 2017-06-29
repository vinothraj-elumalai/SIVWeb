sivwebapp.controller('certificateSubmissionCtrl', function($scope, $http) {
    $scope.certificateSubmissionSubmit = function(){
    	console.log($scope.certificatesubmissiondata);
        $http({
                url: "http://localhost:8080/api/v1/certificatesubmission",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.certificatesubmissiondata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});