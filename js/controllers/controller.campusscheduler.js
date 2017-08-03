sivwebapp.controller('campusSchedulerCtrl', function($scope, $http) {
    $scope.campusSchedulerSubmit = function(){
    	console.log($scope.campusschedulerdata);
        $http({
                url: "http://localhost:8080/api/v1/campusscheduler",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.campusschedulerdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});