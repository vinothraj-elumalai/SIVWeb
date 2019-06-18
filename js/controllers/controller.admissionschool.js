sivwebapp.controller('admissionSchoolCtrl', function($scope, $http, hosturl, currentHost, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.admissionplayschooldata = {};
    clearFields();

    $scope.applicationData = {};
    // $scope.lastToddlerProgramNumber = {};

    // var program = $scope.admissionplayschooldata.admissionfor;
    // var status = $scope.admissionplayschooldata.admissionstatus;

 //      if ($scope.admissionplayschooldata.admissionfor == 'TODDLER PROGRAM' && $scope.admissionplayschooldata.admissionstatus == 'Admitted')
 //      {
            //fetchlasttoddlerprogramno();
//       }
    $scope.schoolvansetting=function(){
        if($scope.admissionschooldata.transport == "PRIVATE"){
             $scope.admissionschooldata.transportstage = "NO SCHOOL VAN";
             $scope.admissionschooldata.transportfeesmethod = "Not Applicable";
             $scope.admissionschooldata.transportfees = "0";
            // $scope.admissionplayschooldata = {
            //     "transportstage" : "NO SCHOOL VAN",
            //     "transportfeesmethod": "Not Applicable",
            //     "transportfees": 0
            // }
        } else{
            $scope.admissionschooldata.transportstage = "Select Stage";
            $scope.admissionschooldata.transportfeesmethod = "Select Transport Fees Payment Method";
            $scope.admissionschooldata.transportfees = "";
        }
    };

    
    // $scope.lastToddlerProgramNumber = {};
    //  $scope.fetchlasttoddlerprogramno = function() {
    
    //         $scope.idNumber = {
    //             idno: 1
    //         };

    //         $http({
    //                 url: hosturl+"/api/v1/playschoolprogramadmissionnogenerate/getPlaySchoolToddlerAdmissionNo",
    //                 method: "POST",
    //                 headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //                 data: $.param($scope.idNumber)
    //                 }).then(function(success) {
   
    //                     $scope.lastToddlerProgramNumber = success.data;
    //                     // if($scope.lastEnquiryNumber != null && $scope.lastEnquiryNumber.enquiryno != undefined )
    //                     // {
    //                     //    $scope.playschoolapplicationsaledata.applno = 'ENQ'+ $scope.lastEnquiryNumber.enquiryno;
    //                     // }



    //                     if ($scope.admissionplayschooldata.appfor == 'TODDLER PROGRAM' && $scope.admissionplayschooldata.admissionstatus == 'Admitted')
    //                     {
    //                         if($scope.lastToddlerProgramNumber != null && $scope.lastToddlerProgramNumber.todprgno != undefined )
    //                         {
    //                             $scope.admissionplayschooldata.registernumber = '17TOD'+ $scope.lastToddlerProgramNumber.todprgno;
    //                         }
    //                     }

    //                     if ($scope.admissionplayschooldata.appfor == 'PRE-KG' && $scope.admissionplayschooldata.admissionstatus == 'Admitted')
    //                     {
    //                            if($scope.lastToddlerProgramNumber != null && $scope.lastToddlerProgramNumber.prekgprgno != undefined )
    //                         {
    //                             $scope.admissionplayschooldata.registernumber = '17PKG'+ $scope.lastToddlerProgramNumber.prekgprgno;
    //                         }

    //                     }
                            
    //                     if ($scope.admissionplayschooldata.appfor == 'KG1' && $scope.admissionplayschooldata.admissionstatus == 'Admitted')
    //                     {
    //                            if($scope.lastToddlerProgramNumber != null && $scope.lastToddlerProgramNumber.kgoneprgno != undefined )
    //                         {
    //                             $scope.admissionplayschooldata.registernumber = '17KGO'+ $scope.lastToddlerProgramNumber.kgoneprgno;
    //                         }

    //                     }
    //                     if ($scope.admissionplayschooldata.appfor == 'KG2' && $scope.admissionplayschooldata.admissionstatus == 'Admitted')
    //                     {
    //                            if($scope.lastToddlerProgramNumber != null && $scope.lastToddlerProgramNumber.kgtwoprgno != undefined )
    //                         {
    //                             $scope.admissionplayschooldata.registernumber = '17KGT'+ $scope.lastToddlerProgramNumber.kgtwoprgno;
    //                         }

    //                     }
                        
    //                     if (($scope.admissionplayschooldata.appfor == 'KG2' || $scope.admissionplayschooldata.appfor == 'KG1' || $scope.admissionplayschooldata.appfor == 'PRE-KG' || $scope.admissionplayschooldata.appfor == 'TODDLER PROGRAM') && $scope.admissionplayschooldata.admissionstatus == 'Waiting List')
    //                     {
    //                            if($scope.lastToddlerProgramNumber != null && $scope.lastToddlerProgramNumber.waitlistno != undefined )
    //                         {
    //                             $scope.admissionplayschooldata.registernumber = '17WLS'+ $scope.lastToddlerProgramNumber.waitlistno;
    //                         }

    //                     }

    //                 },function (error){
    //                 alert(error);
                
    //                 });        

    // }

    // $scope.autogenerate = function()
    // {
    //    // fetchlasttoddlerprogramno();
        

    // }


    $scope.admissionSchoolSubmit = function(){
        $scope.genregisternumber="";
        console.log($scope.admissionschooldata);
        var schlAdmissionObj = $scope.admissionschooldata;

        if(schlAdmissionObj != undefined && schlAdmissionObj != null )
        {
            if(validateAdmission(schlAdmissionObj))
            {
                try
                 {
                //     $scope.admissionplayschooldata.idno = 1;
                //     $scope.admissionplayschooldata.todprgno = $scope.lastToddlerProgramNumber.todprgno;
                //     $scope.admissionplayschooldata.prekgprgno = $scope.lastToddlerProgramNumber.prekgprgno;
                //     $scope.admissionplayschooldata.kgoneprgno = $scope.lastToddlerProgramNumber.kgoneprgno;
                //     $scope.admissionplayschooldata.kgtwoprgno = $scope.lastToddlerProgramNumber.kgtwoprgno;
                //     $scope.admissionplayschooldata.waitlistno = $scope.lastToddlerProgramNumber.waitlistno;



                //     if($scope.admissionplayschooldata.appfor == 'TODDLER PROGRAM' && $scope.admissionplayschooldata.admissionstatus == 'Admitted')
                //         $scope.admissionplayschooldata.todprgno = $scope.lastToddlerProgramNumber.todprgno+1;
                //     if($scope.admissionplayschooldata.appfor == 'PRE-KG' && $scope.admissionplayschooldata.admissionstatus == 'Admitted')
                //         $scope.admissionplayschooldata.prekgprgno = $scope.lastToddlerProgramNumber.prekgprgno+1;
                //     if($scope.admissionplayschooldata.appfor == 'KG1' && $scope.admissionplayschooldata.admissionstatus == 'Admitted')
                //         $scope.admissionplayschooldata.kgoneprgno = $scope.lastToddlerProgramNumber.kgoneprgno+1;
                //     if($scope.admissionplayschooldata.appfor == 'KG2' && $scope.admissionplayschooldata.admissionstatus == 'Admitted')
                //         $scope.admissionplayschooldata.kgtwoprgno = $scope.lastToddlerProgramNumber.kgtwoprgno+1;
                //     if (($scope.admissionplayschooldata.appfor == 'KG2' || $scope.admissionplayschooldata.appfor == 'KG1' || $scope.admissionplayschooldata.appfor == 'PRE-KG' || $scope.admissionplayschooldata.appfor == 'TODDLER PROGRAM') && $scope.admissionplayschooldata.admissionstatus == 'Waiting List')
                //         $scope.admissionplayschooldata.waitlistno = $scope.lastToddlerProgramNumber.waitlistno+1;   
                
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
                    console.log(ex);
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
        // $scope.admissionplayschoolprint = {};
    }

    $scope.searchAppNo = function(){

         // $scope.feesDetailsRequest = {
         //         applno :$scope.searchAppnoData.applno, 
         //         program:$scope.searchAppnoData.appfor,
         //         academicyear:$scope.searchAppnoData.academicyear
         // };
         $scope.genregisternumber = "";
         $scope.searchAppnoData.instituteid = $scope.userdata.instituteid;
        $http({
                url: hosturl+"/api/v1/playschoolapplicationsale/getApplicationFeesDetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.searchAppnoData)
                //data: $.param($scope.feesDetailsRequest)
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
                // $scope.admissionplayschooldata. = 
                // $scope.admissionplayschooldata.activityfees = ;
                //fetchFeesDetails();
                //$scope.admissionplayschooldata.applno = $scope.applicationData.applno;
            },function (error){
                
            });
    }

    // $scope.searchFeesDetails = function(){
    //     $http({
    //             url: hosturl+"//api/v1/playschoolschoolfeessetting/getPlaySchoolFeesDetail",
    //             method: "POST",
    //             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //             data: $.param($scope.admissionplayschooldata)
    //         }).then(function(success) {
    
    //             $scope.admissionplayschooldata = success.data;

    //             //$scope.admissionplayschooldata.applno = $scope.applicationData.applno;
    //         },function (error){
                
    //         });
    // }

    $scope.activestep = 1;
    $scope.gotostep = function(position){
        $scope.activestep = position;
        if (position == 3)
        {
//fetchFeesDetails();
        }
    }

//     fetchFeesDetails = function()
//     {
//         $scope.feesDetailsRequest = {
//                 program:$scope.admissionplayschooldata.appfor,
//                 academicyear:$scope.admissionplayschooldata.academicyear
//         };


//         $http({
//                 url: hosturl+"/api/v1/playschoolschoolfeessetting/getPlaySchoolFeesDetail",
//                 method: "POST",
//                 headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//                 data: $.param($scope.feesDetailsRequest)
//             }).then(function(success) {

// //                $scope.feesDetailsResponse = success.data;
//                 $scope.admissionplayschooldata = success.data;

//                 // if($scope.feesDetailsResponse != null) // && $scope.feesDetailsResponse.enquiryno != undefined )
//                 // {
//                 //     alert('Fees Details Received');
//                 //     //$scope.playschoolapplicationsaledata.applno = 'ENQ'+ $scope.lastEnquiryNumber.enquiryno;
//                 // }

//                 //$scope.admissionplayschooldata.applno = $scope.applicationData.applno;
//             },function (error){
                
//             });
    

     //}

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

            // if(playschlAdmissionObj.fathersoccupation == undefined || playschlAdmissionObj.fathersoccupation ==  null || playschlAdmissionObj.fathersoccupation == '')
            // {
            //     alert('1');
            //     $scope.showFathersOccupationErr = true;
            //     $scope.fathersOccupationErrMsg = "(Please enter Father Occupation)";
            //     return false;

            // }   
            // if(playschlAdmissionObj.fathersofficename == undefined || playschlAdmissionObj.fathersofficename ==  null || playschlAdmissionObj.fathersofficename == '')
            // {       
            //     $scope.showfathersOfficeNameErr = true;
            //     $scope.fathersOfficeNameErrMsg = "(Please Enter Father Office Name)";
            //     alert('2');
            //     return false;
            // }
            // if(playschlAdmissionObj.fathersofficeaddress1 == undefined || playschlAdmissionObj.fathersofficeaddress1 ==  null || playschlAdmissionObj.fathersofficeaddress1 == '')
            // {
            //     $scope.showfathersOffAdd1Err = true;
            //     $scope.fathersOffAdd1ErrMsg = "(Please enter Father office Address )";
            //     return false;
            // }

            // if(playschlAdmissionObj.fathersofficearea == undefined || playschlAdmissionObj.fathersofficearea ==  null || playschlAdmissionObj.fathersofficearea == '')
            // {
            //     $scope.showfathersOffAreaErr = true;
            //     $scope.fathersOffAreaErrMsg = "(Please enter Father office City)";
            //     return false;
            // }

            // if(playschlAdmissionObj.fathersofficepincode == undefined || playschlAdmissionObj.fathersofficepincode ==  null || playschlAdmissionObj.fathersofficepincode == '')
            // {
            //     $scope.showFathersOffPinCodeErr = true;
            //     $scope.fathersOffPinCodeErrMsg = "(Please enter Fathers Office Pin Code)";
            //     return false;
            // }

            // if(playschlAdmissionObj.fathersofficestate == undefined || playschlAdmissionObj.fathersofficestate ==  null || playschlAdmissionObj.fathersofficestate == '')
            // {
            //     $scope.showFathersOffStateErr = true;
            //     $scope.fathersOffStateErrMsg = "(Please enter Fathers Office Pin Code)";
            //     return false;
            // }




            // if(schlAdmissionObj.religion == undefined || schlAdmissionObj.religion ==  null || schlAdmissionObj.religion == '')
            // {
            //     $scope.showReligionErr = true;
            //     $scope.religionErrMsg = "(Please enter Religion)";
            //     return false;
            // }

            // if(schlAdmissionObj.community == undefined || schlAdmissionObj.community ==  null || schlAdmissionObj.community == '')
            // {
            //     $scope.showPickupPersonNameErr = true;
            //     $scope.pickupPersonNameErrMsg = "(Please enter Community)";
            //     return false;
            // }

            // if(schlAdmissionObj.caste == undefined || schlAdmissionObj.caste ==  null || schlAdmissionObj.caste == '')
            // {
            //     $scope.showPickuppersonContactnoErr = true;
            //     $scope.pickuppersoncontactNoErrMsg = "(Please enter Caste)";
            //     return false;
            // }

            // if(schlAdmissionObj.mothertongue == undefined || schlAdmissionObj.mothertongue ==  null || schlAdmissionObj.mothertongue == '')
            // {
            //     $scope.showPickuppersonrelationshipErr = true;
            //     $scope.pickuppersonrelationshipErrMsg = "(Please enter Mother Tongue)";
            //     return false;
            // }

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

            // if(schlAdmissionObj.instituteregisternumber == undefined || schlAdmissionObj.instituteregisternumber ==  null || schlAdmissionObj.instituteregisternumber == '')
            // {
            //     $scope.showSectionErr = true;
            //     $scope.sectionErrMsg = "(Please enter Institute Admission Number";
            //     return false;
            // }

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

            // if(playschlAdmissionObj.grandtotalfees == undefined || playschlAdmissionObj.grandtotalfees ==  null || playschlAdmissionObj.grandtotalfees == '')
            // {
            //     $scope.showGrandTotalFeesErr = true;
            //     $scope.grandTotalFeesErrMsg = "(Please enter Grand Total of First Installment Fees)";
            //     return false;
            // }
            // if(playschlAdmissionObj.instituteid == undefined || playschlAdmissionObj.instituteid ==  null || playschlAdmissionObj.instituteid == '')
            // {
            //     $scope.ShowInsituteIdErr = true;
            //     $scope.instituteIdMsg = "(Please enter Institute ID)";
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
        $scope.ApplicationNoErrMsg='';
        $scope.showApplicationNoErr=false;

        // $scope.fathersOccupationErrMsg='';
        // $scope.showFathersOccupationErr=false;

        // $scope.fathersOfficeNameErrMsg='';
        // $scope.fathersofficename=false;

        // $scope.fathersOffAdd1ErrMsg='';
        // $scope.showfathersOffAdd1Err=false;

        // $scope.fathersOffAreaErrMsg='';
        // $scope.showfathersOffAreaErr=false;

        // $scope.fathersOffPinCodeErrMsg='';
        // $scope.showFathersOffPinCodeErr=false;

        // $scope.fathersOffStateErrMsg='';
        // $scope.showFathersOffStateErr=false;


        // $scope.religionErrMsg='';
        // $scope.showReligionErr=false;

        // $scope.communityErrMsg='';
        // $scope.showCommunityErr=false;

        // $scope.casteErrMsg='';
        // $scope.showCasteErr=false;

        // $scope.mothertoungueErrMsg='';
        // $scope.showMothertongueErr=false;

        $scope.admissionDateErrMsg='';
        $scope.showAdmissionDateErr=false;

        $scope.admissionStatusErrMsg='';
        $scope.showAdmissionStatusErr=false;

        $scope.admittedIntoErrMsg='';
        $scope.showAdmittedIntoErr=false;

        // $scope.registerNumberErrMsg='';
        // $scope.showRegisterNumberErr=false;

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


});