sivwebapp.controller('studentHomeWorkViewPlaySchoolCtrl', function($scope, $http, hosturl, Auth, constantService) {
    // postDataParams.put("registernumber", registernumber);
    //             postDataParams.put("hwdate", hwdate);
    //             postDataParams.put("currentdatestatus", datesearchStatus);
    //             postDataParams.put("instituteid", instituteid);

    $scope.userdata = Auth.isLoggedIn();
    $scope.datesearchStatus = true;
    $scope.homeworkparamdata = {
        "registernumber": $scope.userdata.username,
        "instituteid": $scope.userdata.instituteid,
        "currentdatestatus": $scope.datesearchStatus 
    };
    $scope.homeworkparamdata.hwdate = constantService.toDateFormat(new Date());
    $scope.studentHomeWorkViewPlaySchoolSubmit = function(){
        console.log($scope.homeworkparamdata);
        $http({
                url: hosturl+"/api/v1/studenthomeworkplayschool/getStudentHomeWorkListPlaySchool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.homeworkparamdata)
            }).then(function(success) {
                $scope.homeworklist = success.data;
                console.log($scope.homeworklist);
            },function (error){
            	
   			});
    }
    $scope.getHomework = function() {
        $scope.homeworkparamdata.currentdatestatus = false;
        $scope.homeworkparamdata.hwdate = $scope.homeworkDate;
        console.log($scope.homeworkparamdata);
        $scope.studentHomeWorkViewPlaySchoolSubmit();
    }
    $scope.studentHomeWorkViewPlaySchoolSubmit();
});