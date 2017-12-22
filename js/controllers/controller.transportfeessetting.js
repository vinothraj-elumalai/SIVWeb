sivwebapp.controller('transportFeesSettingCtrl', function($scope, $http, hosturl) {
    $scope.transportFeesSettingSubmit = function(){
    	console.log($scope.transportfeessettingdata);
            $http({
                url: hosturl+"/api/v1/transportfeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.transportfeessettingdata)
                
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});
