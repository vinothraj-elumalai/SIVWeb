sivwebapp.controller('playSchoolapplicationSaleCtrl', function($scope, $http, $filter, $window, hosturl, Auth, constantService) {

    // $scope.showApplnErr = false;
    // $scope.applnNumberErrMsg="";
        // $scope.playschoolapplicationsaledata = {

        //     saledate: ''
        // };
        $scope.userdata = Auth.isLoggedIn();
        $scope.playschoolapplicationsaledata = {};
        $scope.playschoolapplicationsaledata.loginuser = $scope.userdata.username;
        $scope.playschoolapplicationsaledata.instituteid = $scope.userdata.instituteid;
        $scope.$watch('playschoolapplicationsaledata.applicationnumberonly', function(newVal, oldVal) {
            // checkData(newVal, oldVal, scope);
            $scope.playschoolapplicationsaledata.applno = $scope.userdata.instituteid+$scope.playschoolapplicationsaledata.applicationnumberonly;
        }, false);
        
        clearFields();
        // $scope.lastEnquiryNumber = {};
        // fetchlastenquiryno();
//       FillSaleDate();

        $scope.CalculateAge = function()
        {   
            if($scope.playschoolapplicationsaledata.dateofbirth != undefined && $scope.playschoolapplicationsaledata.dateofbirth !=  null || $scope.playschoolapplicationsaledata.dateofbirth != '')
            {
                var givenDob = $scope.playschoolapplicationsaledata.dateofbirth;

                var isValidDate=validateDate(givenDob);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showCandDOBErr = true;
                    $scope.candDOBMsg = "(Invalid Date)";

                    $scope.childDob = '';
                    $scope.playschoolapplicationsaledata.age ='';
                    return;
                }
                else
                {
                    $scope.showCandDOBErr = false;
                    $scope.candDOBMsg = "";
                }
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
                    $scope.playschoolapplicationsaledata.age = year_age+"."+month_age;
                    $scope.childDob =  year_age+"."+month_age;
                }
                // givenDob = $filter('date')(new Date(givenDob), 'dd/MM/yyyy');
                // var dobarray = givenDob.split("/");
                // var givenDob = new Date(dobarray[1], dobarray[0], dobarray[2]);
                // var today = new Date();
                // var yr = today.getFullYear();
                // var m = today.getMonth()+1;
                // var da = today.getDate();
                // var tod= m+"/"+da+"/"+yr;
                // var birthDate = new Date(givenDob);
                // var todayDate = new Date(tod);
                // var agediff = todayDate - birthDate;
                // console.log("test");
                // console.log(agediff);
                // var differenceInMilisecond = todayDate.valueOf() - birthDate.valueOf();
        
                // var year_age = Math.floor(differenceInMilisecond / 31536000000);
                // var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
                
                // // if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
                // //     alert("Happy B'day!!!");
                // // }
                
                // var month_age = Math.floor(day_age/30);
                
                // day_age = day_age % 30;
                
                // if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
                //     alert("Invalid birthday - Please try again!");
                // }
                // else {
                //     console.log("You are<br/><span id=\"age\">" + year_age + " years " + month_age + " months " + day_age + " days</span> old");
                // }
                // // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                // //     $scope.playschoolapplicationsaledata.age--;
                // // }
                // // if(m<0){
                // //     m +=12;
                // // }
                // // if(da<0){
                // //     da +=30;
                // // }

                // if($scope.playschoolapplicationsaledata == null || $scope.playschoolapplicationsaledata == undefined)
                // {   
                //     $scope.playschoolapplicationsaledata = {};
                // }
                // $scope.childDob = yr + "." + Math.abs(m);
                // $scope.playschoolapplicationsaledata.age = yr + "." + Math.abs(m);
                
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


        $scope.playSchoolApplicationSaleSubmit = function(){
    	console.log($scope.playschoolapplicationsaledata);
        var playschlAppObj = $scope.playschoolapplicationsaledata;

        if(playschlAppObj != undefined && playschlAppObj != null )
        {

            if(validateApplication(playschlAppObj))
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
                        data: $.param($scope.playschoolapplicationsaledata)
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
        $scope.playschoolapplicationsaledata.applno="";
        $scope.playschoolapplicationsaledata.appfor="Select Application For";
        $scope.playschoolapplicationsaledata.candfirstname="";
        $scope.playschoolapplicationsaledata.candmiddlename="";
        $scope.playschoolapplicationsaledata.candlastname="";
        $scope.playschoolapplicationsaledata.dateofbirth="";
        $scope.playschoolapplicationsaledata.age="";
        $scope.playschoolapplicationsaledata.gender="Select Gender";
        $scope.playschoolapplicationsaledata.candfathername="";
        $scope.playschoolapplicationsaledata.candmothername="";
        $scope.playschoolapplicationsaledata.presentaddress1="";
        $scope.playschoolapplicationsaledata.presentaddress2="";
        $scope.playschoolapplicationsaledata.presentarea="";
        $scope.playschoolapplicationsaledata.presentpincode="";
        $scope.playschoolapplicationsaledata.presentstate="TamilNadu";
        $scope.playschoolapplicationsaledata.fathersmobileno="";
        $scope.playschoolapplicationsaledata.fathersaltmobno="";
        $scope.playschoolapplicationsaledata.mothersmobileno="";
        $scope.playschoolapplicationsaledata.mothersaltmobno="";
        $scope.playschoolapplicationsaledata.fathersemail="";
        $scope.playschoolapplicationsaledata.mothersemail="";
        $scope.playschoolapplicationsaledata.reference="";
        $scope.playschoolapplicationsaledata.willingtojoin="Select Willingness";
        $scope.playschoolapplicationsaledata.followupdate="";
        $scope.playschoolapplicationsaledata.applicationprice="";
        $scope.playschoolapplicationsaledata.applicationpaidmode="Select Paid Mode";
        $scope.playschoolapplicationsaledata.remarks="";
        $scope.playschoolapplicationsaledata.academicyear="Select Academic Year";
        $scope.playschoolapplicationsaledata.institueid="";
    }

    function validateApplication(playschlAppObj )
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

            if(playschlAppObj.applno == undefined || playschlAppObj.applno ==  null || playschlAppObj.applno == '')
             {

                 $scope.showApplnErr = true;
                 $scope.applnNumberErrMsg = "(Please enter Application Number)";
                 return false;
             }

            if(playschlAppObj.saledate == undefined || playschlAppObj.saledate ==  null || playschlAppObj.saledate == '')
            {
                $scope.showSaleDateErr = true;
                $scope.saleDateErrMsg = "(Please enter Sale Date)";
                return false;
            }   

            if(playschlAppObj.appfor == undefined || playschlAppObj.appfor ==  null || playschlAppObj.appfor == '' || playschlAppObj.appfor == 'Select Application For')
            {       
                $scope.showAppForErr = true;
                $scope.saleAppforMsg = "(Please Select Application For)";
                //alert('2');
                return false;
            }
            if(playschlAppObj.candfirstname == undefined || playschlAppObj.candfirstname ==  null || playschlAppObj.candfirstname == '')
            {
                $scope.showCandFirstNameErr = true;
                $scope.candFirstNameMsg = "(Please enter First Name)";
                return false;
            }

            if(playschlAppObj.candlastname == undefined || playschlAppObj.candlastname ==  null || playschlAppObj.candlastname == '')
            {
                $scope.showCandLastNameErr = true;
                $scope.candLastNameMsg = "(Please enter Last Name)";
                return false;
            }

            if(playschlAppObj.dateofbirth == undefined || playschlAppObj.dateofbirth ==  null || playschlAppObj.dateofbirth == '')
            {
                $scope.showCandDOBErr = true;
                $scope.candDOBMsg = "(Please enter Date of Birth)";
                return false;
            }
            else
            {
                 var isValidDate=validateDate(playschlAppObj.dateofbirth);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showCandDOBErr = true;
                    $scope.candDOBMsg = "(Invalid Date)";

                    $scope.childDob = '';
                    $scope.playschoolapplicationsaledata.age ='';
                    
                    return false;
                }

            }

            if(playschlAppObj.age == undefined || playschlAppObj.age ==  null || playschlAppObj.age == '')
            {
                $scope.showCandAgeErr = true;
                $scope.candAgeMsg = "(Please enter Age)";
                return false;
            }
            else
            {
                if( playschlAppObj.age == '0.0')
                {
                    $scope.showCandAgeErr = true;
                    $scope.candAgeMsg = "(Invalid Age)";
                    return false;
                }
            }

            if(playschlAppObj.gender == undefined || playschlAppObj.gender ==  null || playschlAppObj.gender == '' || playschlAppObj.gender == 'Select Gender')
            {
                $scope.showGenderErr = true;
                $scope.genderMsg = "(Please Select Gender)";
                return false;
            }

            if(playschlAppObj.candfathername == undefined || playschlAppObj.candfathername ==  null || playschlAppObj.candfathername == '')
            {
                $scope.showCandFathersNameErr = true;
                $scope.candFathersNameMsg = "(Please enter Father Name)";
                return false;
            }

            if(playschlAppObj.candmothername == undefined || playschlAppObj.candmothername ==  null || playschlAppObj.candmothername == '')
            {
                $scope.showCandMothersNameErr = true;
                $scope.candMothersNameMsg = "(Please enter Mother Name)";
                return false;
            }

            if(playschlAppObj.presentaddress1 == undefined || playschlAppObj.presentaddress1 ==  null || playschlAppObj.presentaddress1 == '')
            {
                $scope.showPresentAddr1Err = true;
                $scope.candPresentAddr1Msg = "(Please enter Address Line1)";
                return false;
            }

            if(playschlAppObj.presentaddress2 == undefined || playschlAppObj.presentaddress2 ==  null || playschlAppObj.presentaddress2 == '')
            {
                $scope.showCandPresentAddr2Err = true;
                $scope.candPresentAddr2Msg = "(Please enter Address Line2)";
                return false;
            }

            if(playschlAppObj.presentarea == undefined || playschlAppObj.presentarea ==  null || playschlAppObj.presentarea == '')
            {
                $scope.showPresentAreaErr = true;
                $scope.candPresentAreaMsg = "(Please enter Area)";
                return false;
            }

            if(playschlAppObj.presentpincode == undefined || playschlAppObj.presentpincode ==  null || playschlAppObj.presentpincode == '')
            {
                $scope.showpresentpincodeErr = true;
                $scope.candpresentpincodeMsg = "(Please enter Pincode)";
                return false;
            }
            else
            {
                if(playschlAppObj.presentpincode.length < 6 || playschlAppObj.presentpincode.length > 6)
                {
                    $scope.showpresentpincodeErr = true;
                    $scope.candpresentpincodeMsg = "(Invalid Pincode)";
                    return false;
                }
            }

            if(playschlAppObj.presentstate == undefined || playschlAppObj.presentstate ==  null || playschlAppObj.presentstate == '')
            {
                $scope.showpresentstateErr = true;
                $scope.presentstateMsg = "(Please Select State)";
                return false;
            }

            if(playschlAppObj.fathersmobileno == undefined || playschlAppObj.fathersmobileno ==  null || playschlAppObj.fathersmobileno == '')
            {
                $scope.showfathersmobnoErr = true;
                $scope.candfathersmobnoMsg = "(Please enter Father Mobile Number)";
                return false;
            }
            else
            {
                if(playschlAppObj.fathersmobileno.length != 10 )
                {
                    $scope.showfathersmobnoErr = true;
                    $scope.candfathersmobnoMsg = "(Invalid Mobile Number)";
                    return false;
                }
            }

            if(playschlAppObj.fathersaltmobno != undefined && playschlAppObj.fathersaltmobno != null && playschlAppObj.fathersaltmobno.length != 10 )
                { 
                    $scope.showfathersaltmobnoErr = true;
                    $scope.candfathersaltmobnoMsg = "(Invalid Mobile Number)";
                    return false;
                }


            if(playschlAppObj.mothersmobileno == undefined || playschlAppObj.mothersmobileno ==  null || playschlAppObj.mothersmobileno == '')
            {
                $scope.showmothersmobnoErr = true;
                $scope.candmothersmobnoMsg = "(Please enter Mothers Mobile Number)";
                return false;
            }
            else
            {
                if(playschlAppObj.mothersmobileno.length != 10 )
                {
                    $scope.showmothersmobnoErr = true;
                    $scope.candmothersmobnoMsg = "(Invalid Mobile Number)";
                    return false;
                }
            }

            if(playschlAppObj.mothersaltmobno != undefined && playschlAppObj.mothersaltmobno != null && playschlAppObj.mothersaltmobno.length != 10 )
                {
                    $scope.showmothersaltmobnoErr = true;
                    $scope.candmothersaltmobnoMsg = "(Invalid Mobile Number)";
                    return false;
                }


            if(playschlAppObj.willingtojoin == undefined || playschlAppObj.willingtojoin ==  null || playschlAppObj.willingtojoin == '' || playschlAppObj.willingtojoin == 'Select Willingness')
            {
                $scope.showwillingtojoinErr = true;
                $scope.willingtojoinMsg = "(Please Select Willing To Join)";
                return false;
            }

            if(playschlAppObj.followupdate == undefined || playschlAppObj.followupdate ==  null || playschlAppObj.followupdate == '')
            {
                $scope.showdatecommittedjoinErr = true;
                $scope.datecommittedjoinMsg = "(Please enter Date Committed to Join)";
                return false;
            }
            else
            {
                var isValidDate=validateDate(playschlAppObj.followupdate);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showdatecommittedjoinErr = true;
                    $scope.datecommittedjoinMsg = "(Invalid Committed Date)";
                    return false;
                }
               
            }

            if(playschlAppObj.applicationprice == undefined || playschlAppObj.applicationprice ==  null || playschlAppObj.applicationprice == '')
            {
                $scope.applicationpriceErr = true;
                $scope.applicationpriceMsg = "(Please enter Application Price)";
                return false;
            }

            if(playschlAppObj.applicationpaidmode == undefined || playschlAppObj.applicationpaidmode ==  null || playschlAppObj.applicationpaidmode == '' || playschlAppObj.applicationpaidmode == 'Select Paid Mode')
            {
                $scope.showapplicationpaidmodeErr = true;
                $scope.applicationpaidmodeMsg = "(Please Select Application Paid Mode)";
                return false;
            }

            if(playschlAppObj.academicyear == undefined || playschlAppObj.academicyear ==  null || playschlAppObj.academicyear == '' || playschlAppObj.academicyear == 'Select Academic Year')
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
            if(playschlAppObj.instituteid == undefined || playschlAppObj.instituteid ==  null || playschlAppObj.instituteid == '')
            {
                $scope.ShowInsituteIdErr = true;
                $scope.instituteIdMsg = "(Please Enter Institute ID)";
                return false;
            }

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

        $scope.ShowInsituteIdErr = false;
        $scope.instituteIdMsg = '';

    }


});