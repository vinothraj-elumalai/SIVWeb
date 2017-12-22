sivwebapp.controller('feesFollowupCtrl', function($scope, $http, hosturl) {
    $scope.feesFollowupSubmit = function(){
    	console.log($scope.feesfollowupdata);
        $http({
                url: hosturl+"/api/v1/feesfollowup",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.feesfollowupdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});