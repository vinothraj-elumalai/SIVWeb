sivwebapp.controller('staffBioDataCtrl', function($scope, $http, hosturl) {
    $scope.staffBioDataSubmit = function(){
    	console.log($scope.staffbiodatadata);
        $http({
                url: hosturl+"/api/v1/staffbiodata",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.staffbiodatadata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }


    $scope.activestep = 1;
    $scope.gotostep = function(position){
        $scope.activestep = position;
    }



});