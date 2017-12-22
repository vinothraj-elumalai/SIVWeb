sivwebapp.controller('subjectEntryCtrl', function($scope, $http, hosturl) {
    $scope.subjectEntrySubmit = function(){
    	console.log($scope.subjectentrydata);
        $http({
                url: hosturl+"/api/v1/subjectentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.subjectentrydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});