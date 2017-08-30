sivwebapp.controller('libraryBookEntryCtrl', function($scope, $http) {
    $scope.libraryBooksEntrySubmit = function(){
    	console.log($scope.librarybookdata);
        $http({
                url: "http://localhost:8080/api/v1/librarybookentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.librarybookdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

    /*table entry*/
    $scope.librarybookdataList = [];
    $scope.additem= function(librarybookdata){
        $scope.librarybookdataList.push(
            {
                'branch':librarybookdata.branch,
                'branchcode':librarybookdata.branchcode
                         
            }
        );
        $scope.librarybookdata={};
    }
    $scope.deleteitem = function (item) {
        $scope.librarybookdataList.splice($scope.librarybookdataList.indexOf(item), 1);
    }
    /*table entry*/
});