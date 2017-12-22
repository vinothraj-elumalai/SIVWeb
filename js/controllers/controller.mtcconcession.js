sivwebapp.controller('mtcconcessionCtrl', function($scope, $http, hosturl) {
    $scope.mtcconcessionSubmit = function(){
    	console.log($scope.mtcconcessiondata);
        $http({
                url: hosturl+"/api/v1/mtcconcession",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.mtcconcessiondata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});