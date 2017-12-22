sivwebapp.controller('securityMaterialInOutPassCtrl', function($scope, $http, hosturl) {
    $scope.securityMaterialInOutSubmit = function(){
    	console.log($scope.securitymaterialinoutdata);
        $http({
                url: hosturl+"/api/v1/securitymaterialinoutpass",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.securitymaterialinoutdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

        /*table entry*/
    $scope.securitymaterialinoutdataList = [];
    $scope.additem= function(securitymaterialinoutdata){
        $scope.securitymaterialinoutdataList.push(
            {
                'materialname':securitymaterialinoutdata.materialname,
                'materialcode':securitymaterialinoutdata.materialcode,
                'materialcondition':securitymaterialinoutdata.materialcondition,
                'noofitems':securitymaterialinoutdata.noofitems
            }
        );
        $scope.securitymaterialinoutdata={};
    }
    $scope.deleteitem = function (item) {
        $scope.securitymaterialinoutdataList.splice($scope.securitymaterialinoutdataList.indexOf(item), 1);
    }
    /*table entry*/
});