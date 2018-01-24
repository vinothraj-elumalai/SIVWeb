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
    $scope.photosUploadPlaySchoolSubmit = function(){
        $http({
                url: hosturl+"/api/v1/childspickupplayschool/getStudentListPickup",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getPlaySchoolStudentListData)
            }).then(function(success) {
                console.log(success.data);
                
                    $scope.playschoolstudentList = success.data;
                    $scope.$watch('playschoolstudentList', function(newVal, oldVal){
                        console.log('changed');
                    }, true);
               
                
            },function (error){
                
         });
    }
});