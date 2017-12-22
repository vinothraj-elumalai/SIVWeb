sivwebapp.controller('hostelFeesSettingCtrl', function($scope, $http, hosturl) {
    $scope.hostelFeesSettingSubmit = function(){
    	console.log($scope.hostelfeessettingdata);
        $http({
                url: hosturl+"/api/v1/hostelfeessetting",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.hostelfeessettingdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});