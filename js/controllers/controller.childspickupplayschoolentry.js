sivwebapp.controller('childsPickupPlaySchoolEntryCtrl', function($scope, $http, hosturl) {
    $scope.currenttime = new Date().toLocaleTimeString();
    $scope.getStudentListAttendance = function(){
        $http({
                url: hosturl+"/api/v1/childspickupplayschool/getStudentListPickup",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getPlaySchoolStudentListData)
            }).then(function(success) {
                console.log(success.data);
                
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
        $http({
                url: hosturl+"/api/v1/childspickupplayschool/setPickUpDetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.pickupdetailsdata)
            }).then(function(success) {
                console.log(success.data);
               
                alert("Record Saved");
                $scope.pickupdetailsdata = {};
                $scope.playschoolstudentList = [];
            },function (error){
                
         });
    }
});