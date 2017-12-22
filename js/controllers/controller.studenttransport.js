sivwebapp.controller('studentTransportCtrl', function($scope, $http, hosturl) {
    $scope.studentTransportSubmit = function(){
    	console.log($scope.studentTransportData);
        $http({
                url: hosturl+"/api/v1/studenttransport",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentTransportData)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});