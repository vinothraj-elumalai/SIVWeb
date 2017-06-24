sivwebapp.controller('foodFeesSettingCtrl', function($scope, $http) {
    $scope.foodFeesSettingSubmit = function(){
    	console.log($scope.foodfeessettingdata);
        $http({
                url: "http://localhost:8080/api/v1/foodfeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.foodfeessettingdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});