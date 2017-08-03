sivwebapp.controller('libraryMemberDetailEntryCtrl', function($scope, $http) {
    $scope.libraryMemberEntrySubmit = function(){
    	console.log($scope.librarymemberdata);
        $http({
                url: "http://localhost:8080/api/v1/librarymemberdetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.librarymemberdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});