sivwebapp.controller('libraryBookIssueReturnDataCtrl', function($scope, $http) {
    $scope.libraryBooksIssueReturnSubmit = function(){
    	console.log($scope.librarybookissuereturndata);
        $http({
                url: "http://localhost:8080/api/v1/librarybookissuereturnentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.librarybookissuereturndata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});