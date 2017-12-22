sivwebapp.controller('playSchoolapplicationSaleCtrl', function($scope, $http, hosturl) {

    // $scope.showApplnErr = false;
    // $scope.applnNumberErrMsg="";
       clearFields();

       $scope.lastEnquiryNumber = {};

       fetchlastenquiryno();
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

       $scope.autogenerate = function()
       {
        var category = $scope.playschoolapplicationsaledata.category;
        if (category == 'Enquiry')
        {
            if($scope.lastEnquiryNumber != null && $scope.lastEnquiryNumber.enquiryno != undefined )
            {
                $scope.playschoolapplicationsaledata.applno = 'ENQ'+ $scope.lastEnquiryNumber.enquiryno;
            }

            // $scope.idNumber = {
            //     idno: 1
            // };

            // $http({
            //         url: hosturl+"/api/v1/playschoolapplicaitonnogenerate/getPlaySchoolApplcationNo",
            //         method: "POST",
            //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            //         data: $.param($scope.idNumber)
            //         }).then(function(success) {
            //             console.log(success.data);
            //             $scope.lastEnquiryNumber = success.data;
            //             if($scope.lastEnquiryNumber != null && $scope.lastEnquiryNumber.enquiryno != undefined )
            //             {
            //                $scope.playschoolapplicationsaledata.applno = 'ENQ'+ $scope.lastEnquiryNumber.enquiryno;
            //             }
            //         },function (error){
            //         alert(error);
                
            //         });        

        }

       }

        $scope.playSchoolApplicationSaleSubmit = function(){
    	console.log($scope.playschoolapplicationsaledata);
        var playschlAppObj = $scope.playschoolapplicationsaledata;

        if(playschlAppObj != undefined && playschlAppObj != null )
        {

            if(validateApplication(playschlAppObj))
            {
                try
                {
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
                    alert('Record Saved');
                
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
            $scope.showCategoryErr = true;
            $scope.categoryErrMsg = "(Please Select Category)";
            
        }  
    }


    function validateApplication(playschlAppObj )
    {
        try
        {    
             clearFields();

            if(playschlAppObj.applno == undefined || playschlAppObj.applno ==  null || playschlAppObj.applno == '')
             {

                 $scope.showApplnErr = true;
                 $scope.applnNumberErrMsg = "(Please enter Application Number)";
                 alert('XYS');
                 return false;
                    
             }

            if(playschlAppObj.saledate == undefined || playschlAppObj.saledate ==  null || playschlAppObj.saledate == '')
            {
                alert('1');
                $scope.showSaleDateErr = true;
                $scope.saleDateErrMsg = "(Please enter Sale Date)";
                return false;

            }   
        if(playschlAppObj.appfor == undefined || playschlAppObj.appfor ==  null || playschlAppObj.appfor == '')
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

        if(playschlAppObj.age == undefined || playschlAppObj.age ==  null || playschlAppObj.age == '')
        {
            $scope.showCandAgeErr = true;
            $scope.candAgeMsg = "(Please enter Age)";
            return false;
        }
        else
        {
            if(playschlAppObj.age.length > 1 || playschlAppObj.age == '0')
            {
                $scope.showCandAgeErr = true;
                $scope.candAgeMsg = "(Invalid Age)";
                return false;
            }
        }


  
        if(playschlAppObj.gender == undefined || playschlAppObj.gender ==  null || playschlAppObj.gender == '')
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


        if(playschlAppObj.willingtojoin == undefined || playschlAppObj.willingtojoin ==  null || playschlAppObj.willingtojoin == '')
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

        if(playschlAppObj.applicationprice == undefined || playschlAppObj.applicationprice ==  null || playschlAppObj.applicationprice == '')
        {
            $scope.applicationpriceErr = true;
            $scope.applicationpriceMsg = "(Please enter Application Price)";
            return false;
        }

        if(playschlAppObj.applicationpaidmode == undefined || playschlAppObj.applicationpaidmode ==  null || playschlAppObj.applicationpaidmode == '')
        {
            $scope.showapplicationpaidmodeErr = true;
            $scope.applicationpaidmodeMsg = "(Please Select Application Paid Mode)";
            return false;
        }

        if(playschlAppObj.academicyear == undefined || playschlAppObj.academicyear ==  null || playschlAppObj.academicyear == '')
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