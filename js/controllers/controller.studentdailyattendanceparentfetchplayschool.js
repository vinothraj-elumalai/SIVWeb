sivwebapp.controller('studentDailyAttendanceParentFetchPlaySchoolCtrl', function($scope, $http, hosturl, Auth, constantService) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.attendanceparamdata = {
        "registernumber": $scope.userdata.username,
        "instituteid": $scope.userdata.instituteid
    };
    console.log("test");
    $scope.studentdailyattendanceparentfetchPlaySchoolSubmit = function(){

        $http({
                url: hosturl+"/api/v1/studentattendancedetailplayschool/getPlaySchoolFetchEnteredAttendanceDetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.attendanceparamdata)
            }).then(function(success) {
                console.log(success.data);
                if(success.data == null) {
                    alert("No Data Found!");
                }else{
                    $scope.attendancedetail = success.data;
                    $scope.attendancedetail.entrydate = constantService.toDateFormat($scope.attendancedetail.entrydate);
                    if($scope.attendancedetail.status == '1'){
                        $scope.attendancedetail.attstatus = "Present";
                    }else if ($scope.attendancedetail.status == '0'){
                        $scope.attendancedetail.attstatus = "Absent";
                    }
                }
            },function (error){
            	
   			});
    }
    $scope.studentdailyattendanceparentfetchPlaySchoolSubmit();
});