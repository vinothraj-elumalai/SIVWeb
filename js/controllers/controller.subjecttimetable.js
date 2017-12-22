sivwebapp.controller('subjectTimeTableCtrl', function($scope, $http, hosturl) {
    $scope.subjectTimeTableSubmit = function(){
    	console.log($scope.subjecttimetabledata);
        $http({
                url: hosturl+"/api/v1/subjecttimetable",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.subjecttimetabledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});