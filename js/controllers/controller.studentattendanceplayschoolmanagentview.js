sivwebapp.controller('studentAttendancePlaySchoolManagementViewCtrl', function($scope, $http) {
    $scope.getStudentAttendancePlaySchoolManagementViewSubmit = function(){
        console.log($scope.getPlaySchoolStudentAttendanceManagementViewData);
        $http({
                url: "http://localhost:8080/api/v1/studentacademicinfo",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getPlaySchoolStudentAttendanceManagementViewData)
            }).then(function(success) {
                
            },function (error){
                
            });
    }
});