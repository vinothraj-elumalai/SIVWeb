sivwebapp.controller('photosUploadPlaySchoolCtrl', function($scope, $http, hosturl, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.photosuploadPlaySchoolData = {};
    $scope.photosuploadPlaySchoolData.instituteid = $scope.userdata.instituteid;
    $scope.photosuploadPlaySchoolData.loginuser = $scope.userdata.username;
    $scope.getStudentListSubmit = function(){
        $http({
                url: hosturl+"/api/v1/playschoolphotogallery/getStudentList",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.photosuploadPlaySchoolData)
            }).then(function(success) {
                $scope.studentList = success.data;
            },function (error){
            	
   			});
    }
    $scope.selectAllStudents = function() {
        for(i in $scope.studentList){
            $scope.studentList[i].studentphotoaccess=1;
        }
    }
    $scope.uploadImageSubmit = function(){
         var files= $('#photoUploadFileId')[0].files;
         var len=files.length;

         if(len>10){
            alert("Maximum 10 Images are allowed!")
         }else{
            for(var i=0; i<len; i++){
                var files= $('#photoUploadFileId')[0].files[i];
                var data = new FormData();
                 data.append("files", files);
                 data.append("program", $scope.photosuploadPlaySchoolData.program);
                 data.append("section", $scope.photosuploadPlaySchoolData.section);
                 data.append("academicyear", $scope.photosuploadPlaySchoolData.academicyear);
                 data.append("instituteid", $scope.photosuploadPlaySchoolData.instituteid);
                 data.append("imagetitle", $scope.photosuploadPlaySchoolData.imagetitle);
                 data.append("uploadid", i);
                 data.append("studentlist", JSON.stringify($scope.studentList));
                $('body').append('<span class="overlay overlay'+i+'"></span>');
                 $.ajax({
                    type: "POST",
                    enctype: 'multipart/form-data',
                    url: hosturl+"/api/v1/playschoolphotogallery/uploadPhotos",
                    data: data,
                    processData: false, //prevent jQuery from automatically transforming the data into a query string
                    contentType: false,
                    cache: false,
                    timeout: 600000,
                    success: function (data) {
                        $('.overlay'+data).remove();
                        alert("Image"+data+" uploaded successfully!");
                    },
                    error: function (e) {

                        $('.overlay').remove();

                        
                        alert("Image"+data+" failed to upload! Please try again");

                    }
                });
             }
         }
     }
});