sivwebapp.controller('studentDiscontinuedTcCtrl', function($scope, $http, hosturl) {
    $scope.studentDiscontinuedTcSubmit = function(){
    	console.log($scope.studentdiscontinuedtcdata);
        $http({
                url: hosturl+"/api/v1/studentdiscontinuedtranscert",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentdiscontinuedtcdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});