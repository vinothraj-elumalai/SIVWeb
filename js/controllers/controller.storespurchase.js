sivwebapp.controller('storesPurchaseCtrl', function($scope, $http) {
    $scope.storesPurchaseSubmit = function(){
    	console.log($scope.storespurchasedata);
        $http({
                url: "http://localhost:8080/api/v1/storespurchasedata",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.storespurchasedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }


    /*table entry*/
    $scope.storespurchasedataList = [];
    $scope.additem= function(singlepurchasedetail){
        console.log(singlepurchasedetail);
        $scope.storespurchasedataList.push(
            {
                'hsncode':singlepurchasedetail.hsncode,
                'itemname':singlepurchasedetail.itemname,
                'quantity':singlepurchasedetail.quantity,
                'price':singlepurchasedetail.price
            }
        );
        $scope.storespurchase={};
    }
    $scope.deleteitem = function (item) {
        $scope.storespurchasedataList.splice($scope.storespurchasedataList.indexOf(item), 1);
    }
    /*table entry*/
});