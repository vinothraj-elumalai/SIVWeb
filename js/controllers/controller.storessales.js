sivwebapp.controller('storesSalesCtrl', function($scope, $http) {
    $scope.storesSalesSubmit = function(){
    	console.log($scope.storessalesdata);
        $http({
                url: "http://localhost:8080/api/v1/storessales",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.storessalesdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

    /*table entry*/
    $scope.storessalesdataList = [];
    $scope.additem= function(singlesalesdetail){
        console.log(singlesalesdetail);
        $scope.storessalesdataList.push(
            {
                'hsncode':singlesalesdetail.hsncode,
                'itemname':singlesalesdetail.itemname,
                'quantity':singlesalesdetail.quantity,
                'price':singlesalesdetail.price
            }
        );
        $scope.storessales={};
    }
    $scope.deleteitem = function (item) {
        $scope.storessalesdataList.splice($scope.storessalesdataList.indexOf(item), 1);
    }
    /*table entry*/
});