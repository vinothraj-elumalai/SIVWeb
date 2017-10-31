sivwebapp.controller('admissionCounsellingCtrl', function($scope, $http) {
    $scope.admissionCounsellingSubmit = function(){
    	console.log($scope.admissioncounsellingdata);
        $http({
                url: "http://localhost:8080/api/v1/admissioncounselling",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.admissioncounsellingdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }


    $scope.searchAppNo = function(){
        $http({
                url: "http://localhost:8080/api/v1/admissioncounselling/getApplcationDetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.searchAppnoData)
            }).then(function(success) {
                console.log(success.data);
            },function (error){
                
            });
    }

    $scope.activestep = 1;
    $scope.gotostep = function(position){
        $scope.activestep = position;
    }



});