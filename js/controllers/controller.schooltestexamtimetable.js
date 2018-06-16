sivwebapp.controller('schoolTestExamTimeTableCtrl', function($scope, $http, hosturl, currentHost, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.getTimeTableData = {};
    $scope.getTimeTableData.loginuser = $scope.userdata.username;
    $scope.getTimeTableData.instituteid = $scope.userdata.instituteid;


    $scope.getSubjectDetailsSubmit = function(){
        console.log($scope.getTimeTableData);
    	$scope.getTimeTableData.eventid = $scope.eventid;
        $http({
                url: hosturl+"/api/v1/schooltestexamtimetable/getschooltestexamtimetable",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getTimeTableData)
            }).then(function(success) {
                console.log(success.data);
                if(success.data.returnmessage == "No Data"){
                    alert("No Data Found");
                }else{
                    $scope.subjectdetails = success.data.subjectdetails;
                }
            },function (error){
            	
   			});
    }

    $scope.submitTimeTable = function(){
        $scope.getTimeTableData.id = 1;
        $scope.getTimeTableData.evecirid = $scope.lastEventId.evecirid+1;
        var ttdata = JSON.stringify($scope.getTimeTableData)
        var subjectdetailstring = JSON.stringify($scope.subjectdetails);
        $scope.timetableentry = {
            "getTimeTableData": ttdata,
            "subjectdetails": subjectdetailstring
        }




        console.log($scope.timetableentry);
        $http({
                url: hosturl+"/api/v1/schooltestexamtimetable/uploadTimeTable",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.timetableentry)
            }).then(function(success) {
                console.log(success);
                if(success.data.returnmessage == "saved"){
                    alert("data saved!");
                }else if(success.data.returnmessage == "failed"){
                    alert("Something went wrong!");
                }
            },function (error){
                
            });
    }




    $scope.lastEventId = {};
    $scope.eventid = {};

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
                        console.log(success.data);
                        $scope.lastEventId = success.data;
                        if($scope.lastEventId != null && $scope.lastEventId.evecirid != undefined )
                        {
                           //$scope.studenthomeworkplayschooldata.homeworkid = 'HW'+ $scope.lastHomeWorkId.homeworkid;
                           $scope.eventid = 'EVECIR'+ $scope.lastEventId.evecirid;
                           // $scope.id = 1;
                           //  $scope.eventscircularssplayschooldata.evecirid = $scope.lastEventId.evecirid+1;
                        }
                    },function (error){
                    alert(error);
                    
                
                    });        

       }
});