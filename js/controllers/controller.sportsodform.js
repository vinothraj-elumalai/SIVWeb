sivwebapp.controller('sportsOdCtrl', function($scope, $http, hosturl) {
    $scope.sportsOdSubmit = function(){
    	console.log($scope.sportsoddata);
        $http({
                url: hosturl+"/api/v1/sportsod",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.sportsoddata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});