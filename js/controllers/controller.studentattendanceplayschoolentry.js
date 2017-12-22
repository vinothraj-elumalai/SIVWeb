sivwebapp.controller('studentAttendancePlayschoolCtrl', function($scope, $http, hosturl) {
    $scope.getStudentListAttendance = function(){
        $http({
                url: hosturl+"/api/v1/studentattendancedetailplayschool/getStudentListAttendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getPlaySchoolStudentListData)
            }).then(function(success) {
                console.log(success.data);
                $scope.playschoolstudentList = success.data;
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
                // console.log(success.data);
                // $scope.playschoolstudentList = success.data;
            },function (error){
                
         });
    }
});