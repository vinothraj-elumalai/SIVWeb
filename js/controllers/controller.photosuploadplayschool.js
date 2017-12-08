sivwebapp.controller('photosUploadPlaySchoolCtrl', function($scope, $http) {
    $scope.photosUploadPlaySchoolSubmit = function(){
    	console.log($scope.photosuploadPlaySchoolData);
        $http({
                url: "http://localhost:8080/api/v1/parentfeedback",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.photosuploadPlaySchoolData)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});