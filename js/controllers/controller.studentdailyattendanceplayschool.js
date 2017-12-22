sivwebapp.controller('psdailyattendenceCtrl', function($scope, $http, hosturl) {
    $scope.psDailyAttendanceSubmit = function(){
    	console.log($scope.psdailyattendancedata);
        $http({
                url: hosturl+"/api/v1/psdailyattendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.psdailyattendancedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});