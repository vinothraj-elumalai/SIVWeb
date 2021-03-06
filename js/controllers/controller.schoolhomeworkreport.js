sivwebapp.controller('homeWorkListSchoolCtrl', function($scope, $http, currentHost, hosturl, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.homeworklistdata = {};
    $scope.admissionplayschoolprint = {};
    
    $scope.homeworklistdata.entrydate = constantService.toDateFormat(new Date());
    $scope.homeworklistdata.program = $scope.homeworklistdata.program;
    $scope.homeworklistdata.section = $scope.homeworklistdata.section;
    $scope.homeworklistdata.instituteid = $scope.userdata.instituteid;


    $scope.homeWorkListSubmit = function(){
        $http({
                url: hosturl+"/api/v1/studenthomeworkplayschool/homeworKlist",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.homeworklistdata)
            }).then(function(success) {
                
                $scope.students = success.data;


                $scope.admissionplayschoolprint.instituteName = $scope.userdata.instituteName;
                $scope.admissionplayschoolprint.instituteAddress1 = $scope.userdata.instituteAddress1;
                $scope.admissionplayschoolprint.instituteAddress2 = $scope.userdata.instituteAddress2;
                $scope.admissionplayschoolprint.instituteArea = $scope.userdata.instituteArea;
                $scope.admissionplayschoolprint.instituteState = $scope.userdata.instituteState;
                $scope.admissionplayschoolprint.institutePincode = $scope.userdata.institutePincode;
                $scope.admissionplayschoolprint.instituteContact1 = $scope.userdata.instituteContact1;
                $scope.admissionplayschoolprint.instituteContact2 = $scope.userdata.instituteContact2;
                $scope.admissionplayschoolprint.instituteEmail1 = $scope.userdata.instituteEmail1;
                $scope.admissionplayschoolprint.instituteEmail2 = $scope.userdata.instituteEmail2;
                $scope.admissionplayschoolprint.institutelogourl = $scope.userdata.instituteLogo;
            },function (error){
            	
   			});


    }


    $scope.printApplication = function(){
        $('#printableArea').printThis({
            importCSS: true,
             loadCSS: [currentHost+"css/bootstrap.css",currentHost+"css/font-awesome.css",currentHost+"css/icomoon.css",currentHost+"css/simple-sidebar.css",currentHost+"css/style.css"]
        });
    }

        $scope.getHomework = function() {
        $scope.homeworklistdata.currentdatestatus = false;
        $scope.homeworklistdata.hwdate = $scope.entrydate;
        $scope.homeWorkListSubmit();
    }
    $scope.homeWorkListSubmit();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };
});