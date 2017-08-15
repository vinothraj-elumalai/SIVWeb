sivwebapp.controller('corporateEntryCtrl', function($scope, $http) {
    $scope.corporateEntrySubmit = function(){
    	console.log($scope.corporatedata);
        $http({
                url: "http://localhost:8080/api/v1/corporateentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.corporatedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});