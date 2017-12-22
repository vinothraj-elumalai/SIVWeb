sivwebapp.controller('transportIdCardCtrl', function($scope, $http, hosturl) {
    $scope.transportIdCardSubmit = function(){
    	console.log($scope.trtansportidcarddata);
        $http({
                url: hosturl+"/api/v1/transportidcard",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.trtansportidcarddata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});