sivwebapp.controller('staffPersonalInformationPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.staffPersonalInformationPlaySchoolSubmit = function(){
    	console.log($scope.staffpersonalinformationplayschooldata);
        $http({
                url: hosturl+"/api/v1/staffpersonalinformationplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.staffpersonalinformationplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});