sivwebapp.controller('playschoolTransportFeesSettingCtrl', function($scope, $http) {
    $scope.playschoolTransportFeesSettingSubmit = function(){
    	console.log($scope.playschoolTransportfeessettingdata);
            $http({
                url: "http://localhost:8080/api/v1/playschooltransportfeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.playschoolTransportfeessettingdata)
                
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});
