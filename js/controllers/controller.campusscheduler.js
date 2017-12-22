sivwebapp.controller('campusSchedulerCtrl', function($scope, $http, hosturl) {
    $scope.campusSchedulerSubmit = function(){
    	console.log($scope.campusschedulerdata);
        $http({
                url: hosturl+"/api/v1/campusscheduler",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.campusschedulerdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});