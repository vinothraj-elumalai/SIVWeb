sivwebapp.controller('studentProfileViewPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.studentProfileViewPlaySchoolSubmit = function(){
    	console.log($scope.studentprofileinfoview);
        $http({
                url: hosturl+"/api/v1/studentpersonalinformation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentprofileinfoview)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

     $scope.getStudentProfileInfoView = function(){
        $http({
                url: hosturl+"/api/v1/studentpersonalinformation/getStudentPersonalInformationDetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentprofileinformationdata1)
            }).then(function(success) {
               
                $scope.studentpersonalinfo=success.data;
            },function (error){
                
            });
    }
});