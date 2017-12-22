sivwebapp.controller('instituteBusnoDetailsCtrl', function($scope, $http, hosturl) {
    $scope.institutionbusnodetailsSubmit = function(){
    	console.log($scope.institutebusnodetailsdata);
        $http({
                url: hosturl+"/api/v1/institutebusnodetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutebusnodetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});