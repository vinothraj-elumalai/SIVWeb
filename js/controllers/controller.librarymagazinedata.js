sivwebapp.controller('libraryMagazineDataCtrl', function($scope, $http, hosturl) {
    $scope.libraryMagazineEntrySubmit = function(){
    	console.log($scope.librarymagazinedata);
        $http({
                url: hosturl+"/api/v1/librarymagazineentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.librarymagazinedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});