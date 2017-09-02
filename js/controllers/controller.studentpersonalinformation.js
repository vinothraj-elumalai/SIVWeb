sivwebapp.controller('studentPersonalInformationCtrl', function($scope, $http) {
    $scope.studentPersonalInformationSubmit = function(){
    	console.log($scope.studentpersonalinfodata);
        $http({
                url: "http://localhost:8080/api/v1/studentpersonalinformation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentpersonalinfodata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

     $scope.getStudentPersonalInfo = function(){
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