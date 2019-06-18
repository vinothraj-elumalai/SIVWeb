sivwebapp.controller('studentAttendancePlayschoolCtrl', function($scope, $http, hosturl, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.getPlaySchoolStudentListData = {};
    $scope.getPlaySchoolStudentListData.instituteid=$scope.userdata.instituteid;
    $scope.getPlaySchoolStudentListData.loginuser = $scope.userdata.username;
    $scope.getStudentListAttendance = function(){
        $http({
                url: hosturl+"/api/v1/studentattendancedetailplayschool/getStudentListAttendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getPlaySchoolStudentListData)
            }).then(function(success) {
               
                if(success.data == "" || success.data == null){
                    alert("Record already entered!");
                }else{
                    $scope.playschoolstudentList = success.data;
                    $scope.$watch('playschoolstudentList', function(newVal, oldVal){
                        console.log('changed');
                        $scope.confirmAbsentee=false;
                    }, true);
                }
                
            },function (error){
                
         });
    }
    $scope.submitStudentAttendance = function(){
        $scope.setattendancedetaildatalist=JSON.stringify($scope.playschoolstudentList);
        $scope.getPlaySchoolStudentListDataString=JSON.stringify($scope.getPlaySchoolStudentListData);
        console.log("sdfdsdfdf");
        console.log($scope.getPlaySchoolStudentListDataString);
        $scope.setattendancedetaildata={};
        $scope.setattendancedetaildata={
            "setattendancedetail": $scope.setattendancedetaildatalist,
            "selectedclassdetail": $scope.getPlaySchoolStudentListDataString
        };
        $http({
                url: hosturl+"/api/v1/studentattendancedetailplayschool/setStudentListAttendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.setattendancedetaildata)
            }).then(function(success) {
                alert("Record Saved!");
                $scope.playschoolstudentList = [];
                
                // $scope.playschoolstudentList = success.data;
            },function (error){
                
         });
    }

    
    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };

    // $scope.open2 = function() {
    //     $scope.popup2.opened = true;
    // };
    // $scope.popup2 = {
    //     opened: false
    // };
});