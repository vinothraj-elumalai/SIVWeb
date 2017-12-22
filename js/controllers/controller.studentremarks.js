sivwebapp.controller('studentRemarksEntryCtrl', function($scope, $http, hosturl) {
    $scope.studentRemarksSubmit = function(){
    	console.log($scope.studentremarksdata);
        $http({
                url: hosturl+"/api/v1/studentremarksentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentremarksdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});