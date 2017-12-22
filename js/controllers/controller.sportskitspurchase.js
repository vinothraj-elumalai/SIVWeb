sivwebapp.controller('sportsKitsPurchaseCtrl', function($scope, $http, hosturl) {
    $scope.sportsKitsPurchaseSubmit = function(){
    	console.log($scope.sportskitspurchasedata);
        $http({
                url: hosturl+"/api/v1/sportskitspurchase",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.sportskitspurchasedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

    /*table entry*/
    $scope.sportsitempurchaseList = [];
    $scope.additem= function(singlepurchasedetail){
        console.log(singlepurchasedetail);
        $scope.sportsitempurchaseList.push(
            {
                'hsncode':singlepurchasedetail.hsncode,
                'itemname':singlepurchasedetail.itemname,
                'quantity':singlepurchasedetail.quantity,
                'price':singlepurchasedetail.price
            }
        );
        $scope.sportskitspurchase={};
    }
    $scope.deleteitem = function (item) {
        $scope.sportsitempurchaseList.splice($scope.sportsitempurchaseList.indexOf(item), 1);
    }

});