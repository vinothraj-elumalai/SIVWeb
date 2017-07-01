sivwebapp.controller('firstaidEntryCtrl', function($scope, $http) {
    $scope.firstaidEntrySubmit = function(){
    	console.log($scope.firstaidentrtydata);
        $http({
                url: "http://localhost:8080/api/v1/firstaidentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.firstaidentrtydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});