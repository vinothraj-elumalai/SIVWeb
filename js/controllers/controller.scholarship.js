sivwebapp.controller('scholarshipCtrl', function($scope, $http, hosturl) {
    $scope.scholarshipSubmit = function(){
    	console.log($scope.scholarshipdata);
        $http({
                url: hosturl+"/api/v1/scholarship",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.scholarshipdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});