sivwebapp.controller('studentDailyEventsParentFetchPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.studentdailyeventsparentfetchPlaySchoolSubmit = function(){
    	console.log($scope.studentdailyeventsparentfetchplayschooldata);
        $http({
                url: hosturl+"/api/v1/psdailyattendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentdailyeventsparentfetchplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});