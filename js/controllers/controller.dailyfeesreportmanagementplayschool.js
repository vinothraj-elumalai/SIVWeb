sivwebapp.controller('dailyfeesReportPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.dailyFeesReportPlaySchoolSubmit = function(){
    	console.log($scope.dailyfeesreportplayschooldata);
        $http({
                url: hosturl+"/api/v1/bonafide",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.dailyfeesreportplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});