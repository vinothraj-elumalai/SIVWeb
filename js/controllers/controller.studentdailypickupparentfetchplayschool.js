sivwebapp.controller('studentDailyPickupParentFetchPlaySchoolCtrl', function($scope, $http, hosturl, Auth, constantService) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.pickupparamdata = {
        "registernumber": $scope.userdata.username,
        "pickupddate": $scope.userdata.pickupddate,
        "instituteid": $scope.userdata.instituteid
    };
    $scope.studentdailypickupparentfetchPlaySchoolSubmit = function(){

        $http({
                url: hosturl+"/api/v1/childspickupplayschool/getStudentPickupPlaySchool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.pickupparamdata)
            }).then(function(success) {
               
                if(success.data == null) {
                    alert("No Data Found!");
                }else{
                    $scope.pickupdetail = success.data;
                }
            },function (error){
                
            });
    }
    $scope.studentdailypickupparentfetchPlaySchoolSubmit();
});