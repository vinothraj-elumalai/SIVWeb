sivwebapp.controller('hostelStudentLeaveFormCtrl', function($scope, $http, hosturl) {
    $scope.hostelStudentLeaveFormSubmit = function(){
    	console.log($scope.hostelstudentleavedata);
        $http({
                url: hosturl+"/api/v1/hostelstudentleave",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.hostelstudentleavedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});