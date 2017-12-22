sivwebapp.controller('corporateEntryCtrl', function($scope, $http, hosturl) {
    $scope.corporateEntrySubmit = function(){
    	console.log($scope.corporatedata);
        $http({
                url: hosturl+"/api/v1/corporateentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.corporatedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

    /*table entry*/
    $scope.corporatedataList = [];
    $scope.additem= function(corporatedata){
        $scope.corporatedataList.push(
            {
                'branch':corporatedata.branch,
                'branchcode':corporatedata.branchcode,
                'studentcategory':corporatedata.studentcategory
                
            }
        );
        $scope.corporatedata={};
    }
    $scope.deleteitem = function (item) {
        $scope.corporatedataList.splice($scope.corporatedataList.indexOf(item), 1);
    }
    /*table entry*/
});