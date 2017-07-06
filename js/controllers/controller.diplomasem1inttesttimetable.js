sivwebapp.controller('diplomaSem1IntTestTimetableCtrl', function($scope, $http) {
    $scope.diplomaSem1InternalTestTimeTableSubmit = function(){
    	console.log($scope.diplomaInternalSem1testtimetabledata);
        $http({
                url: "http://localhost:8080/api/v1/diplomainternalsem1testtimetableheader",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.diplomaInternalSem1testtimetabledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});