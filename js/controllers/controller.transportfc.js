sivwebapp.controller('transportFCCtrl', function($scope, $http) {
    $scope.transportFCSubmit = function(){
    	console.log($scope.transportfcdata);
        $http({
                url: "http://localhost:8080/api/v1/transportfc",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.transportfcdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});