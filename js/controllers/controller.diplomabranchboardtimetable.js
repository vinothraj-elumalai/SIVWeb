sivwebapp.controller('diplomaBranchBoardExamTimetableCtrl', function($scope, $http, hosturl) {
    $scope.diplomaBranchBoardExamTimeTableSubmit = function(){
    	console.log($scope.diplomaBranchboardexamtimetabledata);
        $http({
                url: hosturl+"/api/v1/diplomabranchboardexamtimetableheader",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.diplomaBranchboardexamtimetabledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});