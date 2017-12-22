sivwebapp.controller('studentFeesPaymentHistoryPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.studentFeesPaymentHistoryPlaySchoolSubmit = function(){
    	console.log($scope.studentfeespaymenthistoryplayschooldata);
        $http({
                url: hosturl+"/api/v1/studentdiscontinuedtranscert",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentfeespaymenthistoryplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});