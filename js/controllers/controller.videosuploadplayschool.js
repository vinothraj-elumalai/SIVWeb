sivwebapp.controller('videosUploadPlaySchoolCtrl', function($scope, $http) {
    $scope.videosUploadPlaySchoolSubmit = function(){
    	console.log($scope.videosuploadPlaySchoolData);
        $http({
                url: "http://localhost:8080/api/v1/parentfeedback",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.videosuploadPlaySchoolData)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});