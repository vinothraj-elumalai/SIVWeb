sivwebapp.controller('firstaidEntryCtrl', function($scope, $http, hosturl) {
    $scope.firstaidEntrySubmit = function(){
    	console.log($scope.firstaidentrtydata);
        $http({
                url: hosturl+"/api/v1/firstaidentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.firstaidentrtydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});