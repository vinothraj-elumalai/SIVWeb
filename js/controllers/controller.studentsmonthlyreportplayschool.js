sivwebapp.controller('studentsMonthlyReportPlaySchoolCtrl', function($scope, $http) {
    $scope.studentsMonthlyReportPlaySchoolSubmit = function(){
    	console.log($scope.studentmonthlyreportplayschooldata);
        $http({
                url: "http://localhost:8080/api/v1/studentsmonthlyprogressplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentmonthlyreportplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});