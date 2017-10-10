sivwebapp.controller('instituteBusrouteDetailsCtrl', function($scope, $http) {
    $scope.institutionbusroutedetailsSubmit = function(){
    	console.log($scope.institutebusroutedetailsdata);
        $http({
                url: "http://localhost:8080/api/v1/institutebusroutedetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutebusroutedetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});