sivwebapp.controller('parentfeedbackCtrl', function($scope, $http) {
    $scope.parentFeedBackSubmit = function(){
    	console.log($scope.parentfeedbackdata);
        $http({
                url: "http://localhost:8080/api/v1/parentfeedback",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.parentfeedbackdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});