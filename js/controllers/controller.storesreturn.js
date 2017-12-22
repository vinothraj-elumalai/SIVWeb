sivwebapp.controller('storesReturnCtrl', function($scope, $http, hosturl) {
    $scope.storesReturnSubmit = function(){
    	console.log($scope.storesreturndata);
        $http({
                url: hosturl+"/api/v1/storesreturn",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.storesreturndata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }


    /*table entry*/
    $scope.storesreturndataList = [];
    $scope.additem= function(singlereturndetail){
        console.log(singlereturndetail);
        $scope.storesreturndataList.push(
            {
                'hsncode':singlereturndetail.hsncode,
                'itemname':singlereturndetail.itemname,
                'quantity':singlereturndetail.quantity,
                'price':singlereturndetail.price
            }
        );
        $scope.storesreturn={};
    }
    $scope.deleteitem = function (item) {
        $scope.storesreturndataList.splice($scope.storesreturndataList.indexOf(item), 1);
    }
    /*table entry*/    
});