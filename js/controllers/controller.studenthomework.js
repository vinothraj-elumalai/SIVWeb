sivwebapp.controller('studentHomeWorkCtrl', function($scope, $http, hosturl) {
    $scope.studentHomeWorkSubmit = function(){
    	console.log($scope.studenthomeworkdata);
        $http({
                url: hosturl+"/api/v1/studenthomework",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studenthomeworkdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});