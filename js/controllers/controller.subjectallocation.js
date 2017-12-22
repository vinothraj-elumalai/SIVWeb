sivwebapp.controller('subjectAllocationCtrl', function($scope, $http, hosturl) {
    $scope.subjectAllocationSubmit = function(){
    	console.log($scope.subjectallocationdata);
        $http({
                url: hosturl+"/api/v1/subjectallocation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.subjectallocationdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});