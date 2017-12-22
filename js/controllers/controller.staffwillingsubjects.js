sivwebapp.controller('staffWillingSubjectsCtrl', function($scope, $http, hosturl) {
    $scope.staffWillingSubjectSubmit = function(){
    	console.log($scope.staffwillingsubjectdata);
        $http({
                url: hosturl+"/api/v1/staffwillingsubject",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.staffwillingsubjectdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});