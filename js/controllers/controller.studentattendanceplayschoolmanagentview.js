sivwebapp.controller('studentAttendancePlaySchoolManagementViewCtrl', function($scope, $http, hosturl) {
    $scope.getStudentAttendancePlaySchoolManagementViewSubmit = function(){
        console.log($scope.getPlaySchoolStudentAttendanceManagementViewData);
        $http({
                url: hosturl+"/api/v1/studentacademicinfo",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getPlaySchoolStudentAttendanceManagementViewData)
            }).then(function(success) {
                
            },function (error){
                
            });
    }
});