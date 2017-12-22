sivwebapp.controller('instituteTestDetailsCtrl', function($scope, $http, hosturl) {
    $scope.institutiontestdetailsSubmit = function(){
    	console.log($scope.institutetestdetailsdata);
        $http({
                url: hosturl+"/api/v1/institutetestdetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutetestdetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});