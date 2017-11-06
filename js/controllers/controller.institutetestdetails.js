sivwebapp.controller('instituteTestDetailsCtrl', function($scope, $http) {
    $scope.institutiontestdetailsSubmit = function(){
    	console.log($scope.institutetestdetailsdata);
        $http({
                url: "http://localhost:8080/api/v1/institutetestdetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutetestdetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});