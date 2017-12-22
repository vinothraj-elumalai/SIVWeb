sivwebapp.controller('diplomaBranchIntTestTimetableCtrl', function($scope, $http, hosturl) {
    $scope.diplomaBranchInternalTestTimeTableSubmit = function(){
    	console.log($scope.diplomaInternalBranchtesttimetabledata);
        $http({
                url: hosturl+"/api/v1/diplomainternalbranchtesttimetableheader",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.diplomaInternalBranchtesttimetabledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});