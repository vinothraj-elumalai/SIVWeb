sivwebapp.controller('feesPaymentPlaySchoolCtrl', function($scope, $http, hosturl) {


    clearFields();

    $scope.lastBillNumber = {};

    //fetchlastbillno();

    function fetchlastbillno() {
            $scope.idNumber = {
                idno: 1
            };

            $http({
                    url: hosturl+"/api/v1/playschoolbillnogenerate/getPlaySchoolBillNo",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param($scope.idNumber)
                    }).then(function(success) {
                        console.log(success.data);
                        $scope.lastBillNumber = success.data;
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
            // if($scope.lastBillNumber != null && $scope.lastBillNumber.lastbillno != undefined )
            // {
            //     $scope.feespaymentplayschooldata.billno = $scope.lastBillNumber.lastbillno;
            // }

        

    }


    $scope.feesPaymentPlaySchoolSubmit = function(){
    	console.log($scope.feespaymentplayschooldata);
        var playschlFeesPayObj = $scope.feespaymentplayschooldata;

        if(playschlFeesPayObj != undefined && playschlFeesPayObj != null )
        {
            if(validateFeesPayment(playschlFeesPayObj) || true)
            {
                try
                {
                    $scope.feespaymentplayschooldata.idno = 1;

                        //$scope.feespaymentplayschooldata.billno = $scope.lastBillNumber.lastbillno+1;
                        $http({
                        url: hosturl+"/api/v1/feespaymentplayschool",
                        method: "POST",
                        headers: {'Content-Type':'application/x-www-form-urlencoded'},
                        data: $.param($scope.feespaymentplayschooldata)
                        }).then(function(success) {
                            console.log (success.data);
                            $scope.generatedBillNo = success.data;
                            if($scope.generatedBillNo != null || $scope.generatedBillNo != undefined) {
                                $scope.successmsg = "form submitted successfully";
                                $scope.successmsgflag = true;
                            }
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
            $scope.showbillDateErr = true;
            $scope.billDateErrMsg = "(Please Enter Bill Date)";
            
        }  

    }

        function validateFeesPayment(playschlFeesPayObj )
    {
        try
        {    
             clearFields();

            if(playschlFeesPayObj.billdate == undefined || playschlFeesPayObj.billdate ==  null || playschlFeesPayObj.billdate == '')
             {

                 $scope.showbillDateErr = true;
                 $scope.billDateErrMsg = "(Please enter Bill Date)";
                 alert('XYS');
                 return false;
                    
             }

            // if(playschlFeesPayObj.billno == undefined || playschlFeesPayObj.billno ==  null || playschlFeesPayObj.billno == '')
            // {
            //     alert('1');
            //     $scope.showBillNoErr = true;
            //     $scope.billNoErrMsg = "(Please enter Billno)";
            //     return false;

            // }   
            if(playschlFeesPayObj.registernumber == undefined || playschlFeesPayObj.registernumber ==  null || playschlFeesPayObj.registernumber == '')
            {       
                $scope.showRegisterNumberErr = true;
                $scope.registerNumberErrMsg = "(Please Enter Register Number)";
                alert('2');
                return false;
            }
            // if(playschlFeesPayObj.name == undefined || playschlFeesPayObj.name ==  null || playschlFeesPayObj.name == '')
            // {
            //     $scope.showCandidateNameErr = true;
            //     $scope.candidateNameErrMsg = "(Please enter Candidate Name )";
            //     return false;
            // }

            if(playschlFeesPayObj.program == undefined || playschlFeesPayObj.program ==  null || playschlFeesPayObj.program == '')
            {
                $scope.showProgramErr = true;
                $scope.programErrMsg = "(Please enter Program)";
                return false;
            }

            if(playschlFeesPayObj.section == undefined || playschlFeesPayObj.section ==  null || playschlFeesPayObj.section == '')
            {
                $scope.showSectionErr = true;
                $scope.sectionErrMsg = "(Please enter Section)";
                return false;
            }

            if(playschlFeesPayObj.academicyear == undefined || playschlFeesPayObj.academicyear ==  null || playschlFeesPayObj.academicyear == '')
            {
                $scope.showAcademicyearErr = true;
                $scope.academicyearErrMsg = "(Please enter Academic Year)";
                return false;
            }

            if(playschlFeesPayObj.schoolfeestitle == undefined || playschlFeesPayObj.schoolfeestitle ==  null || playschlFeesPayObj.schoolfeestitle == '')
            {
                $scope.showSchoolFeesTitleErr = true;
                $scope.schoolFeesTitleErrMsg = "(Please enter Fees Title)";
                return false;
            }

            if(playschlFeesPayObj.materialkitfees == undefined || playschlFeesPayObj.materialkitfees ==  null || playschlFeesPayObj.materialkitfees == '')
            {
                $scope.showMaterilaKitFeesErr = true;
                $scope.matierialkitFeesErrMsg = "(Please enter Material Kit Fees)";
                return false;
            }

            if(playschlFeesPayObj.materialkitfeespaid == undefined || playschlFeesPayObj.materialkitfeespaid ==  null || playschlFeesPayObj.materialkitfeespaid == '')
            {
                $scope.showMaterialKitFeesPaidErr = true;
                $scope.materialkitFeesPaidErrMsg = "(Please enter Material Kit Fees Paid)";
                return false;
            }

            if(playschlFeesPayObj.activityfees == undefined || playschlFeesPayObj.activityfees ==  null || playschlFeesPayObj.activityfees == '')
            {
                $scope.showActivityFeesErr = true;
                $scope.activityFeesMsg = "(Please enter Activity Fees)";
                return false;
            }

            if(playschlFeesPayObj.activityfeespaid == undefined || playschlFeesPayObj.activityfeespaid ==  null || playschlFeesPayObj.activityfeespaid == '')
            {
                $scope.showActivityFeesPaidErr = true;
                $scope.activityFeesPaidErrMsg = "(Please enter Activity Fees Paid)";
                return false;
            }

            if(playschlFeesPayObj.tuitionfees == undefined || playschlFeesPayObj.tuitionfees ==  null || playschlFeesPayObj.tuitionfees == '')
            {
                $scope.showTuitionFeesErr = true;
                $scope.tutionFeesErrMsg = "(Please enter Tuition Fees)";
                return false;
            }


            if(playschlFeesPayObj.tuitionfeespaid == undefined || playschlFeesPayObj.tuitionfeespaid ==  null || playschlFeesPayObj.tuitionfeespaid == '')
            {
                $scope.showTuitionFeesPaidErr = true;
                $scope.tuitionFeesPaidErrMsg = "(Please enter Tuition Fees Paid)";
                return false;
            }

            if(playschlFeesPayObj.totalfees == undefined || playschlFeesPayObj.totalfees ==  null || playschlFeesPayObj.totalfees == '')
            {
                $scope.showTotalFeesErr = true;
                $scope.totalFeesErrMsg = "(Please enter TotalFees)";
                return false;
            }
            if(playschlFeesPayObj.totalfeespaid == undefined || playschlFeesPayObj.totalfeespaid ==  null || playschlFeesPayObj.totalfeespaid == '')
            {
                $scope.showTotalFeesPaidErr = true;
                $scope.totalFeesPaidErrMsg = "(Please enter TotalFees Paid)";
                return false;
            }

            if(playschlFeesPayObj.balancefees == undefined || playschlFeesPayObj.balancefees ==  null || playschlFeesPayObj.balancefees == '')
            {
                $scope.showBalanceFeesErr = true;
                $scope.balanceFeesErrMsg = "(Please enter Balance Fees)";
                return false;
            }

            if(playschlFeesPayObj.duedate == undefined || playschlFeesPayObj.duedate ==  null || playschlFeesPayObj.duedate == '')
            {
                $scope.showDueDateErr = true;
                $scope.dueDateErrMsg = "(Please enter Due Date";
                return false;
            }

            if(playschlFeesPayObj.paymentmethod == undefined || playschlFeesPayObj.paymentmethod ==  null || playschlFeesPayObj.paymentmethod == '')
            {
                $scope.showPaymentMethodErr = true;
                $scope.paymentMethodErrMsg = "(Please enter Payment Method";
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
        $scope.billDateErrMsg='';
        $scope.showbillDateErr=false;

        $scope.billNoErrMsg='';
        $scope.showBillNoErr=false;

        $scope.registerNumberErrMsg='';
        $scope.showRegisterNumberErr=false;

        $scope.candidateNameErrMsg='';
        $scope.showCandidateNameErr=false;

        $scope.programErrMsg='';
        $scope.showProgramErr=false;

        $scope.sectionErrMsg='';
        $scope.showSectionErr=false;

        $scope.academicyearErrMsg='';
        $scope.showAcademicyearErr=false;

        $scope.schoolFeesTitleErrMsg='';
        $scope.showSchoolFeesTitleErr=false;

        $scope.matierialkitFeesErrMsg='';
        $scope.showMaterilaKitFeesErr=false;

        $scope.materialkitFeesPaidErrMsg='';
        $scope.showMaterialKitFeesPaidErr=false;

        $scope.activityFeesMsg='';
        $scope.showActivityFeesErr=false;

        $scope.activityFeesPaidErrMsg='';
        $scope.showActivityFeesPaidErr=false;

        $scope.tutionFeesErrMsg='';
        $scope.showTuitionFeesErr=false;

        $scope.tuitionFeesPaidErrMsg='';
        $scope.showTuitionFeesPaidErr=false;

        $scope.totalFeesErrMsg='';
        $scope.showTotalFeesErr=false;

        $scope.totalFeesPaidErrMsg='';
        $scope.showTotalFeesPaidErr=false;

        $scope.balanceFeesErrMsg='';
        $scope.showBalanceFeesErr=false;

        $scope.dueDateErrMsg='';
        $scope.showDueDateErr=false;

        $scope.paymentMethodErrMsg='';
        $scope.showPaymentMethodErr=false;


    }    

});