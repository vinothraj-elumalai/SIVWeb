sivwebapp.controller('diplomaBranchIntTestTimetableCtrl', function($scope, $http) {
    $scope.diplomaBranchInternalTestTimeTableSubmit = function(){
    	console.log($scope.diplomaInternalBranchtesttimetabledata);
        $http({
                url: "http://localhost:8080/api/v1/diplomainternalbranchtesttimetableheader",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.diplomaInternalBranchtesttimetabledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});