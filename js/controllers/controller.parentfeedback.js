sivwebapp.controller('parentfeedbackCtrl', function($scope, $http, hosturl) {
    $scope.parentFeedBackSubmit = function(){
    	console.log($scope.parentfeedbackdata);
        $http({
                url: hosturl+"/api/v1/parentfeedback",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.parentfeedbackdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});