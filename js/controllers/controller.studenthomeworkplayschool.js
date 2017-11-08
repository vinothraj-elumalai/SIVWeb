sivwebapp.controller('studentHomeWorkPlaySchoolCtrl', function($scope, $http) {
    $scope.studentHomeWorkPlaySchoolSubmit = function(){
    	console.log($scope.studenthomeworkplayschooldata);
        $http({
                url: "http://localhost:8080/api/v1/studenthomeworkplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studenthomeworkplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});