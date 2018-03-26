sivwebapp.controller('parentfeedbackplayschoolCtrl', function($scope, $http, hosturl) {
    $scope.parentfeedbackPlaySchoolSubmit = function(){
    	console.log($scope.parentfeedbackplayschooldata);
        $http({
                url: hosturl+"/api/v1/parentfeedback",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.parentfeedbackplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});