sivwebapp.controller('vendorDetailsCtrl', function($scope, $http, hosturl) {
    $scope.storesVendorDetailSubmit = function(){
    	console.log($scope.storesvendordetaildata);
        $http({
                url: hosturl+"/api/v1/storesvendordetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.storesvendordetaildata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});