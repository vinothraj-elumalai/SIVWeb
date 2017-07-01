sivwebapp.controller('applicationFollowUpCtrl', function($scope, $http) {
    $scope.applicationFollowUpSubmit = function(){
    	console.log($scope.applicationfollowupdata);
        $http({
                url: "http://localhost:8080/api/v1/applicationfollowup",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.applicationfollowupdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});