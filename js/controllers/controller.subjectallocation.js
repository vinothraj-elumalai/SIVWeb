sivwebapp.controller('subjectAllocationCtrl', function($scope, $http) {
    $scope.subjectAllocationSubmit = function(){
    	console.log($scope.subjectallocationdata);
        $http({
                url: "http://localhost:8080/api/v1/subjectallocation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.subjectallocationdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});