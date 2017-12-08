sivwebapp.controller('studentTransportChangePlaySchoolCtrl', function($scope, $http) {
    $scope.studentTransportChangePlaySchoolSubmit = function(){
    	console.log($scope.studentTransportChangePlaySchoolData);
        $http({
                url: "http://localhost:8080/api/v1/transportchangeplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentTransportChangePlaySchoolData)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});