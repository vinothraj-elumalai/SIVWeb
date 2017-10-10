sivwebapp.controller('instituteBatchDetailsCtrl', function($scope, $http) {
    $scope.institutionbatchdetailsSubmit = function(){
    	console.log($scope.institutebatchdetailsdata);
        $http({
                url: "http://localhost:8080/api/v1/institutebatchdetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutebatchdetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});