sivwebapp.controller('transportFeesSettingCtrl', function($scope, $http) {
    $scope.transportFeesSettingSubmit = function(){
    	console.log($scope.transportfeessettingdata);
            $http({
                url: "http://localhost:8080/api/v1/transportfeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.transportfeessettingdata)
                
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});
