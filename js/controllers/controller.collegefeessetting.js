sivwebapp.controller('collegeFeesSettingCtrl', function($scope, $http, hosturl) {
    $scope.collegeFeesSettingSubmit = function(){
    	console.log($scope.collegefeessettingdata);
        $http({
                url: hosturl+"/api/v1/collegefeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.collegefeessettingdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});