sivwebapp.controller('libraryMemberDetailEntryCtrl', function($scope, $http, hosturl) {
    $scope.libraryMemberEntrySubmit = function(){
    	console.log($scope.librarymemberdata);
        $http({
                url: hosturl+"/api/v1/librarymemberdetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.librarymemberdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});