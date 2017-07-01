sivwebapp.controller('studentLeaveLetterCtrl', function($scope, $http) {
    $scope.studentLeaveLetterSubmit = function(){
    	console.log($scope.studentleaveletterdata);
        $http({
                url: "http://localhost:8080/api/v1/studentleaveletter",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentleaveletterdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});