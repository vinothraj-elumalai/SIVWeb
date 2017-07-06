sivwebapp.controller('eventsCtrl', function($scope, $http) {
    $scope.eventsSubmit = function(){
    	console.log($scope.eventsdata);
        $http({
                url: "http://localhost:8080/api/v1/stenoevents",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.eventsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});