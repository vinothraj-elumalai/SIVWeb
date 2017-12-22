sivwebapp.controller('staffLeaveLetterEntryCtrl', function($scope, $http, hosturl) {
    $scope.staffLeaveLetterEntrySubmit = function(){
    	console.log($scope.staffleaveletterentrydata);
        $http({
                url: hosturl+"/api/v1/staffleaveletterentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.staffleaveletterentrydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});