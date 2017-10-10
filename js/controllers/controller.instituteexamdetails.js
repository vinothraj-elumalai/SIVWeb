sivwebapp.controller('instituteExamDetailsCtrl', function($scope, $http) {
    $scope.institutionexamdetailsSubmit = function(){
    	console.log($scope.instituteexamdetailsdata);
        $http({
                url: "http://localhost:8080/api/v1/instituteexamdetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.instituteexamdetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});