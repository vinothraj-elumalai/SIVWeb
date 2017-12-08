sivwebapp.controller('staffPersonalInformationPlaySchoolCtrl', function($scope, $http) {
    $scope.staffPersonalInformationPlaySchoolSubmit = function(){
    	console.log($scope.staffpersonalinformationplayschooldata);
        $http({
                url: "http://localhost:8080/api/v1/staffpersonalinformationplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.staffpersonalinformationplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});