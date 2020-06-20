sivwebapp.controller('studentHomeWorkPlaySchoolCtrl', function($scope, $http,$window, hosturl, constantService, Auth) {
    
    clearFields();
    $scope.userdata = Auth.isLoggedIn();
    $scope.getPlaySchoolStudentListData = {};
    $scope.getPlaySchoolStudentListData.instituteid=$scope.userdata.instituteid;
    $scope.getPlaySchoolStudentListData.loginuser = $scope.userdata.username;
    $scope.lastHomeWorkId = {};
    $scope.studenthomeworkplayschooldata = {};
    $scope.studenthomeworkplayschooldata.homeworks = [
        {'category': '', 'homework': ''}
    ]

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

       $scope.addHomeworkRow = function () {
        $scope.valueEmpty = false;
        for(var i=0;i<$scope.studenthomeworkplayschooldata.homeworks.length;i++){
            if($scope.studenthomeworkplayschooldata.homeworks[i].category == '' || $scope.studenthomeworkplayschooldata.homeworks[i].homework == '') {
                $scope.valueEmpty = true;
            }
        }
        if ($scope.valueEmpty) {
            alert('Please enter homework')
        } else {
            $scope.studenthomeworkplayschooldata.homeworks.push({'category': '', 'homework': ''})
        }
       }
       $scope.deleteHomeworkRow = function (index) {
        if ($scope.studenthomeworkplayschooldata.homeworks.length > 1) {
            $scope.studenthomeworkplayschooldata.homeworks.splice(index, 1);
        }
       }


    $scope.studentHomeWorkPlaySchoolSubmit = function(){
        
        $scope.studenthomeworkplayschooldata.instituteid=$scope.userdata.instituteid;
        $scope.studenthomeworkplayschooldata.loginuser = $scope.userdata.username;
        var playschlHomeWorkObj = $scope.studenthomeworkplayschooldata;

        if(playschlHomeWorkObj != undefined && playschlHomeWorkObj != null )
        {
            if(validateAdmission(playschlHomeWorkObj))
            {
                try
                {
                  var p = $.when();
                  $scope.studenthomeworkplayschooldata.homeworks.forEach(function(item, index) {
                    p = p.then(function(){
                      return updateHW(item, index);
                    })
                  })
                    function updateHW(item, index){
                      if(index!=0) {
                         $scope.studenthomeworkplayschooldata.homeworkid='HW'+ $scope.lastHomeWorkId.hwid;
                      }
                        $scope.studenthomeworkplayschooldata.idno = 1;
                        $scope.lastHomeWorkId.hwid = $scope.lastHomeWorkId.hwid + 1;
                        $scope.studenthomeworkplayschooldata.hwid = $scope.lastHomeWorkId.hwid;
                        $scope.studenthomeworkplayschooldata.subjectcategory = $scope.studenthomeworkplayschooldata.homeworks[index].category;
                        $scope.studenthomeworkplayschooldata.homeworkcontent = $scope.studenthomeworkplayschooldata.homeworks[index].homework;
                        return $.ajax({
                        url: hosturl+"/api/v1/studenthomeworkplayschool",
                        method: "POST",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data: $.param($scope.studenthomeworkplayschooldata),
                        success: function (success) {
                          if((index+1)==$scope.studenthomeworkplayschooldata.homeworks.length) {
                            alert('Record Saved');
                            fetchlasthomeworkid();
                            ClearDataFields();
                          }
                        }
                        });
                    }

                }

                catch(ex)
                {
                    alert(ex);
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

            

            $scope.hwEmpty = false;
            for(var i=0;i<playschlHomeWorkObj.homeworks.length;i++){
                if(playschlHomeWorkObj.homeworks[i].category == '' || playschlHomeWorkObj.homeworks[i].homework == '') {
                    $scope.hwEmpty = true;
                }
            }
            if(playschlHomeWorkObj.homeworks == undefined || playschlHomeWorkObj.homeworks ==  null || playschlHomeWorkObj.homeworks.length == 0 || $scope.hwEmpty)
            {
                $scope.showHomeWorkContentErr = true;
                $scope.homeworkContentErrMsg = "(Please enter Home Work Content)";
                return false;
            }


        }
        catch(ex)
        {
            alert('Exception in validation '+ ex);
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

        

        $scope.homeworkContentErrMsg='';
        $scope.showHomeWorkContentErr=false;


    }    

        function ClearDataFields()
    {
        $scope.studenthomeworkplayschooldata.entrydate="";
        $scope.studenthomeworkplayschooldata.entryday="";
        $scope.studenthomeworkplayschooldata.program="Select Program";
        $scope.studenthomeworkplayschooldata.section="Select Section";
        $scope.studenthomeworkplayschooldata.academicyear="Select Academic Year";
        $scope.studenthomeworkplayschooldata.subjectcategory="Select Subject Category";
        $scope.studenthomeworkplayschooldata.homeworks=[{'category': '', 'homework': ''}];
        $scope.studenthomeworkplayschooldata.instituteid="";
    }
    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };

});