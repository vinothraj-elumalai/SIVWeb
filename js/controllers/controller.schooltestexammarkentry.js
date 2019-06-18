sivwebapp.controller('schoolTestExamMarkEntryCtrl1', function($scope, $http, hosturl, currentHost, constantService, Auth) {
    $scope.userdata = Auth.isLoggedIn();
    $scope.getSchoolTestExamMarkData = {};
    $scope.getSchoolTestExamMarkData.loginuser = $scope.userdata.username;
    $scope.getSchoolTestExamMarkData.instituteid = $scope.userdata.instituteid;


    $scope.studentList = {};
    $scope.testdata = {};
    $scope.testdata.registernumber = "181010002";
    $scope.testdata.instituteid = "101";
    $http({
                url: hosturl+"/api/v1/schooltestexammarkentry/getStudentMarks",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.testdata)
            }).then(function(success) {
                
                console.log(JSON.stringify(success.data));
            },function (error){
                
            });

    $scope.getStudentListSubmit = function(){
        $http({
                url: hosturl+"/api/v1/schooltestexammarkentry/getStudentList",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.getSchoolTestExamMarkData)
            }).then(function(success) {
                if(success.data.errorMessage == "No Time Table Scheduled"){
                    alert(success.data.errorMessage);
                    $scope.returnstatus = false;
                } else {
                    $scope.returnstatus = true;
                    $scope.studentList = success.data.studentlist;
                    $scope.timetabledetails = success.data.timetabledetails;
                    $scope.subjectlist = JSON.parse(success.data.timetabledetails.subjectdetails);
                }
            },function (error){
            	
   			});
    }

    $scope.uploadMarks = function () {
        $scope.studentlistFormatted = [];
        angular.forEach($scope.studentList, function (value, index, key ){
            var obj = {};

            obj['registernumber']=value.registernumber;
            obj['candidatename']=value.candidatename;
            obj['standardstudying']=value.standardstudying;
            obj['section']=value.section;
            obj['academicyear']=value.academicyear;
            obj['studentstatus']=value.studentstatus;
            obj['loginuser']=value.loginuser;
            obj['instituteregisternumber']=value.instituteregisternumber;
            obj['instituteid']=value.instituteid;
            obj['totalmark']=value.totalmark;
            obj['percentage']=value.percentage;
            obj['grade']=value.grade;
            obj['result']=value.result;
            obj['remarks']=value.remarks;
            obj['subjectmarks']=[];

            angular.forEach($scope.studentList[index].subjectmarks, function (value, key){
                var indexval = parseInt(key);
                var subjectname=$scope.subjectlist[indexval].subjectname;

                var obj1 = {};
                obj1['subjectsno']=parseInt(key);
                obj1['mark']=parseInt(value);
                obj1['subjectname']=subjectname;

                obj['subjectmarks'].push(obj1);
            });
            $scope.studentlistFormatted.push(obj);
        });

        $scope.getSchoolTestExamMarkDataString=JSON.stringify($scope.getSchoolTestExamMarkData);
        $scope.studentListString=JSON.stringify($scope.studentlistFormatted);
        $scope.totalstudentmarks = {
            "markentryparam": $scope.getSchoolTestExamMarkDataString,
            "studentlist": $scope.studentListString
        }
        $http({
                url: hosturl+"/api/v1/schooltestexammarkentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.totalstudentmarks)
            }).then(function(success) {
                alert("success");
            },function (error){
                
            });
    }

    $scope.totalmarks = function (marklist,indexval){
        $scope.enteredmarks = marklist;
        $scope.totalmarksvar = 0;
        angular.forEach($scope.enteredmarks, function(mark){
            if(mark != null) {
                $scope.totalmarksvar = parseInt($scope.totalmarksvar) + parseInt(mark);   
            }
        });
        // console.log($scope.studentList);

        // $scope.studentList[indexval].totalmark={};
        // $scope.studentList[indexval].totalmark =  $scope.totalmarksvar;
        return $scope.totalmarksvar;
    }
    $scope.averagemarks = function (marklist,indexval){
        $scope.enteredmarks = marklist;
        $scope.totalmarksvar = 0;
        angular.forEach($scope.enteredmarks, function(mark){
            if(mark != null) {
                $scope.totalmarksvar = parseInt($scope.totalmarksvar) + parseInt(mark);   
            }
        });
        var arr = [];
        angular.forEach($scope.enteredmarks, function(value, key){
            arr.push(value);
        });
        var totalmarkscalc = $scope.getSchoolTestExamMarkData.subjectmaxmarks*arr.length;
        $scope.percentage = (($scope.totalmarksvar/totalmarkscalc)*100);
        return $scope.percentage.toFixed(2);
    }
    $scope.gradecalc = function(marklist, index) {
        console.log("index"+index);
        $scope.enteredmarks = marklist;
        $scope.totalmarksvar = 0;
        $scope.result = "PASS";
        angular.forEach($scope.enteredmarks, function(mark){
            if(mark != null) {
                $scope.totalmarksvar = parseInt($scope.totalmarksvar) + parseInt(mark);
                if (parseInt(mark)< $scope.getSchoolTestExamMarkData.subjectpassmarks){
                    $scope.result = "FAIL";    
                }   
            }else {
                $scope.result = "FAIL";
            }
        });
        var arr = [];
        angular.forEach($scope.enteredmarks, function(value, key){
            arr.push(value);
        });
        var totalmarkscalc = $scope.getSchoolTestExamMarkData.subjectmaxmarks*arr.length;
        $scope.percentage = (($scope.totalmarksvar/totalmarkscalc)*100);
        $scope.grade = "A";
        if ($scope.result == "FAIL") {
            $scope.grade = "F";
        }else {
            if($scope.percentage >= 85) {
                $scope.grade = "O";
            } else if ($scope.percentage >= 80 && $scope.percentage < 85) {
                $scope.grade = "A+";
            } else if ($scope.percentage >= 75 && $scope.percentage < 80) {
                $scope.grade = "A";
            } else if ($scope.percentage >= 70 && $scope.percentage < 75) {
                $scope.grade = "B+";
            } else if ($scope.percentage >= 65 && $scope.percentage < 70) {
                $scope.grade = "B";
            } else if ($scope.percentage >= 60 && $scope.percentage < 65) {
                $scope.grade = "C+";
            } else if ($scope.percentage >= 55 && $scope.percentage < 60) {
                $scope.grade = "C";
            } else if ($scope.percentage >= 35 && $scope.percentage < 55) {
                $scope.grade = "D";
            } else if ($scope.percentage < 35) {
                $scope.grade = "F";
            }
        }
        $scope.studentList[index].result = $scope.result;
        return $scope.grade;
    }
    $scope.isPass = function (submark){
        if (parseInt(submark)< $scope.getSchoolTestExamMarkData.subjectpassmarks) {
            return false;
        } else {
            return true;
        }
    }
});