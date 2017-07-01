sivwebapp.controller('studentDiscontinuedTcCtrl', function($scope, $http) {
    $scope.studentDiscontinuedTcSubmit = function(){
    	console.log($scope.studentdiscontinuedtcdata);
        $http({
                url: "http://localhost:8080/api/v1/studentdiscontinuedtranscert",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentdiscontinuedtcdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});