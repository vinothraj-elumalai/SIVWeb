sivwebapp.controller('hostelStudentDataCtrl', function($scope, $http, hosturl) {
    $scope.hostelStudentDataSubmit = function(){
    	console.log($scope.hostelstudentdata);
        $http({
                url: hosturl+"/api/v1/hostelstudentdata",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.hostelstudentdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});