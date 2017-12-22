sivwebapp.controller('feesPaymentCtrl', function($scope, $http, hosturl) {
    $scope.feesPaymentSubmit = function(){
    	console.log($scope.feespaymentdata);
        $http({
                url: hosturl+"/api/v1/feespayment",
                method: "POST",
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                data: $.param($scope.feespaymentdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});