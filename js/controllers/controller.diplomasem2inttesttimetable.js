sivwebapp.controller('diplomaSem2IntTestTimetableCtrl', function($scope, $http, hosturl) {
    $scope.diplomaSem2InternalTestTimeTableSubmit = function(){
    	console.log($scope.diplomaInternalSem2testtimetabledata);
        $http({
                url: hosturl+"/api/v1/diplomainternalsem2testtimetableheader",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.diplomaInternalSem2testtimetabledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});