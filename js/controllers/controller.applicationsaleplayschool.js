sivwebapp.controller('playSchoolapplicationSaleCtrl', function($scope, $http) {
    $scope.playSchoolApplicationSaleSubmit = function(){
    	console.log($scope.playschoolapplicationsaledata);
        $http({
                url: "http://localhost:8080/api/v1/playschoolapplicationsale",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.playschoolapplicationsaledata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});