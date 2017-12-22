sivwebapp.controller('applicationSaleCtrl', function($scope, $http, hosturl) {
    $scope.applicationSaleSubmit = function(){
    	console.log($scope.applicationsaledata);
        $http({
                url: hosturl+"/api/v1/applicationsale",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.applicationsaledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});