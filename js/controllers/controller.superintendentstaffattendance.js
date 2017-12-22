sivwebapp.controller('superintendentStaffAttendanceCtrl', function($scope, $http, hosturl) {
    $scope.staffAttendanceSubmit = function(){
    	console.log($scope.staffattendancedata);
        $http({
                url: hosturl+"/api/v1/staffattendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.staffattendancedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});