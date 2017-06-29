var sivwebapp = angular.module("sivweb", ["ngRoute"]);
sivwebapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/test.html"
    })
    .when("/login", {
        templateUrl : "templates/login.html"
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
    });
    
});