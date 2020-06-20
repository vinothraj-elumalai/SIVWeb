sivwebapp.controller('studentPersonalInformationEditPlaySchoolCtrl', function($scope, $http, $window, hosturl, constantService, Auth) {

    clearFields();
    $scope.userdata = Auth.isLoggedIn();
    $scope.studentpersonalinformationeditplayschooldata = {};
     $scope.studentpersonalinformationsearch = {};
    $scope.studentpersonalinformationeditplayschooldata.instituteid = $scope.userdata.instituteid;
    $scope.studentpersonalinformationsearch.instituteid = $scope.userdata.instituteid;
    $scope.studentpersonalinformationPlaySchoolSubmit = function(){
        var playschlStudPersInfEditObj = $scope.studentpersonalinformationeditplayschooldata;

        if(playschlStudPersInfEditObj != undefined && playschlStudPersInfEditObj != null )
        {
            if(validateStudentPersonalInformation(playschlStudPersInfEditObj))
            {
                $http({
                url: hosturl+"/api/v1/playschoolstudentpersonalinformation",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentpersonalinformationeditplayschooldata)
                }).then(function(success) {
                alert('Record Modified');
                $scope.studentpersonalinformationeditplayschooldata={};
                $window.scrollTo(0, 0);
                },function (error){
                
                });

            }

        }
        else
        {
            clearFields();
            $scope.showRegisterNumberErr = true;
            $scope.registerNumberErrMsg = "(Please Enter Register Number)";
            
        }  


    }

     $scope.getStudentProfileInfoView = function(){
        $http({
                url: hosturl+"/api/v1/playschoolstudentpersonalinformation/getPlaySchoolStudentProfileInformationDetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentpersonalinformationsearch)
            }).then(function(success) {

                $scope.studentpersonalinformationeditplayschooldata={
                    "registernumber": success.data[1].registernumber,  
                    "candidatename": success.data[1].candidatename, 
                    "dateofbirth": constantService.toDateFormat(success.data[1].dateofbirth),
                    "age": success.data[1].age,
                    "gender": success.data[1].gender,
                    "candfathername": success.data[1].candfathername,
                    "candmothername": success.data[1].candmothername,
                    "presentaddress1": success.data[1].presentaddress1,
                    "presentaddress2": success.data[1].presentaddress2,
                    "presentarea": success.data[1].presentarea,
                    "presentpincode": success.data[1].presentpincode,
                    "presentstate": success.data[1].presentstate,
                    "fathersmobileno": success.data[1].fathersmobileno, 
                    "fathersaltmobno": success.data[1].fathersaltmobno,
                    "mothersmobileno": success.data[1].mothersmobileno,      
                    "mothersaltmobno": success.data[1].mothersaltmobno,
                    "fathersemail": success.data[1].fathersemail,  
                    "mothersemail": success.data[1].mothersemail,  
                    "reference": success.data[1].reference,
                    "fathersoccupation": success.data[1].fathersoccupation,                                                                                                                                                                                             
                    "fathersofficename": success.data[1].fathersofficename,
     
                    "fathersofficeaddress1": success.data[1].fathersofficeaddress1,
                    "fathersofficeaddress2": success.data[1].fathersofficeaddress2,
                    "fathersofficearea": success.data[1].fathersofficearea,
                    "fathersofficepincode": success.data[1].fathersofficepincode,
                    "fathersofficestate": success.data[1].fathersofficestate,
                    "fathersofficephoneno": success.data[1].fathersofficephoneno,
                    
                    "fathersofficealtphoneno": success.data[1].fathersofficealtphoneno,
                    "fathersofficeextensionno": success.data[1].fathersofficeextensionno,
                    "mothersoccupation": success.data[1].mothersoccupation,
                    "mothersofficename": success.data[1].mothersofficename,
                    "mothersofficeaddress1": success.data[1].mothersofficeaddress1,
                    "mothersofficeaddress2": success.data[1].mothersofficeaddress2,
                    "mothersofficearea": success.data[1].mothersofficearea,
                    "mothersofficestate": success.data[1].mothersofficestate,
                    "mothersofficephoneno": success.data[1].mothersofficephoneno,
                    "mothersofficealtphoneno": success.data[1].mothersofficealtphoneno,
                    "mothersofficeextensionno": success.data[1].mothersofficeextensionno,
                    "siblings": success.data[1].siblings,
                    "siblingname": success.data[1].siblingname,
                    "siblingdob": constantService.toDateFormat(success.data[1].siblingdob),
                    "siblingage": success.data[1].siblingage,
                    "medicaldetails": success.data[1].medicaldetails,
                    "allergies": success.data[1].allergies,
                    "fathersdob": constantService.toDateFormat(success.data[1].fathersdob),
                    "mothersdob": constantService.toDateFormat(success.data[1].mothersdob),
                    "parentsweddingdate": constantService.toDateFormat(success.data[1].parentsweddingdate),
                    "religion": success.data[1].religion,
                    "pickuppersonname": success.data[1].pickuppersonname,
                    "pickuppersoncontactno": success.data[1].pickuppersoncontactno,
                    "pickuppersonaltcontactno": success.data[1].pickuppersonaltcontactno,
                    "pickuppersonrelationship": success.data[1].pickuppersonrelationship,
                    "instituteid": success.data[1].instituteid,
                    "transport": success.data[1].transport,
                    "transportstage": success.data[1].transportstage,
                    "academicyear": success.data[1].academicyear,
                    "loginuser": success.data[1].loginuser

                   
                }

            },function (error){
                
            });
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


    function validateStudentPersonalInformation(playschlStudPersInfEditObj )
    {
        try
        {    
             clearFields();

            if(playschlStudPersInfEditObj.registernumber == undefined || playschlStudPersInfEditObj.registernumber ==  null || playschlStudPersInfEditObj.registernumber == '')
             {

                 $scope.showRegisterNumberErr = true;
                 $scope.registerNumberErrMsg = "(Please enter Register Number)";
                 return false;
                    
             }

            if(playschlStudPersInfEditObj.candidatename == undefined || playschlStudPersInfEditObj.candidatename ==  null || playschlStudPersInfEditObj.candidatename == '')
            {
               
                $scope.showcandidateNameErr = true;
                $scope.candidateNameErrMsg = "(Please enter Candidate Name)";
                return false;

            }

            if(playschlStudPersInfEditObj.dateofbirth == undefined || playschlStudPersInfEditObj.dateofbirth ==  null || playschlStudPersInfEditObj.dateofbirth == '')
            {
               
                $scope.showDateofBirthErr = true;
                $scope.dateofbirthErrMsg = "(Please enter Date of Birth)";
                return false;

            }
            else
            {
                var isValidDate=validateDate(playschlStudPersInfEditObj.dateofbirth);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showDateofBirthErr = true;
                    $scope.dateofbirthErrMsg = "(Invalid Date of Birth)";
                    return false;
                }
               
            }

               
            if(playschlStudPersInfEditObj.age == undefined || playschlStudPersInfEditObj.age ==  null || playschlStudPersInfEditObj.age == '')
            {       
                $scope.showAgeErr = true;
                $scope.ageErrMsg = "(Please Enter Age)";
                return false;
            }
            if(playschlStudPersInfEditObj.gender == undefined || playschlStudPersInfEditObj.gender ==  null || playschlStudPersInfEditObj.gender == '')
            {
                $scope.showGenderErr = true;
                $scope.genderErrMsg = "(Please enter Gender )";
                return false;
            }

            if(playschlStudPersInfEditObj.candfathername == undefined || playschlStudPersInfEditObj.candfathername ==  null || playschlStudPersInfEditObj.candfathername == '')
            {
                $scope.showCandidateFatherNameErr = true;
                $scope.candidateFatherNameErrMsg = "(Please enter Candidate Father Name)";
                return false;
            }

            if(playschlStudPersInfEditObj.candmothername == undefined || playschlStudPersInfEditObj.candmothername ==  null || playschlStudPersInfEditObj.candmothername == '')
            {
                $scope.showcandidateMotherNameErr = true;
                $scope.candidateMotherNameErrMsg = "(Please enter Candidate Mother Name)";
                return false;
            }

            if(playschlStudPersInfEditObj.presentaddress1 == undefined || playschlStudPersInfEditObj.presentaddress1 ==  null || playschlStudPersInfEditObj.presentaddress1 == '')
            {
                $scope.showPresentAddress1Err = true;
                $scope.presentaddress1ErrMsg = "(Please Enter Present Address Line1)";
                return false;
            }

            if(playschlStudPersInfEditObj.presentaddress2 == undefined || playschlStudPersInfEditObj.presentaddress2 ==  null || playschlStudPersInfEditObj.presentaddress2 == '')
            {
                $scope.showPresentAddress2Err = true;
                $scope.presentaddress2ErrMsg = "(Please Enter Present Address Line2)";
                return false;
            }
            if(playschlStudPersInfEditObj.presentarea == undefined || playschlStudPersInfEditObj.presentarea ==  null || playschlStudPersInfEditObj.presentarea == '')
            {
                $scope.showPresentareaErr = true;
                $scope.presentareaErrMsg = "(Please enter Present Area)";
                return false;
            }
            if(playschlStudPersInfEditObj.presentpincode == undefined || playschlStudPersInfEditObj.presentpincode ==  null || playschlStudPersInfEditObj.presentpincode == '')
            {
                $scope.showPresentpincodeErr = true;
                $scope.presentpincodeErrMsg = "(Please enter Present Pin Code)";
                return false;
            }
            if(playschlStudPersInfEditObj.fathersmobileno == undefined || playschlStudPersInfEditObj.fathersmobileno ==  null || playschlStudPersInfEditObj.fathersmobileno == '')
            {
                $scope.showFathersMobileNoErr = true;
                $scope.fathersmobilenoErrMsg = "(Please enter Fathers Mobile Number)";
                return false;
            }
            if(playschlStudPersInfEditObj.mothersmobileno == undefined || playschlStudPersInfEditObj.mothersmobileno ==  null || playschlStudPersInfEditObj.mothersmobileno == '')
            {
                $scope.showMothersMobileNoErr = true;
                $scope.mothersmobilenoErrMsg = "(Please enter Mothers Mobile Number)";
                return false;
            }
            if(playschlStudPersInfEditObj.transport == undefined || playschlStudPersInfEditObj.transport ==  null || playschlStudPersInfEditObj.transport == '')
            {
                $scope.showtransportModeErr = true;
                $scope.transportModeErrMsg = "(Please enter Transport Mode)";
                return false;
            }
            if(playschlStudPersInfEditObj.transportstage == undefined || playschlStudPersInfEditObj.transportstage ==  null || playschlStudPersInfEditObj.transportstage == '')
            {
                $scope.showtransportStageErr = true;
                $scope.transportStageErrMsg = "(Please enter Transport Stage)";
                return false;
            }
            if(playschlStudPersInfEditObj.academicyear == undefined || playschlStudPersInfEditObj.academicyear ==  null || playschlStudPersInfEditObj.academicyear == '')
            {
                $scope.showacademicYearErr = true;
                $scope.academicYearErrMsg = "(Please enter Academic Year";
                return false;
            }
            if(playschlStudPersInfEditObj.instituteid == undefined || playschlStudPersInfEditObj.instituteid ==  null || playschlStudPersInfEditObj.instituteid == '')
            {
                $scope.showinstituteIdErr = true;
                $scope.instituteidErrMsg = "(Please enter Institute Id)";
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
        $scope.registerNumberErrMsg='';
        $scope.showRegisterNumberErr=false;

        $scope.candidateNameErrMsg='';
        $scope.showcandidateNameErr=false;

        $scope.dateofbirthErrMsg='';
        $scope.showDateofBirthErr=false;

        $scope.ageErrMsg='';
        $scope.showAgeErr=false;

        $scope.genderErrMsg='';
        $scope.showGenderErr=false;

        $scope.candidateFatherNameErrMsg='';
        $scope.showCandidateFatherNameErr=false;

        $scope.candidateMotherNameErrMsg='';
        $scope.showcandidateMotherNameErr=false;

        $scope.presentaddress1ErrMsg='';
        $scope.showPresentAddress1Err=false;

        $scope.presentaddress2ErrMsg='';
        $scope.showPresentAddress2Err=false;

        $scope.presentareaErrMsg='';
        $scope.showPresentareaErr=false;

        $scope.presentpincodeErrMsg='';
        $scope.showPresentpincodeErr=false;

        $scope.fathersmobilenoErrMsg='';
        $scope.showFathersMobileNoErr=false;

        $scope.mothersmobilenoErrMsg='';
        $scope.showMothersMobileNoErr=false;

        $scope.fathersDobErrMsg='';
        $scope.showFathersDobErr=false;

        $scope.mothersDobErrMsg='';
        $scope.showMothersDobErr=false;

        $scope.parentWeddingDateErrMsg='';
        $scope.showParentWeddingDateErr=false;

        $scope.religionErrMsg='';
        $scope.showreligionErr=false;
 
        $scope.pickupPersonNameErrMsg='';
        $scope.showPickupPersonNameErr=false;

        $scope.pickupPersonContactNoErrMsg='';
        $scope.showpickupPersonContactNoErr=false;

        $scope.pickupPersonRelationshipErrMsg='';
        $scope.showpickupPersonRelationshipErr=false;

        $scope.transportModeErrMsg='';
        $scope.showtransportModeErr=false;

        $scope.transportStageErrMsg='';
        $scope.showtransportStageErr=false;

        $scope.academicYearErrMsg='';
        $scope.showacademicYearErr=false;

        $scope.instituteidErrMsg='';
        $scope.showinstituteIdErr=false;

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

});


