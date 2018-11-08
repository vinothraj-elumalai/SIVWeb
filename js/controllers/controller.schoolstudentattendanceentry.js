sivwebapp.controller('studentAttendanceSchoolCtrl', function($scope, $http, hosturl, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.getSchoolStudentListData = {};
    $scope.getSchoolStudentListData.instituteid=$scope.userdata.instituteid;
    $scope.getSchoolStudentListData.loginuser = $scope.userdata.username;
    $scope.getStudentListAttendance = function(){
        $http({
                url: hosturl+"/api/v1/studentattendancedetailschool/getStudentListAttendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getSchoolStudentListData)
            }).then(function(success) {
                console.log(success.data);
                if(success.data == "" || success.data == null){
                    alert("Record already entered!");
                }else{
                    $scope.schoolstudentList = success.data;
                    $scope.$watch('schoolstudentList', function(newVal, oldVal){
                        console.log('changed');
                        $scope.confirmAbsentee=false;
                    }, true);
                }
                
            },function (error){
                
         });
    }
    $scope.submitStudentAttendance = function(){
        $scope.setattendancedetaildatalist=JSON.stringify($scope.schoolstudentList);
        $scope.getSchoolStudentListDataString=JSON.stringify($scope.getSchoolStudentListData);
        console.log("sdfdsdfdf");
        console.log($scope.getSchoolStudentListDataString);
        $scope.setattendancedetaildata={};
        $scope.setattendancedetaildata={
            "setattendancedetail": $scope.setattendancedetaildatalist,
            "selectedclassdetail": $scope.getSchoolStudentListDataString
        };
        $http({
                url: hosturl+"/api/v1/studentattendancedetailschool/setStudentListAttendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.setattendancedetaildata)
            }).then(function(success) {
                alert("Record Saved!");
                $scope.schoolstudentList = [];
                // console.log(success.data);
                // $scope.playschoolstudentList = success.data;
            },function (error){
                
         });
    }
});