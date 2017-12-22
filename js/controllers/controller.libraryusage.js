sivwebapp.controller('libraryUsageCtrl', function($scope, $http, hosturl) {
    $scope.libraryUsageSubmit = function(){
    	console.log($scope.libraryusagedata);
        $http({
                url: hosturl+"/api/v1/libraryusage",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.libraryusagedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});