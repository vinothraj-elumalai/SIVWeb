sivwebapp.controller('playschoolTransportFeesSettingCtrl', function($scope, $http, hosturl) {
    $scope.playschoolTransportFeesSettingSubmit = function(){
    	console.log($scope.playschoolTransportfeessettingdata);
            $http({
                url: hosturl+"/api/v1/playschooltransportfeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.playschoolTransportfeessettingdata)
                
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };
});
