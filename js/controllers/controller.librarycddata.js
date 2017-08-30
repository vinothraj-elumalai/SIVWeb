sivwebapp.controller('libraryCdDataCtrl', function($scope, $http) {
    $scope.libraryCdEntrySubmit = function(){
    	console.log($scope.librarycddata);
        $http({
                url: "http://localhost:8080/api/v1/librarycdentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.librarycddata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

        /*table entry*/
    $scope.librarycddataList = [];
    $scope.additem= function(librarycddata){
        $scope.librarycddataList.push(
            {
                'branch':librarycddata.branch,
                'branchcode':librarycddata.branchcode
                         
            }
        );
        $scope.librarycddata={};
    }
    $scope.deleteitem = function (item) {
        $scope.librarycddataList.splice($scope.librarycddataList.indexOf(item), 1);
    }
    /*table entry*/
});