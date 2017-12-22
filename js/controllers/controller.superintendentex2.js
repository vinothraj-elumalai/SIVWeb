sivwebapp.controller('superintendentEx2Ctrl', function($scope, $http, hosturl) {
    $scope.superintendentEx2Submit = function(){
    	console.log($scope.superintendentex2data);
        $http({
                url: hosturl+"/api/v1/superintendentex2",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.superintendentex2data)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});