sivwebapp.controller('studentHomeWorkPlaySchoolCtrl', function($scope, $http, hosturl) {

    clearFields();

    $scope.lastHomeWorkId = {};

    fetchlasthomeworkid();
       function fetchlasthomeworkid() {
            $scope.idNumber = {
                idno: 1
            };

            $http({
                    url: hosturl+"/api/v1/playschoolhomeworkidgenerate/getPlaySchoolHomeWorkIdNo",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param($scope.idNumber)
                    }).then(function(success) {
                        console.log(success.data);
                        $scope.lastHomeWorkId = success.data;
                        if($scope.lastHomeWorkId != null && $scope.lastHomeWorkId.homeworkid != undefined )
                        {
                           $scope.studenthomeworkplayschooldata.homeworkid = 'HW'+ $scope.lastHomeWorkId.homeworkid;
                        }
                    },function (error){
                    alert(error);
                    
                
                    });        

       }

       $scope.autogenerate = function()
       {
            if($scope.lastHomeWorkId != null && $scope.lastHomeWorkId.homeworkid != undefined )
            {
                $scope.studenthomeworkplayschooldata.homeworkid = 'HW'+ $scope.lastEnquiryNumber.homeworkid;
            }


        

       }


    $scope.studentHomeWorkPlaySchoolSubmit = function(){
    	console.log($scope.studenthomeworkplayschooldata);
        var playschlHomeWorkObj = $scope.studenthomeworkplayschooldata;

        if(playschlHomeWorkObj != undefined && playschlHomeWorkObj != null )
        {
            if(validateAdmission(playschlHomeWorkObj) || true)
            {
                try
                {
                    $scope.studenthomeworkplayschooldata.homeworkid = $scope.lastHomeWorkId.homeworkid+1;
                    $http({
                    url: hosturl+"/api/v1/studenthomeworkplayschool",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param($scope.studenthomeworkplayschooldata)
                    }).then(function(success) {
                        alert('Record Saved');
                
                    },function (error){
                
                    });

                }

                catch(ex)
                {
                    alert(ex);
                    console.log(ex);
                }


            }
        }
        else
        {
            clearFields();
            $scope.showHomeWorkIdErr = true;
            $scope.homeworkIdErrMsg = "(Please Enter Home Work Id)";
            
        }  




    }



        function validateAdmission(playschlHomeWorkObj )
    {
        try
        {    
             clearFields();

            if(playschlHomeWorkObj.homeworkid == undefined || playschlHomeWorkObj.homeworkid ==  null || playschlHomeWorkObj.homeworkid == '')
             {

                 $scope.showHomeWorkIdErr = true;
                 $scope.homeworkIdErrMsg = "(Please enter Home Work Id)";
                 return false;
                    
             }

            if(playschlHomeWorkObj.entrydate == undefined || playschlHomeWorkObj.entrydate ==  null || playschlHomeWorkObj.entrydate == '')
            {
               
                $scope.showEntryDateErr = true;
                $scope.entryDateErrMsg = "(Please enter Entry Date)";
                return false;

            }   
            if(playschlHomeWorkObj.entryday == undefined || playschlHomeWorkObj.entryday ==  null || playschlHomeWorkObj.entryday == '')
            {       
                $scope.showEntryDayErr = true;
                $scope.entryDayErrMsg = "(Please Enter Entry Day)";
                return false;
            }
            if(playschlHomeWorkObj.program == undefined || playschlHomeWorkObj.program ==  null || playschlHomeWorkObj.program == '')
            {
                $scope.showProgramErr = true;
                $scope.programErrMsg = "(Please enter Program )";
                return false;
            }

            if(playschlHomeWorkObj.section == undefined || playschlHomeWorkObj.section ==  null || playschlHomeWorkObj.section == '')
            {
                $scope.showSectionErr = true;
                $scope.sectionErrMsg = "(Please enter Section)";
                return false;
            }

            if(playschlHomeWorkObj.academicyear == undefined || playschlHomeWorkObj.academicyear ==  null || playschlHomeWorkObj.academicyear == '')
            {
                $scope.showAcademicYearErr = true;
                $scope.academicYearErrMsg = "(Please enter Academic Year)";
                return false;
            }

            if(playschlHomeWorkObj.subjectcategory == undefined || playschlHomeWorkObj.subjectcategory ==  null || playschlHomeWorkObj.subjectcategory == '')
            {
                $scope.showSubjectCategoryErr = true;
                $scope.subjectCategoryErrMsg = "(Please enter Category)";
                return false;
            }

            if(playschlHomeWorkObj.homeworkcontent == undefined || playschlHomeWorkObj.homeworkcontent ==  null || playschlHomeWorkObj.homeworkcontent == '')
            {
                $scope.showHomeWorkContentErr = true;
                $scope.homeworkContentErrMsg = "(Please enter Home Work Content)";
                return false;
            }


        }
        catch(ex)
        {
            alert('Exception in validation '+ ex);
            console.log(ex);
            return false;
        }

        return true;
    }

    function clearFields()
    {
        $scope.homeworkIdErrMsg='';
        $scope.showHomeWorkIdErr=false;

        $scope.entryDateErrMsg='';
        $scope.showEntryDateErr=false;

        $scope.entryDayErrMsg='';
        $scope.showEntryDayErr=false;

        $scope.programErrMsg='';
        $scope.showProgramErr=false;

        $scope.sectionErrMsg='';
        $scope.showSectionErr=false;

        $scope.academicYearErrMsg='';
        $scope.showAcademicYearErr=false;

        $scope.subjectCategoryErrMsg='';
        $scope.showSubjectCategoryErr=false;

        $scope.homeworkContentErrMsg='';
        $scope.showHomeWorkContentErr=false;


    }    

});