sivwebapp.controller('libraryUsageCtrl', function($scope, $http) {
    $scope.libraryUsageSubmit = function(){
    	console.log($scope.libraryusagedata);
        $http({
                url: "http://localhost:8080/api/v1/libraryusage",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.libraryusagedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});