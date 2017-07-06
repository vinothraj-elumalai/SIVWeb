sivwebapp.controller('scholarshipCtrl', function($scope, $http) {
    $scope.scholarshipSubmit = function(){
    	console.log($scope.scholarshipdata);
        $http({
                url: "http://localhost:8080/api/v1/scholarship",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.scholarshipdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});