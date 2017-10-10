sivwebapp.controller('instituteBusnoDetailsCtrl', function($scope, $http) {
    $scope.institutionbusnodetailsSubmit = function(){
    	console.log($scope.institutebusnodetailsdata);
        $http({
                url: "http://localhost:8080/api/v1/institutebusnodetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutebusnodetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});