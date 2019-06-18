sivwebapp.controller('childsPickupPlaySchoolEntryCtrl', function($scope, $http, hosturl, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.getPlaySchoolStudentListData = {};
    $scope.getPlaySchoolStudentListData.instituteid=$scope.userdata.instituteid;
    $scope.getPlaySchoolStudentListData.loginuser = $scope.userdata.username;
    $scope.currenttime = new Date().toLocaleTimeString();
    $scope.getStudentListAttendance = function(){
        $http({
                url: hosturl+"/api/v1/childspickupplayschool/getStudentListPickup",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getPlaySchoolStudentListData)
            }).then(function(success) {
               
                
                    $scope.playschoolstudentList = success.data;
                    $scope.$watch('playschoolstudentList', function(newVal, oldVal){
                        console.log('changed');
                    }, true);
               
                
            },function (error){
                
         });
    }

    $scope.submitPickupDetails = function (){
        $scope.pickupdetailsattributes=JSON.stringify($scope.getPlaySchoolStudentListData);
        $scope.pickupdetails=JSON.stringify($scope.playschoolstudentList);
        
        $scope.pickupdetailsdata={};
        $scope.pickupdetailsdata={
            "pickupdetailsattributes": $scope.pickupdetailsattributes,
            "pickupdetails": $scope.pickupdetails
        };
        console.log("$scope.pickupdetailsdata");
        console.log($scope.pickupdetailsdata);
        $http({
                url: hosturl+"/api/v1/childspickupplayschool/setPickUpDetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.pickupdetailsdata)
            }).then(function(success) {
               
               
                alert("Record Saved");
                $scope.pickupdetailsdata = {};
                $scope.playschoolstudentList = [];
            },function (error){
                
         });
    }
});