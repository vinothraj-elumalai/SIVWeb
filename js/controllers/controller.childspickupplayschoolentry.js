sivwebapp.controller('childsPickupPlaySchoolEntryCtrl', function($scope, $http) {
    $scope.childsPickupPlaySchoolEntrySubmit = function(){
    	console.log($scope.childspickupplayschoolentrydata);
        $http({
                url: "http://localhost:8080/api/v1/childspickupplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.childspickupplayschoolentrydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});