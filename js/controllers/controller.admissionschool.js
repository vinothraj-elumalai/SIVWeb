sivwebapp.controller('admissionSchoolCtrl', function($scope, $http, hosturl, currentHost, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.admissionplayschooldata = {};
    clearFields();

    $scope.applicationData = {};
    $scope.schoolvansetting=function(){
        if($scope.admissionschooldata.transport == "PRIVATE"){
             $scope.admissionschooldata.transportstage = "NO SCHOOL VAN";
             $scope.admissionschooldata.transportfeesmethod = "Not Applicable";
             $scope.admissionschooldata.transportfees = "0";
        } else{
            $scope.admissionschooldata.transportstage = "Select Stage";
            $scope.admissionschooldata.transportfeesmethod = "Select Transport Fees Payment Method";
            $scope.admissionschooldata.transportfees = "";
        }
    };

    $scope.admissionSchoolSubmit = function(){
        $scope.genregisternumber="";
        var schlAdmissionObj = $scope.admissionschooldata;

        if(schlAdmissionObj != undefined && schlAdmissionObj != null )
        {
            schlAdmissionObj.admissiondate = constantService.toDateFormat(schlAdmissionObj.admissiondate);
            if(validateAdmission(schlAdmissionObj))
            {
                try
                 {
                    $scope.admissionschooldata.loginuser = $scope.userdata.username;
                    $scope.admissionschooldata.instituteid = $scope.userdata.instituteid;
                    $http({
                    url: hosturl+"/api/v1/admissionplayschool",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param($scope.admissionschooldata)
                    }).then(function(success) {
                        alert('Record Saved');
                        $scope.gotostep(1);
                        $scope.admissionschoolprint = $scope.admissionplayschooldata;
                        $scope.admissionschoolprint.instituteName = $scope.userdata.instituteName;
                        $scope.admissionschoolprint.instituteAddress1 = $scope.userdata.instituteAddress1;
                        $scope.admissionschoolprint.instituteAddress2 = $scope.userdata.instituteAddress2;
                        $scope.admissionschoolprint.instituteArea = $scope.userdata.instituteArea;
                        $scope.admissionschoolprint.instituteState = $scope.userdata.instituteState;
                        $scope.admissionschoolprint.institutePincode = $scope.userdata.institutePincode;
                        $scope.admissionschoolprint.instituteContact1 = $scope.userdata.instituteContact1;
                        $scope.admissionschoolprint.instituteContact2 = $scope.userdata.instituteContact2;
                        $scope.admissionschoolprint.instituteEmail1 = $scope.userdata.instituteEmail1;
                        $scope.admissionschoolprint.instituteEmail2 = $scope.userdata.instituteEmail2;
                        $scope.admissionschoolprint.institutelogourl = $scope.userdata.instituteLogo;
                        $scope.admissionschoolprint={};
                       
                        $scope.admissionresult=success.data; 
                    },function (error){
                        alert(error);                
                    });


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
            $scope.showApplicationNoErr = true;
            $scope.ApplicationNoErrMsg = "(Please Enter Application Number)";
            
        }  

    }

    $scope.printApplication = function(){
        $('#printableArea').printThis({
            importCSS: true,
             loadCSS: [currentHost+"css/bootstrap.css",currentHost+"css/font-awesome.css",currentHost+"css/icomoon.css",currentHost+"css/simple-sidebar.css",currentHost+"css/style.css"]
        });
    }

    $scope.searchAppNo = function(){
         $scope.genregisternumber = "";
         $scope.searchAppnoData.instituteid = $scope.userdata.instituteid;
        $http({
                url: hosturl+"/api/v1/playschoolapplicationsale/getApplicationFeesDetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.searchAppnoData)
            }).then(function(success) {
               
                if(success.data == null || success.data == ""){
                    alert("Application not found or UnAuthorized access");
                }else{
                $scope.admissionschooldata={
                    "applno": success.data[0].applno,  
                    "appfor": success.data[0].appfor, 
                    "candfirstname": success.data[0].candfirstname, 
                    "candmiddlename": success.data[0].candmiddlename, 
                    "candlastname": success.data[0].candlastname,
                    "dateofbirth": constantService.toDateFormat(success.data[0].dateofbirth),
                    "age": success.data[0].age,
                    "gender": success.data[0].gender,
                    "candfathername": success.data[0].candfathername,
                    "candmothername": success.data[0].candmothername,
                    "presentaddress1": success.data[0].presentaddress1,
                    "presentaddress2": success.data[0].presentaddress2,
                    "presentarea": success.data[0].presentarea,
                    "presentpincode": success.data[0].presentpincode,
                    "presentstate": success.data[0].presentstate,
                    "fathersmobileno": success.data[0].fathersmobileno, 
                    "fathersaltmobno": success.data[0].fathersaltmobno,
                    "mothersmobileno": success.data[0].mothersmobileno,      
                    "mothersaltmobno": success.data[0].mothersaltmobno,
                    "fathersemail": success.data[0].fathersemail,  
                    "mothersemail": success.data[0].mothersemail,  
                    "reference": success.data[0].reference,
                    "remarks": success.data[0].remarks,                                                                                                                                                                                             
                    "academicyear": success.data[0].academicyear,
     
                    "facilityfees": success.data[1].registrationfees,
                    "facilityfeesduedate":constantService.toDateFormat(success.data[1].installment1duedate),
                    "booksnotebookfees": success.data[1].registrationfees,
                    "booksnotebookfeesduedate":constantService.toDateFormat(success.data[1].installment1duedate),
                    "othersfees": success.data[1].registrationfees,
                    "othersfeesduedate":constantService.toDateFormat(success.data[1].installment1duedate),
                    "tuitionfeesmonthly": success.data[1].registrationfees,
                    "tuitionfeesmonthlyduedate":constantService.toDateFormat(success.data[1].installment1duedate),
                    "tuitionfeestermly": success.data[1].registrationfees,
                    "tuitionfeestermlyduedate":constantService.toDateFormat(success.data[1].installment1duedate),
                    "totalfees": success.data[1].registrationfees                    
                   
                }

                $scope.admissionschooldata.siblingage='0.0';
            }
            },function (error){
                
            });
    }

    $scope.activestep = 1;
    $scope.gotostep = function(position){
        $scope.activestep = position;
        if (position == 3)
        {
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

    function validateAdmission(schlAdmissionObj )
    {
        try
        {    
             clearFields();

            if(schlAdmissionObj.applno == undefined || schlAdmissionObj.applno ==  null || schlAdmissionObj.applno == '')
             {

                 $scope.showApplicationNoErr = true;
                 $scope.ApplicationNoErrMsg = "(Please enter Application Number)";
                 alert('XYS');
                 return false;
                    
             }

            if(schlAdmissionObj.admissiondate == undefined || schlAdmissionObj.admissiondate ==  null || schlAdmissionObj.admissiondate == '')
            {
                $scope.showAdmissionDateErr = true;
                $scope.admissionDateErrMsg = "(Please enter Admission Date)";
                return false;
            }
            else
            {
                 var isValidDate=validateDate(schlAdmissionObj.admissiondate);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showAdmissionDateErr = true;
                    $scope.admissionDateErrMsg = "(Invalid Date)";
                    return false;
                }

            }

            if(schlAdmissionObj.admissionstatus == undefined || schlAdmissionObj.admissionstatus ==  null || schlAdmissionObj.admissionstatus == '')
            {
                $scope.showAdmissionStatusErr = true;
                $scope.admissionStatusErrMsg = "(Please enter Admission Status)";
                return false;
            }

            if(schlAdmissionObj.admittedinto == undefined || schlAdmissionObj.admittedinto ==  null || schlAdmissionObj.admittedinto == '')
            {
                $scope.showAdmissionStatusErr = true;
                $scope.admissionStatusErrMsg = "(Please enter Admission Into)";
                return false;
            }
            

            if(schlAdmissionObj.section == undefined || schlAdmissionObj.section ==  null || schlAdmissionObj.section == '')
            {
                $scope.showSectionErr = true;
                $scope.sectionErrMsg = "(Please enter Section";
                return false;
            }

            if(schlAdmissionObj.transport == undefined || schlAdmissionObj.transport ==  null || schlAdmissionObj.transport == '')
            {
                $scope.showTransportErr = true;
                $scope.transportErrMsg = "(Please enter Transport Mode";
                return false;
            }

            if(schlAdmissionObj.transportstage == undefined || schlAdmissionObj.transportstage ==  null || schlAdmissionObj.transportstage == '')
            {
                $scope.showStageErr = true;
                $scope.stageErrMsg = "(Please enter Stage";
                return false;
            }

            if(schlAdmissionObj.transportfeesmethod == undefined || schlAdmissionObj.transportfeesmethod ==  null || schlAdmissionObj.transportfeesmethod == '')
            {
                $scope.showTransportFeesMethodErr = true;
                $scope.transportfeesmethodErrMsg = "(Please enter Transport Fees Payment Method";
                return false;
            }

            if(schlAdmissionObj.tuitionfeesmethod == undefined || schlAdmissionObj.tuitionfeesmethod ==  null || schlAdmissionObj.tuitionfeesmethod == '')
            {
                $scope.showTuitionFeesMethodErr = true;
                $scope.tuitionfeesmethodErrMsg = "(Please enter Tuition Fees Payment Method";
                return false;
            }

            if(schlAdmissionObj.facilityfees == undefined || schlAdmissionObj.facilityfees ==  null || schlAdmissionObj.facilityfees == '')
            {
                $scope.showFacilityFeesErr = true;
                $scope.facilityFeesErrMsg = "(Please enter Facility Fees)";
                return false;
            }

            if(schlAdmissionObj.facilityfeesduedate == undefined || schlAdmissionObj.facilityfeesduedate ==  null || schlAdmissionObj.facilityfeesduedate == '')
            {
                $scope.showFacilityFeesDueDateErr = true;
                $scope.facilityFeesDueDateErrMsg = "(Please enter Facility Fees Due Date)";
                return false;
            }

            if(schlAdmissionObj.booksnotebookfees == undefined || schlAdmissionObj.booksnotebookfees ==  null || schlAdmissionObj.booksnotebookfees == '')
            {
                $scope.showBookNoteBookFeesErr = true;
                $scope.booknotebookFeesErrMsg = "(Please enter Book and Note Book Fees)";
                return false;
            }

            if(schlAdmissionObj.booksnotebookfeesduedate == undefined || schlAdmissionObj.booksnotebookfeesduedate ==  null || schlAdmissionObj.booksnotebookfeesduedate == '')
            {
                $scope.showBookNoteBookFeesDueDateErr = true;
                $scope.booknotebookFeesDueDateErrMsg = "(Please enter Book Note Book Fees Due Date)";
                return false;
            }


            if(schlAdmissionObj.tuitionfeesmonthly == undefined || schlAdmissionObj.tuitionfeesmonthly ==  null || schlAdmissionObj.tuitionfeesmonthly == '')
            {
                $scope.showTuitionFeesMonthlyErr = true;
                $scope.tuitionfeesmonthlyErrMsg = "(Please enter Tuition Fees Monthly)";
                return false;
            }

            if(schlAdmissionObj.tuitionfeesmonthlyduedate == undefined || schlAdmissionObj.tuitionfeesmonthlyduedate ==  null || schlAdmissionObj.tuitionfeesmonthlyduedate == '')
            {
                $scope.showTuitionFeesMonthlyDueDateErr = true;
                $scope.tuitionfeesmonthlyDueDateErrMsg = "(Please enter Tuition Fees Monthly Due Date)";
                return false;
            }

            if(schlAdmissionObj.tuitionfeestermly == undefined || schlAdmissionObj.tuitionfeestermly ==  null || schlAdmissionObj.tuitionfeestermly == '')
            {
                $scope.showTuitionFeesTermlyErr = true;
                $scope.tuitionfeestermlyErrMsg = "(Please enter Tuition Fees Termly)";
                return false;
            }
      
            if(schlAdmissionObj.tuitionfeestermlyduedate == undefined || schlAdmissionObj.tuitionfeestermlyduedate ==  null || schlAdmissionObj.tuitionfeestermlyduedate == '')
            {
                $scope.showTuitionFeesTermlyDueDateErr = true;
                $scope.tuitionfeestermlyDueDateErrMsg = "(Please enter Tuition Fees Termly Due Date)";
                return false;
            }

           if(schlAdmissionObj.totalfees == undefined || schlAdmissionObj.totalfees ==  null || schlAdmissionObj.totalfees == '')
            {
                $scope.showTotalFeesErr = true;
                $scope.totalFeesErrMsg = "(Please enter Total Fees)";
                return false;
            }
      


            if(schlAdmissionObj.transportfees == undefined || schlAdmissionObj.transportfees ==  null || schlAdmissionObj.transportfees == '')
            {
                $scope.showTransportFeesErr = true;
                $scope.transportFeesErrMsg = "(Please enter Transport Fees)";
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
        $scope.ApplicationNoErrMsg='';
        $scope.showApplicationNoErr=false;

        $scope.admissionDateErrMsg='';
        $scope.showAdmissionDateErr=false;

        $scope.admissionStatusErrMsg='';
        $scope.showAdmissionStatusErr=false;

        $scope.admittedIntoErrMsg='';
        $scope.showAdmittedIntoErr=false;

        $scope.sectionErrMsg='';
        $scope.showSectionErr=false;

        $scope.transportErrMsg='';
        $scope.showTransportErr=false;

        $scope.stageErrMsg='';
        $scope.showStageErr=false;

        $scope.transportfeesmethodErrMsg='';
        $scope.showTransportFeesMethodErr=false;

        $scope.tuitionfeesmethodErrMsg='';
        $scope.showTuitionFeesMethodErr=false;

        $scope.facilityFeesErrMsg='';
        $scope.showFacilityFeesErr=false;

        $scope.facilityFeesDueDateErrMsg='';
        $scope.showFacilityFeesDueDateErr=false;

        $scope.booknotebookFeesErrMsg='';
        $scope.showBookNoteBookFeesErr=false;

        $scope.booknotebookFeesDueDateErrMsg='';
        $scope.showBookNoteBookFeesDueDateErr=false;

        $scope.tuitionfeesmonthlyErrMsg='';
        $scope.showTuitionFeesMonthlyErr=false;

        $scope.tuitionfeesmonthlyDueDateErrMsg='';
        $scope.showTuitionFeesMonthlyDueDateErr=false;

        $scope.tuitionfeestermlyErrMsg='';
        $scope.showTuitionFeesTermlyErr=false;

        $scope.tuitionfeestermlyDueDateErrMsg='';
        $scope.showTuitionFeesTermlyDueDateErr=false;

        $scope.totalFeesErrMsg='';
        $scope.showTotalFeesErr=false;

        $scope.transportFeesErrMsg='';
        $scope.showTransportFeesErr=false;


    }    

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };
    $scope.popup2 = {
        opened: false
    };

    $scope.open3 = function() {
        $scope.popup3.opened = true;
    };
    $scope.popup3 = {
        opened: false
    };

    $scope.open4 = function() {
        $scope.popup4.opened = true;
    };
    $scope.popup4 = {
        opened: false
    };

    $scope.open5 = function() {
        $scope.popup5.opened = true;
    };
    $scope.popup5 = {
        opened: false
    };
    $scope.open6 = function() {
        $scope.popup6.opened = true;
    };
    $scope.popup6 = {
        opened: false
    };

    $scope.open7 = function() {
        $scope.popup7.opened = true;
    };
    $scope.popup7 = {
        opened: false
    };

    $scope.open8 = function() {
        $scope.popup8.opened = true;
    };
    $scope.popup8 = {
        opened: false
    };

    $scope.open9 = function() {
        $scope.popup9.opened = true;
    };
    $scope.popup9 = {
        opened: false
    };

    $scope.open10 = function() {
        $scope.popup10.opened = true;
    };
    $scope.popup10 = {
        opened: false
    };
    $scope.open11 = function() {
        $scope.popup11.opened = true;
    };
    $scope.popup11 = {
        opened: false
    };
});