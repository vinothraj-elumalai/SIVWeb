sivwebapp.controller('instituteDetailsCtrl', function($scope, $http, hosturl) {
    $scope.institutiondetailsSubmit = function(){
    	console.log($scope.institutedetailsdata);
        $http({
                url: hosturl+"/api/v1/institutedetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutedetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});