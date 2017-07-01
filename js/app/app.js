var sivwebapp = angular.module("sivweb", ["ngRoute"]);
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
    .when("/createuser", {
        templateUrl : "templates/createuser.html",
        controller : "createUserCtrl"
    })
    .when("/applicationsale", {
        templateUrl : "templates/applicationsale.html",
        controller : "applicationSaleCtrl"
    })
    .when("/admissioncounselling", {
        templateUrl : "templates/admissioncounselling.html",
        controller : "admissionCounsellingCtrl"
    })
    .when("/collegefeessetting", {
        templateUrl : "templates/collegefeessetting.html",
        controller : "collegeFeesSettingCtrl"
    })
    .when("/transportfeessetting", {
        templateUrl : "templates/transportfeessetting.html",
        controller : "transportFeesSettingCtrl"
    })
    .when("/hostelfeessetting", {
        templateUrl : "templates/hostelfeessetting.html",
        controller : "hostelFeesSettingCtrl"
    })
    .when("/foodfeessetting", {
        templateUrl : "templates/foodfeessetting.html",
        controller : "foodFeesSettingCtrl"
    })
    .when("/feespayment", {
        templateUrl : "templates/feespayment.html",
        controller : "feesPaymentCtrl"
    })
    .when("/studentacademicinfo", {
        templateUrl : "templates/studentacademicinfo.html",
        controller : "studentAcademicInfoCtrl"
    })
    .when("/studentbaseinformation", {
        templateUrl : "templates/studentbaseinformation.html",
        controller : "studentBaseInformationCtrl"
    })
    .when("/studentpersonalinformation", {
        templateUrl : "templates/studentpersonalinformation.html",
        controller : "studentPersonalInformationCtrl"
    })
    .when("/subjectentry", {
        templateUrl : "templates/subjectentry.html",
        controller : "subjectEntryCtrl"
    })
    .when("/certificatesubmission", {
        templateUrl : "templates/certificatesubmission.html",
        controller : "certificateSubmissionCtrl"
    })
    .when("/studenttransport", {
        templateUrl : "templates/studenttransport.html",
        controller : "studentTransportCtrl"
    })
    .when("/studenthostel", {
        templateUrl : "templates/studenthostel.html",
        controller : "studentHostelCtrl"
    })
    .when("/studentfood", {
        templateUrl : "templates/studentfood.html",
        controller : "studentFoodCtrl"
    })
    .when("/studentleaveletter", {
        templateUrl : "templates/studentleaveletter.html",
        controller : "studentLeaveLetterCtrl"
    })
    .when("/subjecttimetable", {
        templateUrl : "templates/subjecttimetable.html",
        controller : "subjectTimeTableCtrl"
    })
    .when("/studenthomework", {
        templateUrl : "templates/studenthomework.html",
        controller : "studentHomeWorkCtrl"
    })
    .when("/applicationfollowup", {
        templateUrl : "templates/applicationfollowup.html",
        controller : "applicationFollowUpCtrl"
    })
    .when("/studentcollegeid", {
        templateUrl : "templates/studentcollegeid.html",
        controller : "studentCollegeIdCtrl"
    })
        .when("/studentdiscontinuedtc", {
        templateUrl : "templates/studentdiscontinuedtc.html",
        controller : "studentDiscontinuedTcCtrl"
    })
    .otherwise({
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    });
    
});