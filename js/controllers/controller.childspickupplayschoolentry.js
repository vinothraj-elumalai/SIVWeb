sivwebapp.controller('childsPickupPlaySchoolEntryCtrl', function($scope, $http, hosturl) {
    $scope.childsPickupPlaySchoolEntrySubmit = function(){
    	console.log($scope.childspickupplayschoolentrydata);
        $http({
                url: hosturl+"/api/v1/childspickupplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.childspickupplayschoolentrydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});