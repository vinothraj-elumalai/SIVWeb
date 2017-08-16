sivwebapp.controller('sportsAtheleteCtrl', function($scope, $http) {
    $scope.sportsAhteleteSubmit = function(){
    	console.log($scope.sportsatheletedata);
        $http({
                url: "http://localhost:8080/api/v1/sportsathelete",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.sportsatheletedata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
    /*table entry*/
    $scope.sportsatheletedataList = [];
    $scope.additem= function(sportsatheletedata){
        $scope.sportsatheletedataList.push(
            {
                'sportstype':sportsatheletedata.sportstype,
                'sportscode':sportsatheletedata.sportscode,
                'sportsarea':sportsatheletedata.sportsarea,
                'performancelevel':sportsatheletedata.performancelevel
            }
        );
        $scope.sportsatheletedata={};
    }
    $scope.deleteitem = function (item) {
        $scope.sportsatheletedataList.splice($scope.sportsatheletedataList.indexOf(item), 1);
    }
    /*table entry*/
});