sivwebapp.controller('eventsCtrl', function($scope, $http, hosturl) {
    $scope.eventsSubmit = function(){
    	console.log($scope.eventsdata);
        $http({
                url: hosturl+"/api/v1/stenoevents",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.eventsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});