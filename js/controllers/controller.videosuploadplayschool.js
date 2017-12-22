sivwebapp.controller('videosUploadPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.videosUploadPlaySchoolSubmit = function(){
    	console.log($scope.videosuploadPlaySchoolData);
        $http({
                url: hosturl+"/api/v1/parentfeedback",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.videosuploadPlaySchoolData)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});