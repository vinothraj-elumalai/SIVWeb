sivwebapp.controller('feesFollowupCtrl', function($scope, $http) {
    $scope.feesFollowupSubmit = function(){
    	console.log($scope.feesfollowupdata);
        $http({
                url: "http://localhost:8080/api/v1/feesfollowup",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.feesfollowupdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});