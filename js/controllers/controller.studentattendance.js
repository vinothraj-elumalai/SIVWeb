sivwebapp.controller('studentAttendanceCtrl', function($scope, $http, hosturl) {
    $scope.getStudentListAttendance = function(){
        $http({
                url: hosturl+"/api/v1/studentattendance/getStudentListAttendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getStudentListData)
            }).then(function(success) {
               
                $scope.studentList = success.data;
            },function (error){
                
         });
    }
});