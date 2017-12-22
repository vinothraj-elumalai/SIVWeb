sivwebapp.controller('photosUploadPlaySchoolCtrl', function($scope, $http, hosturl) {
    $scope.photosUploadPlaySchoolSubmit = function(){
    	console.log($scope.photosuploadPlaySchoolData);
        $http({
                url: hosturl+"/api/v1/parentfeedback",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.photosuploadPlaySchoolData)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});