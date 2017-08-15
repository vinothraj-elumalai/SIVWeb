sivwebapp.controller('superintendentEx2Ctrl', function($scope, $http) {
    $scope.superintendentEx2Submit = function(){
    	console.log($scope.superintendentex2data);
        $http({
                url: "http://localhost:8080/api/v1/superintendentex2",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.superintendentex2data)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});