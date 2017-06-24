sivwebapp.controller('hostelFeesSettingCtrl', function($scope, $http) {
    $scope.hostelFeesSettingSubmit = function(){
    	console.log($scope.hostelfeessettingdata);
        $http({
                url: "http://localhost:8080/api/v1/hostelfeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.hostelfeessettingdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});