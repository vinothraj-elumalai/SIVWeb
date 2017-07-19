sivwebapp.controller('libraryMagazineDataCtrl', function($scope, $http) {
    $scope.libraryMagazineEntrySubmit = function(){
    	console.log($scope.librarymagazinedata);
        $http({
                url: "http://localhost:8080/api/v1/librarymagazineentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.librarymagazinedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});