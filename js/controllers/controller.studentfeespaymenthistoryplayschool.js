sivwebapp.controller('studentFeesPaymentHistoryPlaySchoolCtrl', function($scope, $http) {
    $scope.studentFeesPaymentHistoryPlaySchoolSubmit = function(){
    	console.log($scope.studentfeespaymenthistoryplayschooldata);
        $http({
                url: "http://localhost:8080/api/v1/studentdiscontinuedtranscert",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentfeespaymenthistoryplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});