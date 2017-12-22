sivwebapp.controller('instituteBatchDetailsCtrl', function($scope, $http, hosturl) {
    $scope.institutionbatchdetailsSubmit = function(){
    	console.log($scope.institutebatchdetailsdata);
        $http({
                url: hosturl+"/api/v1/institutebatchdetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutebatchdetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});