sivwebapp.controller('schoolFeesSettingPlaySchoolCtrl', function($scope, $http, hosturl) {


    $scope.playschoolFeesSettingSubmit = function(){
    	console.log($scope.playschoolfeessettingdata);
        var playschlschlfeessetObj = $scope.playschoolfeessettingdata;

        if(playschlschlfeessetObj != undefined && playschlschlfeessetObj != null )
            {
                if(validateApplication(playschlschlfeessetObj))
                {
                try
                {
                    $http({
                    url: hosturl+"/api/v1/playschoolschoolfeessetting",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param($scope.playschoolfeessettingdata)
                    }).then(function(success) {
                    alert('Record Saved.');
                    ClearDataFields();
                        
                
                    },function (error){
                
                    });

                }
                catch(ex)
                {
                    alert(ex);
                    console.log(ex);
                }
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
        $scope.playschoolfeessettingdata.feessettingdate="";
        $scope.playschoolfeessettingdata.program="Select Program Name";
        $scope.playschoolfeessettingdata.academicyear="Select Academic Year";
        $scope.playschoolfeessettingdata.registrationfees="";
        $scope.playschoolfeessettingdata.materialkitfees="";
        $scope.playschoolfeessettingdata.activityfees="";
        $scope.playschoolfeessettingdata.tuitionfees="";
        $scope.playschoolfeessettingdata.installment1fees="";
        $scope.playschoolfeessettingdata.installment1duedate="";
        $scope.playschoolfeessettingdata.installment2fees="";
        $scope.playschoolfeessettingdata.installment2duedate="";
        $scope.playschoolfeessettingdata.totalfees="";
    }


    function validateApplication(playschlschlfeessetObj )
    {
        try
        {    
             clearFields();

            if(playschlschlfeessetObj.feessettingdate == undefined || playschlschlfeessetObj.feessettingdate ==  null || playschlschlfeessetObj.feessettingdate == '' || playschlschlfeessetObj.category == 'Select Category')
             {
                $scope.showFeesSettingDateErr = true;
                $scope.feesSettingDateErrMsg = "(Please Enter Fees Setting Date)";
                 return false;
             }

            if(playschlschlfeessetObj.program == undefined || playschlschlfeessetObj.program ==  null || playschlschlfeessetObj.program == 'Select Program Name' || playschlschlfeessetObj.program == '')
             {

                 $scope.showprogramErr = true;
                 $scope.programErrMsg = "(Please enter Program)";
                 return false;
             }

            if(playschlschlfeessetObj.academicyear == undefined || playschlschlfeessetObj.academicyear ==  null || playschlschlfeessetObj.academicyear == 'Select Academic Year' || playschlschlfeessetObj.academicyear == '')
            {
                $scope.showAcademicYearErr = true;
                $scope.academicYearErrMsg = "(Please enter Academic Year)";
                return false;
            }   

            if(playschlschlfeessetObj.registrationfees == undefined || playschlschlfeessetObj.registrationfees ==  null || playschlschlfeessetObj.registrationfees == '')
            {       
                $scope.showRegistrationFeesErr = true;
                $scope.regisrationFeesErrMsg = "(Please Enter Registration Fees)";
                //alert('2');
                return false;
            }
            if(playschlschlfeessetObj.materialkitfees == undefined || playschlschlfeessetObj.materialkitfees ==  null || playschlschlfeessetObj.materialkitfees == '')
            {
                $scope.showMaterialKitFeesErr = true;
                $scope.materialKitFeesErrMsg = "(Please enter Material Kit Fees)";
                return false;
            }

            if(playschlschlfeessetObj.activityfees == undefined || playschlschlfeessetObj.activityfees ==  null || playschlschlfeessetObj.activityfees == '')
            {
                $scope.showActivityFeesErr = true;
                $scope.activityFeesErrMsg = "(Please enter Activity Fees)";
                return false;
            }

            if(playschlschlfeessetObj.tuitionfees == undefined || playschlschlfeessetObj.tuitionfees ==  null || playschlschlfeessetObj.tuitionfees == '')
            {
                $scope.showTuitionFeesErr = true;
                $scope.tuitionFeesErrMsg = "(Please enter Tuition Fees)";
                return false;
            }

            if(playschlschlfeessetObj.installment1fees == undefined || playschlschlfeessetObj.installment1fees ==  null || playschlschlfeessetObj.installment1fees == '')
            {
                $scope.showFirstInstallmentfeesErr = true;
                $scope.firstInstallmentfeesErrMsg = "(Please Installment1 Fees)";
                return false;
            }

            if(playschlschlfeessetObj.installment1duedate == undefined || playschlschlfeessetObj.installment1duedate ==  null || playschlschlfeessetObj.installment1duedate == '')
            {
                $scope.showInstallment1DueDateErr = true;
                $scope.installment1DueDateErrMsg = "(Please enter Installment1 Due Date)";
                return false;
            }

            if(playschlschlfeessetObj.installment2fees == undefined || playschlschlfeessetObj.installment2fees ==  null || playschlschlfeessetObj.installment2fees == '')
            {
                $scope.showInstallment2FeesErr = true;
                $scope.installment2FeesErrMsg = "(Please enter Installment2 Fees)";
                return false;
            }

            if(playschlschlfeessetObj.installment2duedate == undefined || playschlschlfeessetObj.installment2duedate ==  null || playschlschlfeessetObj.installment2duedate == '')
            {
                $scope.showInstallment2DueDateErr = true;
                $scope.installment2DueDateErrMsg = "(Please enter Installment2 Due Date)";
                return false;
            }

            if(playschlschlfeessetObj.totalfees == undefined || playschlschlfeessetObj.totalfees ==  null || playschlschlfeessetObj.totalfees == '')
            {
                $scope.showGrandTotalErr = true;
                $scope.grandTotalErrMsg = "(Please enter Total Fees)";
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
        $scope.feesSettingDateErrMsg='';
        $scope.showFeesSettingDateErr=false;

         $scope.programErrMsg='';
         $scope.showprogramErr=false;

        $scope.academicYearErrMsg='';
        $scope.showAcademicYearErr=false;

        $scope.regisrationFeesErrMsg='';
        $scope.showRegistrationFeesErr=false;

        $scope.materialKitFeesErrMsg ='';
        $scope.showMaterialKitFeesErr=false;

        $scope.activityFeesErrMsg='';
        $scope.showActivityFeesErr=false;

        $scope.tuitionFeesErrMsg='';
        $scope.showTuitionFeesErr=false;

        $scope.firstInstallmentfeesErrMsg='';
        $scope.showFirstInstallmentfeesErr=false;

        $scope.installment1DueDateErrMsg='';
        $scope.showInstallment1DueDateErr=false;

        $scope.installment2FeesErrMsg='';
        $scope.showInstallment2FeesErr=false;

        $scope.installment2DueDateErrMsg='';
        $scope.showInstallment2DueDateErr=false;
            
        $scope.grandTotalErrMsg = false;
        $scope.showGrandTotalErr = '';

    }

});