sivwebapp.controller('superintendentStaffAttendanceCtrl', function($scope, $http) {
    $scope.staffAttendanceSubmit = function(){
    	console.log($scope.staffattendancedata);
        $http({
                url: "http://localhost:8080/api/v1/staffattendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.staffattendancedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});