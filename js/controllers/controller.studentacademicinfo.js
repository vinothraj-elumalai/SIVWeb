sivwebapp.controller('studentAcademicInfoCtrl', function($scope, $http) {
    $scope.studentAcademicInfoSubmit = function(){
    	console.log($scope.studentacademicinfodata);
        $http({
                url: "http://localhost:8080/api/v1/studentacademicinfo",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentacademicinfodata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});