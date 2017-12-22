sivwebapp.controller('applicationFollowUpCtrl', function($scope, $http, hosturl) {
    $scope.applicationFollowUpSubmit = function(){
    	console.log($scope.applicationfollowupdata);
        $http({
                url: hosturl+"/api/v1/applicationfollowup",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.applicationfollowupdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});