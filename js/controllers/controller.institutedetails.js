sivwebapp.controller('instituteDetailsCtrl', function($scope, $http) {
    $scope.institutiondetailsSubmit = function(){
    	console.log($scope.institutedetailsdata);
        $http({
                url: "http://localhost:8080/api/v1/institutedetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutedetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});