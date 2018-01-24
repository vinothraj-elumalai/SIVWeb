sivwebapp.controller('studentHomeWorkViewPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.studentHomeWorkPlaySchoolSubmit = function(){
    	console.log($scope.studenthomeworkplayschooldata);
        $http({
                url: hosturl+"/api/v1/studenthomeworkplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studenthomeworkplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});