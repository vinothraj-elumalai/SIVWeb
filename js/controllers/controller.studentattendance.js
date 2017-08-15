sivwebapp.controller('studentAttendanceCtrl', function($scope, $http) {
    $scope.getStudentListAttendance = function(){
        $http({
                url: "http://localhost:8080/api/v1/studentattendance/getStudentListAttendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getStudentListData)
            }).then(function(success) {
                console.log(success.data);
                $scope.studentList = success.data;
            },function (error){
                
         });
    }
});