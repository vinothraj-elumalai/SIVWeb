sivwebapp.controller('admissionCounsellingCtrl', function($scope, $http, hosturl) {
    $scope.admissionCounsellingSubmit = function(){
        $http({
                url: hosturl+"/api/v1/admissioncounselling",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.admissioncounsellingdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }


    $scope.searchAppNo = function(){
        $http({
                url: hosturl+"/api/v1/admissioncounselling/getApplcationDetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.searchAppnoData)
            }).then(function(success) {
            },function (error){
                
            });
    }

    $scope.activestep = 1;
    $scope.gotostep = function(position){
        $scope.activestep = position;
    }



});