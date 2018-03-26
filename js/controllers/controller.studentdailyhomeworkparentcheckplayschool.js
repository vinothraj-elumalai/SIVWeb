sivwebapp.controller('studentDailyHomeWorkParentFetchPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.studentdailyhomeworkparentfetchPlaySchoolSubmit = function(){
    	console.log($scope.studentdailyhomeworkparentfetchplayschooldata);
        $http({
                url: hosturl+"/api/v1/psdailyattendance",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentdailyhomeworkparentfetchplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});