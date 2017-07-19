sivwebapp.controller('hostelStudentDataCtrl', function($scope, $http) {
    $scope.hostelStudentDataSubmit = function(){
    	console.log($scope.hostelstudentdata);
        $http({
                url: "http://localhost:8080/api/v1/hostelstudentdata",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.hostelstudentdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});