sivwebapp.controller('staffAcademicDataCtrl', function($scope, $http, hosturl) {
    $scope.staffAcademicDataSubmit = function(){
    	console.log($scope.staffacademicdata);
        $http({
                url: hosturl+"/api/v1/staffacdemicdata",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.staffacademicdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }


    $scope.activestep = 1;
    $scope.gotostep = function(position){
        $scope.activestep = position;
    }



});