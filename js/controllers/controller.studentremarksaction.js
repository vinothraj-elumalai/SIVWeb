sivwebapp.controller('studentRemarksActionCtrl', function($scope, $http, hosturl) {
    $scope.studentRemarksActionSubmit = function(){
    	console.log($scope.stutentremarkactiondata);
        $http({
                url: hosturl+"/api/v1/studentremarksaction",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.stutentremarkactiondata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});