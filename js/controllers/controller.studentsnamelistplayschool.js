sivwebapp.controller('studentsNameListPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.studentsNameListSubmit = function(){
    	console.log($scope.studentsnamelistplayschooldata);
        $http({
                url: hosturl+"/api/v1/studentremarksaction",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentsnamelistplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});