sivwebapp.controller('feesPaymentPlaySchoolCtrl', function($scope, $http) {
    $scope.feesPaymentPlaySchoolSubmit = function(){
    	console.log($scope.feespaymentplayschooldata);
        $http({
                url: "http://localhost:8080/api/v1/feespaymentplayschool",
                method: "POST",
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                data: $.param($scope.feespaymentplayschooldata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});