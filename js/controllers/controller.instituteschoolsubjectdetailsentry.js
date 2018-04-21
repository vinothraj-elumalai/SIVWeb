sivwebapp.controller('instituteSchoolSubjectDetailsCtrl', function($scope, $http, hosturl) {
    $scope.instituteschoolsubjectdetailsSubmit = function(){
    	console.log($scope.instituteschoolsubjectdetailsdata);
        $http({
                url: hosturl+"/api/v1/instituteschoolsubjectdetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.instituteschoolsubjectdetailsdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});