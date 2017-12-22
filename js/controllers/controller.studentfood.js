sivwebapp.controller('studentFoodCtrl', function($scope, $http, hosturl) {
    $scope.studentFoodSubmit = function(){
    	console.log($scope.studentfooddata);
        $http({
                url: hosturl+"/api/v1/studentfood",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentfooddata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});