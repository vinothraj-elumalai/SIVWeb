sivwebapp.controller('diplomaFirstYearBoardExamTimetableCtrl', function($scope, $http, hosturl) {
    $scope.diplomaFirstYearBoardExamTimeTableSubmit = function(){
    	console.log($scope.diplomaFirstYearboardexamtimetabledata);
        $http({
                url: hosturl+"/api/v1/diplomafirstyearboardexamtimetableheader",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.diplomaFirstYearboardexamtimetabledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});