sivwebapp.controller('transportFCCtrl', function($scope, $http, hosturl) {
    $scope.transportFCSubmit = function(){
    	console.log($scope.transportfcdata);
        $http({
                url: hosturl+"/api/v1/transportfc",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.transportfcdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});