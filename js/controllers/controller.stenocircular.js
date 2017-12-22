sivwebapp.controller('circularCtrl', function($scope, $http, hosturl) {
    $scope.circularSubmit = function(){
    	console.log($scope.circulardata);
        $http({
                url: hosturl+"/api/v1/stenocircular",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.circulardata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});