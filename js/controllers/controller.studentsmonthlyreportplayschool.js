sivwebapp.controller('studentsMonthlyReportPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.studentsMonthlyReportPlaySchoolSubmit = function(){
    	console.log($scope.studentmonthlyreportplayschooldata);
        $http({
                url: hosturl+"/api/v1/studentsmonthlyprogressplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentmonthlyreportplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});