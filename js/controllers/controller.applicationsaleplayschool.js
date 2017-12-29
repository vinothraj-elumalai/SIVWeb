sivwebapp.controller('playSchoolapplicationSaleCtrl', function($scope, $http, $filter, $window, hosturl) {

    // $scope.showApplnErr = false;
    // $scope.applnNumberErrMsg="";
        // $scope.playschoolapplicationsaledata = {

        //     saledate: ''
        // };

        clearFields();
        $scope.lastEnquiryNumber = {};
        fetchlastenquiryno();
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

                givenDob = $filter('date')(new Date(givenDob), 'yyyy/MM/dd');

                var today = new Date();
                var birthDate = new Date(givenDob);
                var yr = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                var da = today.getDate() - birthDate.getDate();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                if(m<0){
                    m +=12;
                }
                if(da<0){
                    da +=30;
                }

                if($scope.playschoolapplicationsaledata == null || $scope.playschoolapplicationsaledata == undefined)
                {   
                    $scope.playschoolapplicationsaledata = {};
                }
                $scope.childDob = yr + "." + Math.abs(m);
                $scope.playschoolapplicationsaledata.age = yr + "." + Math.abs(m);
                
                //alert(age+" years "+ Math.abs(m) + "months"+ Math.abs(da) + " days");
            }
        }

        function validateDate(dateStr) {
           const regExp = /^(\d\d?)\/(\d\d?)\/(\d{4})$/;
           var matches = dateStr.match(regExp);
           var isValid = matches;
           var maxDate = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
           
           if (matches) {
             const month = parseInt(matches[1]);
             const date = parseInt(matches[2]);
             const year = parseInt(matches[3]);
             
             isValid = month <= 12 && month > 0;
             isValid &= date <= maxDate[month] && date > 0;
             
             const leapYear = (year % 400 == 0)
                || (year % 4 == 0 && year % 100 != 0);
             isValid &= month != 2 || leapYear || date <= 28; 
           }
           
           return isValid
        }

       function fetchlastenquiryno() {
            $scope.idNumber = {
                idno: 1
            };
            $http({
                    url: hosturl+"/api/v1/playschoolapplicaitonnogenerate/getPlaySchoolApplcationNo",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param($scope.idNumber)
                    }).then(function(success) {
                        console.log(success.data);
                        $scope.lastEnquiryNumber = success.data;
                        // if($scope.lastEnquiryNumber != null && $scope.lastEnquiryNumber.enquiryno != undefined )
                        // {
                        //    $scope.playschoolapplicationsaledata.applno = 'ENQ'+ $scope.lastEnquiryNumber.enquiryno;
                        // }
                    },function (error){
                    alert(error);
                
                    });        

       }

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


       $scope.autogenerate = function()
       {
        var category = $scope.playschoolapplicationsaledata.category;
        if (category == 'Enquiry')
        {
            if($scope.lastEnquiryNumber != null && $scope.lastEnquiryNumber.enquiryno != undefined )
            {
                $scope.playschoolapplicationsaledata.applno = 'ENQ'+ $scope.lastEnquiryNumber.enquiryno;
            }


        }

       }

        // $scope.searchAppNo = function(){
        //     $http({
        //         url: hosturl+"/api/v1/playschoolapplicationsale/getPlaySchoolApplcationDetail",
        //         method: "POST",
        //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //         data: $.param($scope.searchAppnoData)
        //     }).then(function(success) {
        //         console.log(success.data);
        //         $scope.playschoolapplicationsaledata = success.data;

        //         //$scope.admissionplayschooldata.applno = $scope.applicationData.applno;
        //     },function (error){
                
        //     });
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
                    $scope.playschoolapplicationsaledata.idno = 1;
                    if($scope.playschoolapplicationsaledata.category == 'Enquiry')
                        $scope.playschoolapplicationsaledata.enquiryno = $scope.lastEnquiryNumber.enquiryno+1;
                    else
                        $scope.playschoolapplicationsaledata.enquiryno = $scope.lastEnquiryNumber.enquiryno;    

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
                    alert(error);
                
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
            $scope.showCategoryErr = true;
            $scope.categoryErrMsg = "(Please Select Category)";
        }  
    }

    function ClearDataFields()
    {
        $scope.playschoolapplicationsaledata.category="Select Category";
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
    }

    function validateApplication(playschlAppObj )
    {
        try
        {    
             clearFields();

            if(playschlAppObj.category == undefined || playschlAppObj.category ==  null || playschlAppObj.category == '' || playschlAppObj.category == 'Select Category')
             {
                $scope.showCategoryErr = true;
                $scope.categoryErrMsg = "(Please Select Category)";
                 return false;
             }

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
                alert('2');
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

            if(playschlAppObj.category == undefined || playschlAppObj.category ==  null || playschlAppObj.category == '')
            {
                $scope.showCategoryErr = true;
                $scope.categoryErrMsg = "(Please Select Category)";
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

        $scope.showCategoryErr = false;
        $scope.categoryErrMsg = '';

    }


});