sivwebapp.controller('campusRequestCtrl', function($scope, $http) {
    $scope.campusRequestSubmit = function(){
    	console.log($scope.campusrequestdata);
        $http({
                url: "http://localhost:8080/api/v1/campusrequest",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.campusrequestdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});