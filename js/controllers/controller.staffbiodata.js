sivwebapp.controller('staffBioDataCtrl', function($scope, $http) {
    $scope.staffBioDataSubmit = function(){
    	console.log($scope.staffbiodatadata);
        $http({
                url: "http://localhost:8080/api/v1/staffbiodata",
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