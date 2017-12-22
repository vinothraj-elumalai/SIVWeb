sivwebapp.controller('sportsPdDetailCtrl', function($scope, $http, hosturl) {
    $scope.sportsPdDetailSubmit = function(){
    	console.log($scope.sportspddetaildata);
        $http({
                url: hosturl+"/api/v1/sportspddetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.sportspddetaildata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});