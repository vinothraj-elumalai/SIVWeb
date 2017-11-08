sivwebapp.controller('studentsNameListPlaySchoolCtrl', function($scope, $http) {
    $scope.studentsNameListSubmit = function(){
    	console.log($scope.studentsnamelistplayschooldata);
        $http({
                url: "http://localhost:8080/api/v1/studentremarksaction",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentsnamelistplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});