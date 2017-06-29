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

    .otherwise({
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    });
});