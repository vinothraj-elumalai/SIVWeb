sivwebapp.controller('eventsCircularsPlaySchoolCtrl', function($scope, $http) {
    $scope.eventsCircularsPlaySchoolSubmit = function(){
    	console.log($scope.eventscircularssplayschooldata);
        $http({
                url: "http://localhost:8080/api/v1/eventscircularsplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.eventscircularssplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});