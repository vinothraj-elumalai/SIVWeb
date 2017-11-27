sivwebapp.controller('studentIndividualProgressViewCtrl', function($scope, $http) {
    $scope.individualStudentProgressViewPlaySchoolSubmit = function(){
    	console.log($scope.studentprogressinfoview);
        $http({
                url: "http://localhost:8080/api/v1/studentpersonalinformation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentprogressinfoview)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

     $scope.getStudentProgressInfoView = function(){
        $http({
                url: "http://localhost:8080/api/v1/studentpersonalinformation/getStudentPersonalInformationDetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentpersonalinfodata1)
            }).then(function(success) {
                console.log(success.data);
                $scope.studentpersonalinfo=success.data;
            },function (error){
                
            });
    }
});