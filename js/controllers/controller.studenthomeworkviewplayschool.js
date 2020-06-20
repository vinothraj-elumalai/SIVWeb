sivwebapp.controller('studentHomeWorkViewPlaySchoolCtrl', function($scope, $http, hosturl, Auth, constantService) {

    $scope.userdata = Auth.isLoggedIn();
    $scope.datesearchStatus = true;
    $scope.homeworkparamdata = {
        "registernumber": $scope.userdata.username,
        "instituteid": $scope.userdata.instituteid,
        "currentdatestatus": $scope.datesearchStatus 
    };
    $scope.homeworkparamdata.hwdate = constantService.toDateFormat(new Date());
    $scope.studentHomeWorkViewPlaySchoolSubmit = function(){
        $http({
                url: hosturl+"/api/v1/studenthomeworkplayschool/getStudentHomeWorkListPlaySchool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.homeworkparamdata)
            }).then(function(success) {
                $scope.homeworklist = success.data;
            },function (error){
            	
   			});
    }
    $scope.getHomework = function() {
        $scope.homeworkparamdata.currentdatestatus = false;
        $scope.homeworkparamdata.hwdate = $scope.homeworkDate;
        $scope.studentHomeWorkViewPlaySchoolSubmit();
    }
    $scope.studentHomeWorkViewPlaySchoolSubmit();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };
});