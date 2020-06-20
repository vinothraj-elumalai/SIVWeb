var sivwebapp = angular.module("sivweb", ["ngRoute", "ui.bootstrap"]);
sivwebapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    })
    .when("/login", {
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    })
    .when("/dashboard", {
        templateUrl : "templates/dashboard.html",
        controller : "dashboardCtrl"
    })
    .when("/createuser", {
        templateUrl : "templates/createuser.html",
        controller : "createUserCtrl"
    })
    .when("/institutedetails", {
        templateUrl : "templates/institutedetails.html",
        controller : "instituteDetailsCtrl"
    })
    
    // MGMT
    .when("/schoolfeessettingplayschool", {
        templateUrl : "templates/schoolfeessettingplayschool.html",
        controller : "schoolFeesSettingPlaySchoolCtrl"
    })
    .when("/transportfeessettingplayschool", {
        templateUrl : "templates/transportfeessettingplayschool.html",
        controller : "playschoolTransportFeesSettingCtrl"
    })

    //OADMSN
    .when("/applicationsaleschool", {
        templateUrl : "templates/applicationsaleschool.html",
        controller : "schoolApplicationSaleCtrl"
    })
    .when("/admissionschool", {
        templateUrl : "templates/admissionschool.html",
        controller : "admissionSchoolCtrl"
    })
    .when("/studentpersonalinformationviewplayschool", {
        templateUrl : "templates/studentpersonalinformationeditplayschool.html",
        controller : "studentPersonalInformationEditPlaySchoolCtrl"
    })
    .when("/eventscircularsplayschool", {
      templateUrl : "templates/eventscircularsplayschool.html",
      controller : "eventsCircularsPlaySchoolCtrl"
    }) 
    .when("/studentsnamelistplayschool", {
        templateUrl : "templates/studentsnamelistplayschool.html",
        controller : "studentsNameListPlaySchoolCtrl"
    })
    .when("/applicationsaleplayschool", {
        templateUrl : "templates/applicationsaleplayschool.html",
        controller : "playSchoolapplicationSaleCtrl"
    })
      .when("/admissionplayschool", {
        templateUrl : "templates/admissionplayschool.html",
        controller : "admissionPlaySchoolCtrl"
    })

    //STUD
    .when("/studentdailyattendanceparentfetchplayschool", {
        templateUrl : "templates/studentdailyattendanceparentfetchplayschool.html",
        controller : "studentDailyAttendanceParentFetchPlaySchoolCtrl"
    })
    .when("/studentdailypickupparentfetchplayschool", {
        templateUrl : "templates/studentdailypickupparentfetchplayschool.html",
        controller : "studentDailyPickupParentFetchPlaySchoolCtrl"
    })
    .when("/studenthomeworkviewplayschool", {
        templateUrl : "templates/studenthomeworkviewplayschool.html",
        controller : "studentHomeWorkViewPlaySchoolCtrl"
    })

    // TSTAFF
    .when("/studentattendanceplayschoolentry", {
        templateUrl : "templates/studentattendanceplayschoolentry.html",
        controller : "studentAttendancePlayschoolCtrl"
    })
    .when("/childspickupplayschoolentry", {
        templateUrl : "templates/studentpickupplayschoolentry.html",
        controller : "childsPickupPlaySchoolEntryCtrl"
    })
    .when("/photosuploadplayschool", {
        templateUrl : "templates/photosuploadplayschool.html",
        controller : "photosUploadPlaySchoolCtrl"
    })
    .when("/studenthomeworkplayschool", {
        templateUrl : "templates/studenthomeworkplayschool.html",
        controller : "studentHomeWorkPlaySchoolCtrl"
    })
    .when("/schooltestexamtimetable", {
        templateUrl : "templates/schooltestexamtimetable.html",
        controller : "schoolTestExamTimeTableCtrl"
    })
    .when("/schooltestexammarkentry", {
        templateUrl : "templates/schooltestexammarkentry.html",
        controller : "schoolTestExamMarkEntryCtrl"
    })
    .when("/schoolhomeworkreport", {
        templateUrl : "templates/schoolhomeworkreport.html",
        controller : "homeWorkListSchoolCtrl"
    })
    .when("/schooleventsreport", {
        templateUrl : "templates/schooleventsreport.html",
        controller : "eventsListSchoolCtrl"
    })
    .when("/schoolstudentdailyattendancereport", {
        templateUrl : "templates/schoolstudentdailyattendancereport.html",
        controller : "studentDailyAttendanceListSchoolCtrl"
    })
    .when("/documentuploadschool", {
        templateUrl : "templates/documentsuploadschool.html",
        controller : "documentUploadSchoolCtrl"
    })
    .otherwise({
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    });
});
sivwebapp.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event) {

        if (!Auth.isLoggedIn()) {
            // event.preventDefault();
            $location.path('/login');

            $('#wrapper').addClass('loginpage');
        }
        else {
            // $location.path('/dashboard');
            $('#wrapper').removeClass('loginpage');
            $rootScope.profiledata = Auth.isLoggedIn();
        }
    });
}]).factory('Auth', function(){
var user;

return{
    setUser : function(aUser){
        user = aUser;
    },
    isLoggedIn : function(){
        return(user)? user : false;
    }
  }
});

sivwebapp.filter('dateFormat',['constantService' ,function(constantService) {
    return function(entrydate) {
        var convertedDate="";
        convertedDate = constantService.toDateFormat(entrydate);
        return convertedDate;
    };
}]);
sivwebapp.filter('dayOfDate', function() {
    return function(entrydate) {
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        // var dayOfDate= "";
        var d=new Date(entrydate);
        return days[d.getDay()];
    };
});
// sivwebapp.constant('hosturl', 'http://localhost:8080');
// sivwebapp.constant('currentHost', 'http://localhost/SIVWeb/').run(function ($rootScope, currentHost) {$rootScope.currentHost = currentHost;});
sivwebapp.constant('hosturl', 'http://api.gbcorp.in:8080');
sivwebapp.constant('currentHost', 'http://siv.gbcorp.in/').run(function ($rootScope, currentHost) {$rootScope.currentHost = currentHost;});;