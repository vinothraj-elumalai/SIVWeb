sivwebapp.controller('certificateSubmissionCtrl', function($scope, $http, hosturl) {
    $scope.certificateSubmissionSubmit = function(){
    	console.log($scope.certificatesubmissiondata);
        $http({
                url: hosturl+"/api/v1/certificatesubmission",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.certificatesubmissiondata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});