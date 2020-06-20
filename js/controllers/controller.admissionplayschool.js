sivwebapp.controller('admissionPlaySchoolCtrl', function($scope, $http, hosturl, currentHost, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.admissionplayschooldata = {};
    clearFields();

    $scope.applicationData = {};
    $scope.schoolvansetting=function(){
        if($scope.admissionplayschooldata.transport == "PRIVATE"){
             $scope.admissionplayschooldata.transportstage = "NO SCHOOL VAN";
             $scope.admissionplayschooldata.transportfeesmethod = "Not Applicable";
             $scope.admissionplayschooldata.transportfees = "0";
        } else{
            $scope.admissionplayschooldata.transportstage = "Select Stage";
            $scope.admissionplayschooldata.transportfeesmethod = "Select Transport Fees Payment Method";
            $scope.admissionplayschooldata.transportfees = "";
        }
    };

    $scope.admissionPlaySchoolSubmit = function(){
        $scope.genregisternumber="";
        var playschlAdmissionObj = $scope.admissionplayschooldata;

        if(playschlAdmissionObj != undefined && playschlAdmissionObj != null )
        {
            if(validateAdmission(playschlAdmissionObj))
            {
                try
                 {
                    $scope.admissionplayschooldata.loginuser = $scope.userdata.username;
                    $scope.admissionplayschooldata.instituteid = $scope.userdata.instituteid;
                    $http({
                    url: hosturl+"/api/v1/admissionplayschool",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param($scope.admissionplayschooldata)
                    }).then(function(success) {
                        alert('Record Saved');
                        $scope.gotostep(1);
                        $scope.admissionplayschoolprint = $scope.admissionplayschooldata;
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
                        $scope.admissionplayschooldata={};
                       
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
                $scope.admissionplayschooldata={
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
     
                    "registrationfees": success.data[1].registrationfees,
                    "materialkitfees": success.data[1].materialkitfees,
                    "activityfees": success.data[1].activityfees,
                    "tuitionfees": success.data[1].tuitionfees,
                    "totalfees": success.data[1].totalfees,
                    "installment1fees": success.data[1].installment1fees,
                    "installment1duedate":constantService.toDateFormat(success.data[1].installment1duedate),
                    "installment2fees": success.data[1].installment2fees,
                    "installment2duedate":constantService.toDateFormat(success.data[1].installment2duedate),
                    "installment3fees": success.data[1].installment3fees,
                    "installment3duedate":constantService.toDateFormat(success.data[1].installment3duedate),
                    "othersfees": success.data[1].othersfees,
                    "othersduedate":constantService.toDateFormat(success.data[1].othersfeesduedate)
                   
                }

                $scope.admissionplayschooldata.siblingage='0.0';
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

    function validateAdmission(playschlAdmissionObj )
    {
        try
        {    
             clearFields();

            if(playschlAdmissionObj.applno == undefined || playschlAdmissionObj.applno ==  null || playschlAdmissionObj.applno == '')
             {

                 $scope.showApplicationNoErr = true;
                 $scope.ApplicationNoErrMsg = "(Please enter Application Number)";
                 alert('XYS');
                 return false;
                    
             }

            if(playschlAdmissionObj.religion == undefined || playschlAdmissionObj.religion ==  null || playschlAdmissionObj.religion == '')
            {
                $scope.showReligionErr = true;
                $scope.religionErrMsg = "(Please enter Religion)";
                return false;
            }

            if(playschlAdmissionObj.pickuppersonname == undefined || playschlAdmissionObj.pickuppersonname ==  null || playschlAdmissionObj.pickuppersonname == '')
            {
                $scope.showPickupPersonNameErr = true;
                $scope.pickupPersonNameErrMsg = "(Please enter Pickup Person Name)";
                return false;
            }

            if(playschlAdmissionObj.pickuppersoncontactno == undefined || playschlAdmissionObj.pickuppersoncontactno ==  null || playschlAdmissionObj.pickuppersoncontactno == '')
            {
                $scope.showPickuppersonContactnoErr = true;
                $scope.pickuppersoncontactNoErrMsg = "(Please enter Pickup Person Contact Number)";
                return false;
            }
            else
            {
                if(playschlAdmissionObj.pickuppersoncontactno.length != 10 )
                {
                    $scope.showPickuppersonContactnoErr = true;
                    $scope.pickuppersoncontactNoErrMsg = "(Invalid Mobile Number)";
                    return false;
                }
            }

            if(playschlAdmissionObj.pickuppersonaltcontactno != undefined && playschlAdmissionObj.pickuppersonaltcontactno != null && playschlAdmissionObj.pickuppersonaltcontactno.length != 10 )
                { 
                    $scope.showPickupPersonAltnoErr = true;
                    $scope.pickupPersonaltnoErrMsg = "(Invalid Mobile Number)";
                    return false;
                }

            if(playschlAdmissionObj.pickuppersonrelationship == undefined || playschlAdmissionObj.pickuppersonrelationship ==  null || playschlAdmissionObj.pickuppersonrelationship == '')
            {
                $scope.showPickuppersonrelationshipErr = true;
                $scope.pickuppersonrelationshipErrMsg = "(Please enter Pickup Person Relationship)";
                return false;
            }

            if(playschlAdmissionObj.admissiondate == undefined || playschlAdmissionObj.admissiondate ==  null || playschlAdmissionObj.admissiondate == '')
            {
                $scope.showAdmissionDateErr = true;
                $scope.admissionDateErrMsg = "(Please enter Admission Date)";
                return false;
            }
            else
            {
                 var isValidDate=validateDate(playschlAdmissionObj.admissiondate);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showAdmissionDateErr = true;
                    $scope.admissionDateErrMsg = "(Invalid Date)";
                    return false;
                }

            }

            if(playschlAdmissionObj.admissionstatus == undefined || playschlAdmissionObj.admissionstatus ==  null || playschlAdmissionObj.admissionstatus == '')
            {
                $scope.showAdmissionStatusErr = true;
                $scope.admissionStatusErrMsg = "(Please enter Admission Status)";
                return false;
            }

            

            if(playschlAdmissionObj.section == undefined || playschlAdmissionObj.section ==  null || playschlAdmissionObj.section == '')
            {
                $scope.showSectionErr = true;
                $scope.sectionErrMsg = "(Please enter Section";
                return false;
            }

            if(playschlAdmissionObj.transport == undefined || playschlAdmissionObj.transport ==  null || playschlAdmissionObj.transport == '')
            {
                $scope.showTransportErr = true;
                $scope.transportErrMsg = "(Please enter Transport Mode";
                return false;
            }

            if(playschlAdmissionObj.transportstage == undefined || playschlAdmissionObj.transportstage ==  null || playschlAdmissionObj.transportstage == '')
            {
                $scope.showStageErr = true;
                $scope.stageErrMsg = "(Please enter Stage";
                return false;
            }

            if(playschlAdmissionObj.transportfeesmethod == undefined || playschlAdmissionObj.transportfeesmethod ==  null || playschlAdmissionObj.transportfeesmethod == '')
            {
                $scope.showTransportFeesMethodErr = true;
                $scope.transportfeesmethodErrMsg = "(Please enter Transport Fees Payment Method";
                return false;
            }

            if(playschlAdmissionObj.registrationfees == undefined || playschlAdmissionObj.registrationfees ==  null || playschlAdmissionObj.registrationfees == '')
            {
                $scope.showRegistrationFeesErr = true;
                $scope.registrationFeesErrMsg = "(Please enter Registration Fees";
                return false;
            }

            if(playschlAdmissionObj.materialkitfees == undefined || playschlAdmissionObj.materialkitfees ==  null || playschlAdmissionObj.materialkitfees == '')
            {
                $scope.showMaterilaKitFeesErr = true;
                $scope.matierialkitFeesErrMsg = "(Please enter Material Kit Fees)";
                return false;
            }

            if(playschlAdmissionObj.activityfees == undefined || playschlAdmissionObj.activityfees ==  null || playschlAdmissionObj.activityfees == '')
            {
                $scope.showActivityFeesErr = true;
                $scope.activityFeesErrMsg = "(Please enter Activity Fees)";
                return false;
            }

            if(playschlAdmissionObj.tuitionfees == undefined || playschlAdmissionObj.tuitionfees ==  null || playschlAdmissionObj.tuitionfees == '')
            {
                $scope.showTuitionFeesErr = true;
                $scope.tuitionFeesErrMsg = "(Please enter Tuituion Fees)";
                return false;
            }

            if(playschlAdmissionObj.totalfees == undefined || playschlAdmissionObj.totalfees ==  null || playschlAdmissionObj.totalfees == '')
            {
                $scope.showTotalFeesErr = true;
                $scope.totalFeesErrMsg = "(Please enter Total Fees)";
                return false;
            }


            if(playschlAdmissionObj.installment1fees == undefined || playschlAdmissionObj.installment1fees ==  null || playschlAdmissionObj.installment1fees == '')
            {
                $scope.showInstallment1FeesErr = true;
                $scope.installment1ErrMsg = "(Please enter Installment 1 Fees)";
                return false;
            }

            if(playschlAdmissionObj.installment1duedate == undefined || playschlAdmissionObj.installment1duedate ==  null || playschlAdmissionObj.installment1duedate == '')
            {
                $scope.showinstallment1DueDateErr = true;
                $scope.installment1DueDateErrMsg = "(Please enter Installment 1 Due Date)";
                return false;
            }

            if(playschlAdmissionObj.installment2fees == undefined || playschlAdmissionObj.installment2fees ==  null || playschlAdmissionObj.installment2fees == '')
            {
                $scope.showInstallment2FeesErr = true;
                $scope.installment2ErrMsg = "(Please enter Installment 2 Fees)";
                return false;
            }
      
            if(playschlAdmissionObj.installment2duedate == undefined || playschlAdmissionObj.installment2duedate ==  null || playschlAdmissionObj.installment2duedate == '')
            {
                $scope.showinstallment2DueDateErr = true;
                $scope.installment2DueDateErrMsg = "(Please enter Installment Due Date)";
                return false;
            }

           if(playschlAdmissionObj.installment3fees == undefined || playschlAdmissionObj.installment3fees ==  null || playschlAdmissionObj.installment3fees == '')
            {
                $scope.showInstallment3FeesErr = true;
                $scope.installment3ErrMsg = "(Please enter Installment 3 Fees)";
                return false;
            }
      
            if(playschlAdmissionObj.installment3duedate == undefined || playschlAdmissionObj.installment3duedate ==  null || playschlAdmissionObj.installment3duedate == '')
            {
                $scope.showinstallment3DueDateErr = true;
                $scope.installment3DueDateErrMsg = "(Please enter Installment 3 Due Date)";
                return false;
            }


            if(playschlAdmissionObj.transportfees == undefined || playschlAdmissionObj.transportfees ==  null || playschlAdmissionObj.transportfees == '')
            {
                $scope.showTransportFeesErr = true;
                $scope.transportFeesErrMsg = "(Please enter Transport Fees1)";
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

        $scope.religionErrMsg='';
        $scope.showReligionErr=false;

        $scope.pickupPersonNameErrMsg='';
        $scope.showPickupPersonNameErr=false;

        $scope.pickuppersoncontactNoErrMsg='';
        $scope.showPickuppersonContactnoErr=false;

        $scope.pickupPersonaltnoErrMsg='';
        $scope.showPickupPersonAltnoErr=false;

        $scope.pickuppersonrelationshipErrMsg='';
        $scope.showPickuppersonrelationshipErr=false;

        $scope.admissionDateErrMsg='';
        $scope.showAdmissionDateErr=false;

        $scope.admissionStatusErrMsg='';
        $scope.showAdmissionStatusErr=false;

        $scope.sectionErrMsg='';
        $scope.showSectionErr=false;

        $scope.transportErrMsg='';
        $scope.showTransportErr=false;

        $scope.stageErrMsg='';
        $scope.showStageErr=false;

        $scope.transportfeesmethodErrMsg='';
        $scope.showTransportFeesMethodErr=false;

        $scope.registrationFeesErrMsg='';
        $scope.showRegistrationFeesErr=false;

        $scope.matierialkitFeesErrMsg='';
        $scope.showMaterilaKitFeesErr=false;

        $scope.activityFeesErrMsg='';
        $scope.showActivityFeesErr=false;

        $scope.tuitionFeesErrMsg='';
        $scope.showTuitionFeesErr=false;

        $scope.totalFeesErrMsg='';
        $scope.showTotalFeesErr=false;

        $scope.installment1ErrMsg='';
        $scope.showInstallment1FeesErr=false;

        $scope.installment1DueDateErrMsg='';
        $scope.showinstallment1DueDateErr=false;

        $scope.installment2ErrMsg='';
        $scope.showInstallment2FeesErr=false;

        $scope.installment2DueDateErrMsg='';
        $scope.showinstallment2DueDateErr=false;

        $scope.installment3ErrMsg='';
        $scope.showInstallment3FeesErr=false;

        $scope.installment3DueDateErrMsg='';
        $scope.showinstallment3DueDateErr=false;

        $scope.transportFeesErrMsg='';
        $scope.showTransportFeesErr=false;

        $scope.grandTotalFeesErrMsg='';
        $scope.showGrandTotalFeesErr=false;

        $scope.instituteIdMsg='';
        $scope.ShowInsituteIdErr=false;

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

});