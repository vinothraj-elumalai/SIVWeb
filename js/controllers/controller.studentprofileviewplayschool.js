sivwebapp.controller('studentProfileViewPlaySchoolCtrl', function($scope, $http) {
    $scope.studentProfileViewPlaySchoolSubmit = function(){
    	console.log($scope.studentprofileinfoview);
        $http({
                url: "http://localhost:8080/api/v1/studentpersonalinformation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentprofileinfoview)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

     $scope.getStudentProfileInfoView = function(){
        $http({
                url: "http://localhost:8080/api/v1/studentpersonalinformation/getStudentPersonalInformationDetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentprofileinformationdata1)
            }).then(function(success) {
                console.log(success.data);
                $scope.studentpersonalinfo=success.data;
            },function (error){
                
            });
    }
});