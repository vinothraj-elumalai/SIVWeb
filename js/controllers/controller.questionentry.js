sivwebapp.controller('questionEntryCtrl', function($scope, $http) {
    $scope.questionEntrySubmit = function(){
    	console.log($scope.questionentrydata);
        $http({
                url: "http://localhost:8080/api/v1/questionentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.questionentrydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});