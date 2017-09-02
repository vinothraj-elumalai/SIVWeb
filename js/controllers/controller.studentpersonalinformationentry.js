sivwebapp.controller('studentPersonalInformationEntryCtrl', function($scope, $http) {
    $scope.studentPersonalInformationEntrySubmit = function(){
    	console.log($scope.studentpersonalinfodata1);
        $http({
                url: "http://localhost:8080/api/v1/studentpersonalinformation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentpersonalinfodata1)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});