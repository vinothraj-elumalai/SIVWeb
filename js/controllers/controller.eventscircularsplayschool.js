sivwebapp.controller('eventsCircularsPlaySchoolCtrl', function($scope, $http,$window, hosturl, constantService, Auth) {

    clearFields();
    $scope.userdata = Auth.isLoggedIn();
    $scope.eventscircularssplayschooldata = {};
    $scope.eventscircularssplayschooldata.instituteid=$scope.userdata.instituteid;
    $scope.eventscircularssplayschooldata.loginuser = $scope.userdata.username;
    $scope.lastEventId = {};

    fetchlasteventid();

       function fetchlasteventid() {
            $scope.idNumber = {
                id: 1
            };

            $http({
                    url: hosturl+"/api/v1/playschooleventidgenerate/getPlaySchoolEventIdNo",
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: $.param($scope.idNumber)
                    }).then(function(success) {
                       
                        $scope.lastEventId = success.data;
                        if($scope.lastEventId != null && $scope.lastEventId.evecirid != undefined )
                        {
                           $scope.eventscircularssplayschooldata = {
                            "eventid": 'EVECIR'+ $scope.lastEventId.evecirid
                           }
                        }
                    },function (error){
                    alert(error);
                    
                
                    });        

       }

       $scope.autogenerate = function()
       {
            if($scope.lastEventId != null && $scope.lastHomeWorkId.evecirid != undefined )
            {
                $scope.eventscircularssplayschooldata.eventid = 'EVECIR'+ $scope.lastEventId.evecirid;
            }


        

       }


    $scope.eventsCircularsPlaySchoolSubmit = function(){
        $scope.eventscircularssplayschooldata.instituteid=$scope.userdata.instituteid;
        $scope.eventscircularssplayschooldata.loginuser = $scope.userdata.username;
        var playschlEventCircularObj = $scope.eventscircularssplayschooldata;

        if(playschlEventCircularObj != undefined && playschlEventCircularObj != null )
        {
            if(validateEventCircular(playschlEventCircularObj))
            {
            $scope.eventscircularssplayschooldata.id = 1;
            $scope.eventscircularssplayschooldata.evecirid = $scope.lastEventId.evecirid+1;
            $http({
                url: hosturl+"/api/v1/eventscircularsplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.eventscircularssplayschooldata)
                }).then(function(success) {

                
            },function (error){
                
            });

            }
            else
            {
                alert('Enter all the fields marked with **');
            }    
        }
        else
        {
            clearFields();
            $scope.showEventIdErr = true;
            $scope.eventIdErrMsg = "(Please Enter Event Id)";

        }

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

    function validateEventCircular(playschlEventCircularObj)
    {
        try
        {    
             clearFields();

            if(playschlEventCircularObj.eventid == undefined || playschlEventCircularObj.eventid ==  null || playschlEventCircularObj.eventid == '')
             {

                 $scope.showEventIdErr = true;
                 $scope.eventIdErrMsg = "(Please enter Eventid Id)";
                 return false;
                    
             }

            if(playschlEventCircularObj.entrydate == undefined || playschlEventCircularObj.entrydate ==  null || playschlEventCircularObj.entrydate == '')
            {
               
                $scope.showEntryDateErr = true;
                $scope.entryDateErrMsg = "(Please enter Entry Date)";
                return false;

            }   
            else
            {
                var isValidDate=validateDate(playschlEventCircularObj.entrydate);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showEntryDateErr = true;
                    $scope.entryDateErrMsg = "(Invalid  Date)";
                    return false;
                }
               
            }


            if(playschlEventCircularObj.eventdate == undefined || playschlEventCircularObj.eventdate ==  null || playschlEventCircularObj.eventdate == '')
            {       
                $scope.showEventDateErr = true;
                $scope.eventDateErrMsg = "(Please Enter Event Date)";
                return false;
            }
            else
            {
                var isValidDate=validateDate(playschlEventCircularObj.eventdate);
                if( isValidDate == null || isValidDate == false) 
                {
                    $scope.showEventDateErr = true;
                    $scope.eventDateErrMsg = "(Invalid  Date)";
                    return false;
                }
               
            }


            if(playschlEventCircularObj.eventday == undefined || playschlEventCircularObj.eventday ==  null || playschlEventCircularObj.eventday == '')
            {       
                $scope.showEventDayErr = true;
                $scope.eventDayErrMsg = "(Please Enter Event Day)";
                return false;
            }

            if(playschlEventCircularObj.program == undefined || playschlEventCircularObj.program ==  null || playschlEventCircularObj.program == '')
            {
                $scope.showProgramErr = true;
                $scope.programErrMsg = "(Please enter Program )";
                return false;
            }

            if(playschlEventCircularObj.section == undefined || playschlEventCircularObj.section ==  null || playschlEventCircularObj.section == '')
            {
                $scope.showSectionErr = true;
                $scope.sectionErrMsg = "(Please enter Section)";
                return false;
            }

            if(playschlEventCircularObj.academicyear == undefined || playschlEventCircularObj.academicyear ==  null || playschlEventCircularObj.academicyear == '')
            {
                $scope.showAcademicYearErr = true;
                $scope.academicYearErrMsg = "(Please enter Academic Year)";
                return false;
            }

            if(playschlEventCircularObj.eventtitle == undefined || playschlEventCircularObj.eventtitle ==  null || playschlEventCircularObj.eventtitle == '')
            {
                $scope.showEventTitleErr = true;
                $scope.eventTitleErrMsg = "(Please enter Event Title)";
                return false;
            }

            if(playschlEventCircularObj.message == undefined || playschlEventCircularObj.message ==  null || playschlEventCircularObj.message == '')
            {
                $scope.showMessageErr = true;
                $scope.messageErrMsg = "(Please enter Event Message)";
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
        $scope.eventIdErrMsg='';
        $scope.showEventIdErr=false;

        $scope.entryDateErrMsg='';
        $scope.showentryDateErr=false;

        $scope.eventDateErrMsg='';
        $scope.showEventDateErr=false;

        $scope.eventDayErrMsg='';
        $scope.showEventDayErr=false;

        $scope.programErrMsg='';
        $scope.showProgramErr=false;

        $scope.sectionErrMsg='';
        $scope.showSectionErr=false;

        $scope.academicYearErrMsg='';
        $scope.showAcademicYearErr=false;

        $scope.eventTitleErrMsg='';
        $scope.showEventTitleErr=false;

        $scope.messageErrMsg='';
        $scope.showMessageErr=false;

    }    

    function ClearDataFields()
    {
        $scope.eventscircularssplayschooldata.entrydate="";
        $scope.eventscircularssplayschooldata.eventdate="";
        $scope.eventscircularssplayschooldata.eventday="";
        $scope.eventscircularssplayschooldata.program="Select Program";
        $scope.eventscircularssplayschooldata.section="Select Section";
        $scope.eventscircularssplayschooldata.academicyear="Select Academic Year";
        $scope.eventscircularssplayschooldata.eventtitle="";
        $scope.eventscircularssplayschooldata.message="";

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
});