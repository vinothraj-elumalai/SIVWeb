sivwebapp.controller('studentHomeWorkCtrl', function($scope, $http) {
    $scope.studentHomeWorkSubmit = function(){
    	console.log($scope.studenthomeworkdata);
        $http({
                url: "http://localhost:8080/api/v1/studenthomework",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studenthomeworkdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});