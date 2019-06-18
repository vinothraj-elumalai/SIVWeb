sivwebapp.controller('schoolApplicationSaleCtrl', function($scope, $http, $filter, $window, hosturl, Auth, constantService) {

    // $scope.showApplnErr = false;
    // $scope.applnNumberErrMsg="";
        // $scope.playschoolapplicationsaledata = {

        //     saledate: ''
        // };
        $scope.userdata = Auth.isLoggedIn();
        $scope.schoolapplicationsaledata = {};
        $scope.schoolapplicationsaledata.loginuser = $scope.userdata.username;
        $scope.schoolapplicationsaledata.instituteid = $scope.userdata.instituteid;
        $scope.$watch('schoolapplicationsaledata.applicationnumberonly', function(newVal, oldVal) {
            // checkData(newVal, oldVal, scope);
            $scope.schoolapplicationsaledata.applno = $scope.userdata.instituteid+$scope.schoolapplicationsaledata.applicationnumberonly;
        }, false);
        
        clearFields();
        // $scope.lastEnquiryNumber = {};
        // fetchlastenquiryno();
//       FillSaleDate();

        $scope.CalculateAge = function()
        {
            if($scope.schoolapplicationsaledata.dateofbirth != undefined && $scope.schoolapplicationsaledata.dateofbirth !=  null || $scope.schoolapplicationsaledata.dateofbirth != '')
            {
                var givenDob = $scope.schoolapplicationsaledata.dateofbirth;

                var isValidDate=validateDate(givenDob);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showCandDOBErr = true;
                    $scope.candDOBMsg = "(Invalid Date)";

                    $scope.childDob = '';
                    $scope.schoolapplicationsaledata.age ='';
                    return;
                }
                else
                {
                    $scope.showCandDOBErr = false;
                    $scope.candDOBMsg = "";
                }
                // givenDob = $filter('date')(new Date(givenDob), 'dd/MM/yyyy');
                var dobarray = givenDob.split("/");

                // var mdate = "01/08/2015";
                var yearThen = parseInt(dobarray[2]);
                var monthThen = parseInt(dobarray[1]);
                var dayThen = parseInt(dobarray[0]);
                
                var today = new Date();
                var birthday = new Date(yearThen, monthThen-1, dayThen);
                
                var differenceInMilisecond = today.valueOf() - birthday.valueOf();
                
                var year_age = Math.floor(differenceInMilisecond / 31536000000);
                var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
                
                if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
                    alert("Happy B'day!!!");
                }
                
                var month_age = Math.floor(day_age/30);
                
                day_age = day_age % 30;
                
                if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
                    alert("Invalid birthday - Please try again!");
                }
                else {
                    console.log("You are<br/><span id=\"age\">" + year_age + " years " + month_age + " months " + day_age + " days</span> old");
                    $scope.schoolapplicationsaledata.age = year_age+"."+month_age;
                    $scope.childDob =  year_age+"."+month_age;
                }
                // var givenDob = new Date(dobarray[2], dobarray[1] - 1, dobarray[0]);
                // var today = new Date();
                // var birthDate = new Date(givenDob);
                // var yr = today.getFullYear() - birthDate.getFullYear();
                // var m = today.getMonth() - birthDate.getMonth();
                // var da = today.getDate() - birthDate.getDate();
                // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                //     $scope.schoolapplicationsaledata.age--;
                // }
                // if(m<0){
                //     m +=12;
                // }
                // if(da<0){
                //     da +=30;
                // }

                // if($scope.schoolapplicationsaledata == null || $scope.schoolapplicationsaledata == undefined)
                // {   
                //     $scope.schoolapplicationsaledata = {};
                // }
                // $scope.childDob = yr + "." + Math.abs(m);
                // $scope.schoolapplicationsaledata.age = yr + "." + Math.abs(m);
                
                //alert(age+" years "+ Math.abs(m) + "months"+ Math.abs(da) + " days");
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

       // function fetchlastenquiryno() {
       //      $scope.idNumber = {
       //          idno: 1
       //      };
       //      $http({
       //              url: hosturl+"/api/v1/playschoolapplicaitonnogenerate/getPlaySchoolApplcationNo",
       //              method: "POST",
       //              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
       //              data: $.param($scope.idNumber)
       //              }).then(function(success) {
       
       //                  $scope.lastEnquiryNumber = success.data;
       //                  // if($scope.lastEnquiryNumber != null && $scope.lastEnquiryNumber.enquiryno != undefined )
       //                  // {
       //                  //    $scope.playschoolapplicationsaledata.applno = 'ENQ'+ $scope.lastEnquiryNumber.enquiryno;
       //                  // }
       //              },function (error){
       //             // alert(error);
                
       //              });        

       // }

        // function FillSaleDate()
        // {
        //     var currentDate = $filter('date')(new Date(), 'dd/MM/yyyy');
        //     if($scope.playschoolapplicationsaledata == null || $scope.playschoolapplicationsaledata == undefined)
        //     {   
        //         $scope.playschoolapplicationsaledata = {};
        //     }
        //     $scope.playschoolapplicationsaledata.saledate = currentDate;    
        //     $scope.appSaleDate = currentDate;
        // }


       // $scope.autogenerate = function()
       // {
       //  var category = $scope.playschoolapplicationsaledata.category;
       //  if (category == 'Enquiry')
       //  {
       //      if($scope.lastEnquiryNumber != null && $scope.lastEnquiryNumber.enquiryno != undefined )
       //      {
       //          $scope.playschoolapplicationsaledata.applno = 'ENQ'+ $scope.lastEnquiryNumber.enquiryno;
       //      }


       //  }

       // }


        $scope.schoolApplicationSaleSubmit = function(){
    	console.log($scope.schoolapplicationsaledata);
        var schlAppObj = $scope.schoolapplicationsaledata;

        if(schlAppObj != undefined && schlAppObj != null )
        {

            if(validateApplication(schlAppObj))
            {
                //try
               // {
                    // $scope.playschoolapplicationsaledata.idno = 1;
                    // if($scope.playschoolapplicationsaledata.category == 'Enquiry')
                    //     $scope.playschoolapplicationsaledata.enquiryno = $scope.lastEnquiryNumber.enquiryno+1;
                    // else
                    //     $scope.playschoolapplicationsaledata.enquiryno = $scope.lastEnquiryNumber.enquiryno;    

                    $http({
                        url: hosturl+"/api/v1/playschoolapplicationsale",
                        method: "POST",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data: $.param($scope.schoolapplicationsaledata)
                    }).then(function(success) {
                    alert('Record Saved.');
                    ClearDataFields();
                    $window.scrollTo(0, 0);
                    },function (error){
                   // alert(error);
                
                    });        
                //}
                //catch(ex)
                //{
                //    alert(ex);
                //    console.log(ex);
                //}
            }
            else
            {
                alert('Please fill all the fields marked with **');
            }
        } 
        else
        {
            clearFields();
            // $scope.showCategoryErr = true;
            // $scope.categoryErrMsg = "(Please Select Category)";
        }  
    }

    function ClearDataFields()
    {
        // $scope.playschoolapplicationsaledata.category="Select Category";
        $scope.schoolapplicationsaledata.applno="";
        $scope.schoolapplicationsaledata.appfor="Select Application For";
        $scope.schoolapplicationsaledata.candfirstname="";
        $scope.schoolapplicationsaledata.candmiddlename="";
        $scope.schoolapplicationsaledata.candlastname="";
        $scope.schoolapplicationsaledata.dateofbirth="";
        $scope.schoolapplicationsaledata.age="";
        $scope.schoolapplicationsaledata.gender="Select Gender";
        $scope.schoolapplicationsaledata.candfathername="";
        $scope.schoolapplicationsaledata.candmothername="";
        $scope.schoolapplicationsaledata.presentaddress1="";
        $scope.schoolapplicationsaledata.presentaddress2="";
        $scope.schoolapplicationsaledata.presentarea="";
        $scope.schoolapplicationsaledata.presentpincode="";
        $scope.schoolapplicationsaledata.presentstate="TamilNadu";
        $scope.schoolapplicationsaledata.fathersmobileno="";
        $scope.schoolapplicationsaledata.fathersaltmobno="";
        $scope.schoolapplicationsaledata.mothersmobileno="";
        $scope.schoolapplicationsaledata.mothersaltmobno="";
        $scope.schoolapplicationsaledata.fathersemail="";
        $scope.schoolapplicationsaledata.mothersemail="";
        $scope.schoolapplicationsaledata.reference="";
        $scope.schoolapplicationsaledata.willingtojoin="Select Willingness";
        $scope.schoolapplicationsaledata.followupdate="";
        $scope.schoolapplicationsaledata.applicationprice="";
        $scope.schoolapplicationsaledata.applicationpaidmode="Select Paid Mode";
        $scope.schoolapplicationsaledata.remarks="";
        $scope.schoolapplicationsaledata.academicyear="Select Academic Year";
        $scope.schoolapplicationsaledata.institueid="";
    }

    function validateApplication(schlAppObj )
    {
        try
        {    
             clearFields();

            // if(playschlAppObj.category == undefined || playschlAppObj.category ==  null || playschlAppObj.category == '' || playschlAppObj.category == 'Select Category')
            //  {
            //     $scope.showCategoryErr = true;
            //     $scope.categoryErrMsg = "(Please Select Category)";
            //      return false;
            //  }

            if(schlAppObj.applno == undefined || schlAppObj.applno ==  null || schlAppObj.applno == '')
             {

                 $scope.showApplnErr = true;
                 $scope.applnNumberErrMsg = "(Please enter Application Number)";
                 return false;
             }

            if(schlAppObj.saledate == undefined || schlAppObj.saledate ==  null || schlAppObj.saledate == '')
            {
                $scope.showSaleDateErr = true;
                $scope.saleDateErrMsg = "(Please enter Sale Date)";
                return false;
            }   

            if(schlAppObj.appfor == undefined || schlAppObj.appfor ==  null || schlAppObj.appfor == '' || schlAppObj.appfor == 'Select Application For')
            {       
                $scope.showAppForErr = true;
                $scope.saleAppforMsg = "(Please Select Application For)";
                //alert('2');
                return false;
            }
            if(schlAppObj.candfirstname == undefined || schlAppObj.candfirstname ==  null || schlAppObj.candfirstname == '')
            {
                $scope.showCandFirstNameErr = true;
                $scope.candFirstNameMsg = "(Please enter First Name)";
                return false;
            }

            if(schlAppObj.candlastname == undefined || schlAppObj.candlastname ==  null || schlAppObj.candlastname == '')
            {
                $scope.showCandLastNameErr = true;
                $scope.candLastNameMsg = "(Please enter Last Name)";
                return false;
            }

            if(schlAppObj.dateofbirth == undefined || schlAppObj.dateofbirth ==  null || schlAppObj.dateofbirth == '')
            {
                $scope.showCandDOBErr = true;
                $scope.candDOBMsg = "(Please enter Date of Birth)";
                return false;
            }
            else
            {
                 var isValidDate=validateDate(schlAppObj.dateofbirth);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showCandDOBErr = true;
                    $scope.candDOBMsg = "(Invalid Date)";

                    $scope.childDob = '';
                    $scope.schoolapplicationsaledata.age ='';
                    
                    return false;
                }

            }

            if(schlAppObj.age == undefined || schlAppObj.age ==  null || schlAppObj.age == '')
            {
                $scope.showCandAgeErr = true;
                $scope.candAgeMsg = "(Please enter Age)";
                return false;
            }
            else
            {
                if( schlAppObj.age == '0.0')
                {
                    $scope.showCandAgeErr = true;
                    $scope.candAgeMsg = "(Invalid Age)";
                    return false;
                }
            }

            if(schlAppObj.gender == undefined || schlAppObj.gender ==  null || schlAppObj.gender == '' || schlAppObj.gender == 'Select Gender')
            {
                $scope.showGenderErr = true;
                $scope.genderMsg = "(Please Select Gender)";
                return false;
            }

            if(schlAppObj.candfathername == undefined || schlAppObj.candfathername ==  null || schlAppObj.candfathername == '')
            {
                $scope.showCandFathersNameErr = true;
                $scope.candFathersNameMsg = "(Please enter Father Name)";
                return false;
            }

            if(schlAppObj.candmothername == undefined || schlAppObj.candmothername ==  null || schlAppObj.candmothername == '')
            {
                $scope.showCandMothersNameErr = true;
                $scope.candMothersNameMsg = "(Please enter Mother Name)";
                return false;
            }

            if(schlAppObj.presentaddress1 == undefined || schlAppObj.presentaddress1 ==  null || schlAppObj.presentaddress1 == '')
            {
                $scope.showPresentAddr1Err = true;
                $scope.candPresentAddr1Msg = "(Please enter Address Line1)";
                return false;
            }

            if(schlAppObj.presentaddress2 == undefined || schlAppObj.presentaddress2 ==  null || schlAppObj.presentaddress2 == '')
            {
                $scope.showCandPresentAddr2Err = true;
                $scope.candPresentAddr2Msg = "(Please enter Address Line2)";
                return false;
            }

            if(schlAppObj.presentarea == undefined || schlAppObj.presentarea ==  null || schlAppObj.presentarea == '')
            {
                $scope.showPresentAreaErr = true;
                $scope.candPresentAreaMsg = "(Please enter Area)";
                return false;
            }

            if(schlAppObj.presentpincode == undefined || schlAppObj.presentpincode ==  null || schlAppObj.presentpincode == '')
            {
                $scope.showpresentpincodeErr = true;
                $scope.candpresentpincodeMsg = "(Please enter Pincode)";
                return false;
            }
            else
            {
                if(schlAppObj.presentpincode.length < 6 || schlAppObj.presentpincode.length > 6)
                {
                    $scope.showpresentpincodeErr = true;
                    $scope.candpresentpincodeMsg = "(Invalid Pincode)";
                    return false;
                }
            }

            if(schlAppObj.presentstate == undefined || schlAppObj.presentstate ==  null || schlAppObj.presentstate == '')
            {
                $scope.showpresentstateErr = true;
                $scope.presentstateMsg = "(Please Select State)";
                return false;
            }

            if(schlAppObj.fathersmobileno == undefined || schlAppObj.fathersmobileno ==  null || schlAppObj.fathersmobileno == '')
            {
                $scope.showfathersmobnoErr = true;
                $scope.candfathersmobnoMsg = "(Please enter Father Mobile Number)";
                return false;
            }
            else
            {
                if(schlAppObj.fathersmobileno.length != 10 )
                {
                    $scope.showfathersmobnoErr = true;
                    $scope.candfathersmobnoMsg = "(Invalid Mobile Number)";
                    return false;
                }
            }

            if(schlAppObj.fathersaltmobno != undefined && schlAppObj.fathersaltmobno != null && schlAppObj.fathersaltmobno.length != 10 )
                { 
                    $scope.showfathersaltmobnoErr = true;
                    $scope.candfathersaltmobnoMsg = "(Invalid Mobile Number)";
                    return false;
                }


            if(schlAppObj.mothersmobileno == undefined || schlAppObj.mothersmobileno ==  null || schlAppObj.mothersmobileno == '')
            {
                $scope.showmothersmobnoErr = true;
                $scope.candmothersmobnoMsg = "(Please enter Mothers Mobile Number)";
                return false;
            }
            else
            {
                if(schlAppObj.mothersmobileno.length != 10 )
                {
                    $scope.showmothersmobnoErr = true;
                    $scope.candmothersmobnoMsg = "(Invalid Mobile Number)";
                    return false;
                }
            }

            if(schlAppObj.mothersaltmobno != undefined && schlAppObj.mothersaltmobno != null && schlAppObj.mothersaltmobno.length != 10 )
                {
                    $scope.showmothersaltmobnoErr = true;
                    $scope.candmothersaltmobnoMsg = "(Invalid Mobile Number)";
                    return false;
                }


            if(schlAppObj.willingtojoin == undefined || schlAppObj.willingtojoin ==  null || schlAppObj.willingtojoin == '' || schlAppObj.willingtojoin == 'Select Willingness')
            {
                $scope.showwillingtojoinErr = true;
                $scope.willingtojoinMsg = "(Please Select Willing To Join)";
                return false;
            }

            if(schlAppObj.followupdate == undefined || schlAppObj.followupdate ==  null || schlAppObj.followupdate == '')
            {
                $scope.showdatecommittedjoinErr = true;
                $scope.datecommittedjoinMsg = "(Please enter Date Committed to Join)";
                return false;
            }
            else
            {
                var isValidDate=validateDate(schlAppObj.followupdate);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showdatecommittedjoinErr = true;
                    $scope.datecommittedjoinMsg = "(Invalid Committed Date)";
                    return false;
                }
               
            }

            if(schlAppObj.applicationprice == undefined || schlAppObj.applicationprice ==  null || schlAppObj.applicationprice == '')
            {
                $scope.applicationpriceErr = true;
                $scope.applicationpriceMsg = "(Please enter Application Price)";
                return false;
            }

            if(schlAppObj.applicationpaidmode == undefined || schlAppObj.applicationpaidmode ==  null || schlAppObj.applicationpaidmode == '' || schlAppObj.applicationpaidmode == 'Select Paid Mode')
            {
                $scope.showapplicationpaidmodeErr = true;
                $scope.applicationpaidmodeMsg = "(Please Select Application Paid Mode)";
                return false;
            }

            if(schlAppObj.academicyear == undefined || schlAppObj.academicyear ==  null || schlAppObj.academicyear == '' || schlAppObj.academicyear == 'Select Academic Year')
            {
                $scope.academicyearErr = true;
                $scope.academicyearMsg = "(Please Select Academic Year)";
                return false;
            }

            // if(playschlAppObj.category == undefined || playschlAppObj.category ==  null || playschlAppObj.category == '')
            // {
            //     $scope.showCategoryErr = true;
            //     $scope.categoryErrMsg = "(Please Select Category)";
            //     return false;
            // }
            // if(schlAppObj.instituteid == undefined || schlAppObj.instituteid ==  null || schlAppObj.instituteid == '')
            // {
            //     $scope.ShowInsituteIdErr = true;
            //     $scope.instituteIdMsg = "(Please Enter Institute ID)";
            //     return false;
            // }

            }
            catch(ex)
            {
                //alert('Exception in validation '+ ex);
                console.log(ex);
                return false;
            }

        return true;
    }

    function clearFields()
    {
        $scope.applnNumberErrMsg='';
        $scope.showApplnErr=false;

         $scope.saleDateErrMsg='';
         $scope.showSaleDateErr=false;

        $scope.candFirstNameMsg='';
        $scope.showCandFirstNameErr=false;

        $scope.candLastNameMsg='';
        $scope.showCandLastNameErr=false;

        $scope.candDOBMsg ='';
        $scope.showCandDOBErr=false;

        $scope.candAgeMsg='';
        $scope.showCandAgeErr=false;

        $scope.candFathersNameMsg='';
        $scope.showCandFathersNameErr=false;

        $scope.candMothersNameMsg='';
        $scope.showCandMothersNameErr=false;

        $scope.candPresentAddr1Msg='';
        $scope.showPresentAddr1Err=false;

        $scope.candPresentAddr2Msg='';
        $scope.showCandPresentAddr2Err=false;

        $scope.candPresentAreaMsg='';
        $scope.showPresentAreaErr=false;
            
        $scope.showpresentpincodeErr = false;
        $scope.candpresentpincodeMsg = '';

        $scope.showfathersmobnoErr = false;
        $scope.candfathersmobnoMsg = '';

        $scope.showfathersaltmobnoErr = false;
        $scope.candfathersaltmobnoMsg = '';

        $scope.showmothersmobnoErr = false;
        $scope.candmothersmobnoMsg = '';

        $scope.showmothersaltmobnoErr = false;
        $scope.candmothersaltmobnoMsg = '';

        $scope.showdatecommittedjoinErr = false;
        $scope.datecommittedjoinMsg = '';

        $scope.applicationpriceErr = false;
        $scope.applicationpriceMsg = '';

        $scope.academicyearErr = false;
        $scope.academicyearMsg = '';

        $scope.showapplicationpaidmodeErr = false;
        $scope.applicationpaidmodeMsg = '';

        $scope.showwillingtojoinErr = false;
        $scope.willingtojoinMsg = '';

        $scope.showpresentstateErr = false;
        $scope.presentstateMsg = '';

        $scope.showGenderErr = false;
        $scope.genderMsg = '';

        $scope.showAppForErr = false;
        $scope.saleAppforMsg = '';

        // $scope.showCategoryErr = false;
        // $scope.categoryErrMsg = '';

        // $scope.ShowInsituteIdErr = false;
        // $scope.instituteIdMsg = '';

    }


});