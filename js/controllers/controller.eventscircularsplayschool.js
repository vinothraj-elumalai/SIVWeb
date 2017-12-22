sivwebapp.controller('eventsCircularsPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.eventsCircularsPlaySchoolSubmit = function(){
    	console.log($scope.eventscircularssplayschooldata);
        $http({
                url: hosturl+"/api/v1/eventscircularsplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.eventscircularssplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});