sivwebapp.controller('transportIdCardCtrl', function($scope, $http) {
    $scope.transportIdCardSubmit = function(){
    	console.log($scope.trtansportidcarddata);
        $http({
                url: "http://localhost:8080/api/v1/transportidcard",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.trtansportidcarddata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});