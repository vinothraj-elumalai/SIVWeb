sivwebapp.controller('collegeFeesSettingCtrl', function($scope, $http) {
    $scope.collegeFeesSettingSubmit = function(){
    	console.log($scope.collegefeessettingdata);
        $http({
                url: "http://localhost:8080/api/v1/collegefeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.collegefeessettingdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});