sivwebapp.controller('studentHomeWorkPlaySchoolCtrl', function($scope, $http,$window, hosturl, constantService, Auth) {
    
    clearFields();
    $scope.userdata = Auth.isLoggedIn();
    $scope.getPlaySchoolStudentListData = {};
    $scope.getPlaySchoolStudentListData.instituteid=$scope.userdata.instituteid;
    $scope.getPlaySchoolStudentListData.loginuser = $scope.userdata.username;
    $scope.lastHomeWorkId = {};
    $scope.studenthomeworkplayschooldata = {};

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
                       
                        $scope.lastHomeWorkId = success.data;
                        if($scope.lastHomeWorkId != null && $scope.lastHomeWorkId.hwid != undefined )
                        {
                           //$scope.studenthomeworkplayschooldata.homeworkid = 'HW'+ $scope.lastHomeWorkId.homeworkid;
                           $scope.studenthomeworkplayschooldata.homeworkid='HW'+ $scope.lastHomeWorkId.hwid;
                        }
                    },function (error){
                    alert(error);
                    
                
                    });        

       }

       $scope.autogenerate = function()
       {
            if($scope.lastHomeWorkId != null && $scope.lastHomeWorkId.hwid != undefined )
            {
                $scope.studenthomeworkplayschooldata.homeworkid = 'HW'+ $scope.lastHomeWorkId.hwid;
            }


        

       }


    $scope.studentHomeWorkPlaySchoolSubmit = function(){
        console.log("$scope.studenthomeworkplayschooldata");
        
        $scope.studenthomeworkplayschooldata.instituteid=$scope.userdata.instituteid;
        $scope.studenthomeworkplayschooldata.loginuser = $scope.userdata.username;
    	console.log($scope.studenthomeworkplayschooldata);
        var playschlHomeWorkObj = $scope.studenthomeworkplayschooldata;

        if(playschlHomeWorkObj != undefined && playschlHomeWorkObj != null )
        {
            if(validateAdmission(playschlHomeWorkObj))
            {
                try
                {
                    $scope.studenthomeworkplayschooldata.idno = 1;
                    $scope.studenthomeworkplayschooldata.hwid = $scope.lastHomeWorkId.hwid+1;
                    $http({
                    url: hosturl+"/api/v1/studenthomeworkplayschool",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param($scope.studenthomeworkplayschooldata)
                    }).then(function(success) {
                        alert('Record Saved');
                        fetchlasthomeworkid();
                        ClearDataFields();

                        
                
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


        function validateDate(dateStr) {
           var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
            var isValid=true;
            // Match the date format through regular expression
            if (dateStr.match(dateformat)) {
                //document.form1.text1.focus();
                //Test which seperator is used '/' or '-'
                var opera1 = dateStr.split('/');
                var opera2 = dateStr.split('-');
                lopera1 = opera1.length;
                lopera2 = opera2.length;
                // Extract the string into month, date and year
                if (lopera1 > 1) {
                    var pdate = dateStr.split('/');
                } else if (lopera2 > 1) {
                    var pdate = dateStr.split('-');
                }
                var dd = parseInt(pdate[0]);
                var mm = parseInt(pdate[1]);
                var yy = parseInt(pdate[2]);
                // Create list of days of a month [assume there is no leap year by default]
                var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (mm == 1 || mm > 2) {
                    if (dd > ListofDays[mm - 1]) {
                        isValid=false;
                        return false;
                    }
                }
                if (mm == 2) {
                    var lyear = false;
                    if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                        lyear = true;
                    }
                    if ((lyear == false) && (dd >= 29)) {
                        isValid=false;
                        return false;
                    }
                    if ((lyear == true) && (dd > 29)) {
                        isValid=false;
                        return false;
                    }
                }
            } else {
                isValid=false;
                return false;
            }
            return isValid;
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
            else
            {
                var isValidDate=validateDate(playschlHomeWorkObj.entrydate);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showEntryDateErr = true;
                    $scope.entryDateErrMsg = "(Invalid Committed Date)";
                    return false;
                }
               
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
            // if(playschlHomeWorkObj.instituteid == undefined || playschlHomeWorkObj.instituteid ==  null || playschlHomeWorkObj.instituteid == '')
            // {
            //     $scope.showInstituteIdErr = true;
            //     $scope.institueIdErrMsg = "(Please enter Institute Id)";
            //     return false;
            // }


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

        // $scope.institueIdErrMsg='';
        // $scope.showInstituteIdErr=false;


    }    

        function ClearDataFields()
    {
        // $scope.studenthomeworkplayschooldata.entrydate="";
        // $scope.studenthomeworkplayschooldata.entryday="";
        // $scope.studenthomeworkplayschooldata.program="Select Program";
        // $scope.studenthomeworkplayschooldata.section="Select Section";
        // $scope.studenthomeworkplayschooldata.academicyear="Select Academic Year";
        // $scope.studenthomeworkplayschooldata.subjectcategory="Select Subject Category";
        $scope.studenthomeworkplayschooldata.homeworkcontent="";
        // $scope.studenthomeworkplayschooldata.instituteid="";
    }


});