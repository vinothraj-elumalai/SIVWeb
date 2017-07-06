sivwebapp.controller('diplomaSem2IntTestTimetableCtrl', function($scope, $http) {
    $scope.diplomaSem2InternalTestTimeTableSubmit = function(){
    	console.log($scope.diplomaInternalSem2testtimetabledata);
        $http({
                url: "http://localhost:8080/api/v1/diplomainternalsem2testtimetableheader",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.diplomaInternalSem2testtimetabledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});