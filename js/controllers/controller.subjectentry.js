sivwebapp.controller('subjectEntryCtrl', function($scope, $http) {
    $scope.subjectEntrySubmit = function(){
    	console.log($scope.subjectentrydata);
        $http({
                url: "http://localhost:8080/api/v1/subjectentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.subjectentrydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});