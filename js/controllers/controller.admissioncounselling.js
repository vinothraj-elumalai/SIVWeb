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
        console.log($scope.applicationsaledata);
        $http({
                url: "http://localhost:8080/api/v1/admissioncounselling/getApplcationDetail",
                method: "GET",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.applicationsaledata)
            }).then(function(success) {
                
            },function (error){
                
            });
    }

    $scope.activestep = 1;
    $scope.gotostep = function(position){
        $scope.activestep = position;
    }



});