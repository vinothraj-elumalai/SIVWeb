sivwebapp.controller('studentCollegeIdCtrl', function($scope, $http) {
    $scope.studentCollegeIdSubmit = function(){
    	console.log($scope.studentcollegeid);
        $http({
                url: "http://localhost:8080/api/v1/studentcollegeid",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentcollegeid)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});