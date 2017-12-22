sivwebapp.controller('studentPersonalInformationEntryCtrl', function($scope, $http, hosturl) {
    $scope.studentPersonalInformationEntrySubmit = function(){
    	console.log($scope.studentpersonalinfodata1);
        $http({
                url: hosturl+"/api/v1/studentpersonalinformation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentpersonalinfodata1)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});