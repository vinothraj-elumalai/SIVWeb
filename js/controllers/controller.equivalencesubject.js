sivwebapp.controller('equivalenceSubjectCtrl', function($scope, $http) {
    $scope.equivalenceSubjectSubmit = function(){
    	console.log($scope.equivalencesubjectdata);
        $http({
                url: "http://localhost:8080/api/v1/equivalencesubject",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.equivalencesubjectdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});