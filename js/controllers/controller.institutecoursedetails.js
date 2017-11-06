sivwebapp.controller('instituteCourseDetailsCtrl', function($scope, $http) {
    $scope.institutioncoursedetailsSubmit = function(){
    	console.log($scope.institutecoursedetailsdata);
        $http({
                url: "http://localhost:8080/api/v1/institutecoursedetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutecoursedetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});