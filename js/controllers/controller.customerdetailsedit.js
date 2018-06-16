sivwebapp.controller('customerdetailseditCtrl', function($scope, $http, $window, hosturl, constantService) {

    clearFields();
    //$scope.userdata = Auth.isLoggedIn();
    $scope.customerdetailseditdata = {};
    $scope.customerdetailssearchdata = {};
    //$scope.customerdetailseditdata.instituteid = $scope.userdata.instituteid;
    //$scope.customerdetailssearchdata.instituteid = $scope.userdata.instituteid;
    $scope.customerdetailseditSubmit = function(){
    	console.log($scope.customerdetailseditdata);
        var customerdetailsEditObj = $scope.customerdetailseditdata;

        if(customerdetailsEditObj != undefined && customerdetailsEditObj != null )
        {
            if(validateCustomerInformation(customerdetailsEditObj))
            {
                $http({
                url: hosturl+"/api/v1/customerdetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.customerdetailseditdata)
                }).then(function(success) {
                alert('Record Modified');
                $scope.customerdetailseditdata={};
                $window.scrollTo(0, 0);
                },function (error){
                
                });

            }

        }
        else
        {
            clearFields();
            //$scope.showRegisterNumberErr = true;
            //$scope.registerNumberErrMsg = "(Please Enter Register Number)";
            
        } 
    }
    $scope.getcustomerProfileInfoView = function(){
        $http({
                url: hosturl+"/api/v1/customerdetails/getCustomerDetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.customerdetailssearchdata)
            }).then(function(success) {
                console.log(success.data);
                //$scope.studentpersonalinformationeditplayschooldata=success.data;
                // $scope.studentpersonalinformationeditplayschooldata=success.data[1];
                // $scope.studentpersonalinformationeditplayschooldata.dateofbirth=constantService.todateformat(success.data[1].dateofbirth);

                $scope.customerdetailseditdata={
                    "instituteid": success.data[0].instituteid,  
                    "institutetype": success.data[0].institutetype, 
                    "institutename": success.data[0].institutename,
                    "noofstudents": success.data[0].noofstudents,
                    "priceperstudent": success.data[0].priceperstudent,
                    "totalamount": success.data[0].totalamount,
                    "paymentmethod": success.data[0].paymentmethod,
                    "amountpaid": success.data[0].amountpaid,
                    "balance": success.data[0].balance,
                    "duedate": success.data[0].duedate,
                    "username": success.data[0].username
                    
                   
                }

            },function (error){
                
            }); 
        }


        

        function validateCustomerInformation(customerdetailsEditObj)
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

            if(customerdetailsEditObj.instituteid == undefined || customerdetailsEditObj.instituteid ==  null || customerdetailsEditObj.instituteid == '')
             {

                 $scope.instituteIdErr = true;
                 $scope.instituteIdMsg = "(Please enter Institute id)";
                 return false;
             }

            if(customerdetailsEditObj.institutetype == undefined || customerdetailsEditObj.institutetype ==  null || customerdetailsEditObj.institutetype == '' || customerdetailsEditObj.institutetype == 'Select Institute Type')
            {       
                $scope.institutetypeErr = true;
                $scope.institutetypeMsg = "(Please Select Institute Type)";
                //alert('2');
                return false;
            }
            if(customerdetailsEditObj.institutename == undefined || customerdetailsEditObj.institutename ==  null || customerdetailsEditObj.institutename == '')
            {
                $scope.instituteNameErr = true;
                $scope.instituteNameMsg = "(Please enter Institute Name)";
                return false;
            }

            if(customerdetailsEditObj.noofstudents == undefined || customerdetailsEditObj.noofstudents ==  null || customerdetailsEditObj.noofstudents == '')
            {
                $scope.noofstudentsErr = true;
                $scope.noofstudentsMsg = "(Please Enter the number of students)";
                return false;
            }

            if(customerdetailsEditObj.priceperstudent == undefined || customerdetailsEditObj.priceperstudent ==  null || customerdetailsEditObj.priceperstudent == '')
            {
                $scope.priceperstudentErr = true;
                $scope.priceperstudentMsg = "(Please enter price per student)";
                return false;
            }
            
            if(customerdetailsEditObj.totalamount == undefined || customerdetailsEditObj.totalamount ==  null || customerdetailsEditObj.totalamount == '')
            {
                $scope.totalamtErr = true;
                $scope.totalamtMsg = "(Please Enter total amount)";
                return false;
            }
            
             if(customerdetailsEditObj.paymentmethod == undefined || customerdetailsEditObj.paymentmethod ==  null || customerdetailsEditObj.paymentmethod == '' || customerdetailsEditObj.paymentmethod == 'Select Payment Method')
            {       
                $scope.paymentMethodErr = true;
                $scope.paymentMethodMsg = "(Please Select Payment Method)";
                //alert('2');
                return false;
            }
            if(customerdetailsEditObj.amountpaid == undefined || customerdetailsEditObj.amountpaid ==  null || customerdetailsEditObj.amountpaid == '')
            {
                $scope.amountPaidErr = true;
                $scope.amountPaidMsg = "(Please enter amount paid)";
                return false;
            }

            if(customerdetailsEditObj.balance == undefined || customerdetailsEditObj.balance ==  null || customerdetailsEditObj.balance == '')
            {
                $scope.balanceErr = true;
                $scope.balanceMsg = "(Please enter Balance amount)";
                return false;
            }

            if(customerdetailsEditObj.duedate == undefined || customerdetailsEditObj.duedate ==  null || customerdetailsEditObj.duedate == '')
            {
                $scope.dueDateErr = true;
                $scope.dueDateMsg = "(Please enter due date)";
                return false;
            }

            if(customerdetailsEditObj.username == undefined || customerdetailsEditObj.username ==  null || customerdetailsEditObj.username == '')
            {
                $scope.usernameErr = true;
                $scope.usernameMsg = "(Please enter Username)";
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
        $scope.instituteIdMsg='';
        $scope.instituteIdErr=false;

        $scope.institutetypeMsg='';
        $scope.institutetypeErr=false;

        $scope.instituteNameMsg='';
        $scope.instituteNameErr=false;

        $scope.noofstudentsMsg='';
        $scope.noofstudentsErr=false;

        $scope.priceperstudentMsg ='';
        $scope.priceperstudentErr=false;

        $scope.totalamtMsg='';
        $scope.totalamtErr=false;

        $scope.amountPaidMsg='';
        $scope.amountPaidErr=false;

        $scope.paymentMethodMsg='';
        $scope.paymentMethodErr=false;

        $scope.balanceMsg='';
        $scope.balanceErr=false;

        $scope.dueDateMsg='';
        $scope.dueDateErr=false;

        $scope.usernameMsg='';
        $scope.usernameErr=false;
       
    }
    function ClearDataFields()
    {
        // $scope.playschoolapplicationsaledata.category="Select Category";
        $scope.customerdetailseditdata.instituteid="";
        $scope.customerdetailseditdata.institutetype="Select Institute Type";
        $scope.customerdetailseditdata.institutename="";
        $scope.customerdetailseditdata.noofstudents="";
        $scope.customerdetailseditdata.priceperstudent="";
        $scope.customerdetailseditdata.totalamount="";
        $scope.customerdetailseditdata.paymentmethod="Select Payment Method";
        $scope.customerdetailseditdata.amountpaid="";
        $scope.customerdetailseditdata.balance="";
        $scope.customerdetailseditdata.duedate="";
        $scope.customerdetailseditdata.username="";
    }
});

    