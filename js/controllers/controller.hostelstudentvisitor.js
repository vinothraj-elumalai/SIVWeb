sivwebapp.controller('hostelStudentVisitorCtrl', function($scope, $http) {
    $scope.hostelStudentVisitorFormSubmit = function(){
    	console.log($scope.hostelstudentvisitordata);
        $http({
                url: "http://localhost:8080/api/v1/hostelstudentvisitor",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.hostelstudentvisitordata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});