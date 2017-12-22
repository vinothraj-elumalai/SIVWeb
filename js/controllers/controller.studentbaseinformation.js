sivwebapp.controller('studentBaseInformationCtrl', function($scope, $http, hosturl) {
    $scope.studentBaseInfoSubmit = function(){
    	console.log($scope.studentbaseinfodata);
        $http({
                url: hosturl+"/api/v1/studentbaseinformation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentbaseinfodata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});