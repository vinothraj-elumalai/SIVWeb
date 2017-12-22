sivwebapp.controller('questionEntryCtrl', function($scope, $http, hosturl) {
    $scope.questionEntrySubmit = function(){
    	console.log($scope.questionentrydata);
        $http({
                url: hosturl+"/api/v1/questionentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.questionentrydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});