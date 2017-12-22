sivwebapp.controller('instituteCourseDetailsCtrl', function($scope, $http, hosturl) {
    $scope.institutioncoursedetailsSubmit = function(){
    	console.log($scope.institutecoursedetailsdata);
        $http({
                url: hosturl+"/api/v1/institutecoursedetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.institutecoursedetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});