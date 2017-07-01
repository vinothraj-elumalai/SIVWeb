sivwebapp.controller('subjectTimeTableCtrl', function($scope, $http) {
    $scope.subjectTimeTableSubmit = function(){
    	console.log($scope.subjecttimetabledata);
        $http({
                url: "http://localhost:8080/api/v1/subjecttimetable",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.subjecttimetabledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});