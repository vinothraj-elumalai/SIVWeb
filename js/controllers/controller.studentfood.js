sivwebapp.controller('studentFoodCtrl', function($scope, $http) {
    $scope.studentFoodSubmit = function(){
    	console.log($scope.studentfooddata);
        $http({
                url: "http://localhost:8080/api/v1/studentfood",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentfooddata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});