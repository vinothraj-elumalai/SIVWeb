sivwebapp.controller('schoolFeesSettingPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.playschoolFeesSettingSubmit = function(){
    	console.log($scope.playschoolfeessettingdata);
        $http({
                url: hosturl+"/api/v1/playschoolschoolfeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.playschoolfeessettingdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});