sivwebapp.controller('assessmentPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.assessmentPlaySchoolSubmit = function(){
    	console.log($scope.assessmentplayschooldata);
        $http({
                url: hosturl+"/api/v1/applicationfollowup",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.assessmentplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});