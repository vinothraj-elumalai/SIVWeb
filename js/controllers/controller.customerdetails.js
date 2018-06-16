sivwebapp.controller('customerdetailsCtrl', function($scope, $http, hosturl,Auth,$window) {
    $scope.userdata = Auth.isLoggedIn();
        $scope.playschoolapplicationsaledata = {};
        $scope.playschoolapplicationsaledata.loginuser = $scope.userdata.username;
        $scope.playschoolapplicationsaledata.instituteid = $scope.userdata.instituteid;

    $scope.customerdetailsSubmit = function(){
    	console.log($scope.customerdetailsdata);
        var custdetailsObj = $scope.customerdetailsdata;

        if(custdetailsObj != undefined && custdetailsObj != null)
        {
            if(validateApplication(custdetailsObj))
            {


        $http({ 
                url: hosturl+"/api/v1/customerdetails",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.customerdetailsdata)
            }).then(function(success) {
                alert('Record Saved.');
                ClearDataFields();
                $window.scrollTo(0, 0);
            },function (error){
            	
   			});
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

     
    }
    function validateApplication(custdetailsObj)
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

            if(custdetailsObj.instituteid == undefined || custdetailsObj.instituteid ==  null || custdetailsObj.instituteid == '')
             {

                 $scope.instituteIdErr = true;
                 $scope.instituteIdMsg = "(Please enter Institute id)";
                 return false;
             }

            if(custdetailsObj.institutetype == undefined || custdetailsObj.institutetype ==  null || custdetailsObj.institutetype == '' || custdetailsObj.institutetype == 'Select Institute Type')
            {       
                $scope.institutetypeErr = true;
                $scope.institutetypeMsg = "(Please Select Institute Type)";
                //alert('2');
                return false;
            }
            if(custdetailsObj.institutename == undefined || custdetailsObj.institutename ==  null || custdetailsObj.institutename == '')
            {
                $scope.instituteNameErr = true;
                $scope.instituteNameMsg = "(Please enter Institute Name)";
                return false;
            }

            if(custdetailsObj.noofstudents == undefined || custdetailsObj.noofstudents ==  null || custdetailsObj.noofstudents == '')
            {
                $scope.noofstudentsErr = true;
                $scope.noofstudentsMsg = "(Please Enter the number of students)";
                return false;
            }

            if(custdetailsObj.priceperstudent == undefined || custdetailsObj.priceperstudent ==  null || custdetailsObj.priceperstudent == '')
            {
                $scope.priceperstudentErr = true;
                $scope.priceperstudentMsg = "(Please enter price per student)";
                return false;
            }
            
            if(custdetailsObj.totalamount == undefined || custdetailsObj.totalamount ==  null || custdetailsObj.totalamount == '')
            {
                $scope.totalamtErr = true;
                $scope.totalamtMsg = "(Please Enter total amount)";
                return false;
            }
            
             if(custdetailsObj.paymentmethod == undefined || custdetailsObj.paymentmethod ==  null || custdetailsObj.paymentmethod == '' || custdetailsObj.paymentmethod == 'Select Payment Method')
            {       
                $scope.paymentMethodErr = true;
                $scope.paymentMethodMsg = "(Please Select Payment Method)";
                //alert('2');
                return false;
            }
            if(custdetailsObj.amountpaid == undefined || custdetailsObj.amountpaid ==  null || custdetailsObj.amountpaid == '')
            {
                $scope.amountPaidErr = true;
                $scope.amountPaidMsg = "(Please enter amount paid)";
                return false;
            }

            if(custdetailsObj.balance == undefined || custdetailsObj.balance ==  null || custdetailsObj.balance == '')
            {
                $scope.balanceErr = true;
                $scope.balanceMsg = "(Please enter Balance amount)";
                return false;
            }

            if(custdetailsObj.duedate == undefined || custdetailsObj.duedate ==  null || custdetailsObj.duedate == '')
            {
                $scope.dueDateErr = true;
                $scope.dueDateMsg = "(Please enter due date)";
                return false;
            }

            if(custdetailsObj.username == undefined || custdetailsObj.username ==  null || custdetailsObj.username == '')
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
        $scope.customerdetailsdata.instituteid="";
        $scope.customerdetailsdata.institutetype="Select Institute Type";
        $scope.customerdetailsdata.institutename="";
        $scope.customerdetailsdata.noofstudents="";
        $scope.customerdetailsdata.priceperstudent="";
        $scope.customerdetailsdata.totalamount="";
        $scope.customerdetailsdata.paymentmethod="Select Payment Method";
        $scope.customerdetailsdata.amountpaid="";
        $scope.customerdetailsdata.balance="";
        $scope.customerdetailsdata.duedate="";
        $scope.customerdetailsdata.username="";
    }



});