sivwebapp.controller('studentRemarksEntryCtrl', function($scope, $http) {
    $scope.studentRemarksSubmit = function(){
    	console.log($scope.studentremarksdata);
        $http({
                url: "http://localhost:8080/api/v1/studentremarksentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentremarksdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});