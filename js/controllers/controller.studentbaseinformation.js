sivwebapp.controller('studentBaseInformationCtrl', function($scope, $http) {
    $scope.studentBaseInfoSubmit = function(){
    	console.log($scope.studentbaseinfodata);
        $http({
                url: "http://localhost:8080/api/v1/studentbaseinformation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentbaseinfodata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});