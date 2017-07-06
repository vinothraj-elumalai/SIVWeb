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
    .when("/subjectallocation", {
        templateUrl : "templates/subjectallocation.html",
        controller : "subjectAllocationCtrl"
    })
    .when("/questionentry", {
        templateUrl : "templates/questionentry.html",
        controller : "questionEntryCtrl"
    })
    .when("/staffleaveletterentry", {
        templateUrl : "templates/staffleaveletterentry.html",
        controller : "staffLeaveLetterEntryCtrl"
    })

    .when("/bonafide", {
        templateUrl : "templates/bonafide.html",
        controller : "bonafideCtrl"
    })
    
    .when("/firstaid", {
        templateUrl : "templates/firstaid.html",
        controller : "firstaidEntryCtrl"
    })

    .when("/feesfollowup", {
        templateUrl : "templates/feesfollowup.html",
        controller : "feesFollowupCtrl"
    })
<<<<<<< HEAD
=======


>>>>>>> c758828905f3e1ddcf2a5ab406008fc799ca6fe1
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
<<<<<<< HEAD
    .when("/studentremarksentry", {
        templateUrl : "templates/studentremarks.html",
        controller : "studentRemarksEntryCtrl"
    })
    .when("/studentremarksaction", {
        templateUrl : "templates/studentremarksaction.html",
        controller : "studentRemarksActionCtrl"
    })
    .when("/diplomainternalbranchtesttimetable", {
        templateUrl : "templates/diplomabranchinttesttimetable.html",
        controller : "diplomaBranchIntTestTimetableCtrl"
    })
    .when("/diplomainternalsem1testtimetable", {
        templateUrl : "templates/diplomasem1inttesttimetable.html",
        controller : "diplomaSem1IntTestTimetableCtrl"
    })
    .when("/diplomainternalsem2testtimetable", {
        templateUrl : "templates/diplomasem2inttesttimetable.html",
        controller : "diplomaSem2IntTestTimetableCtrl"
    })
    .when("/diplomabranchboardexamtimetable", {
        templateUrl : "templates/diplomabranchboardtimetable.html",
        controller : "diplomaBranchBoardExamTimetableCtrl"
    })
    .when("/diplomafirstyearboardexamtimetable", {
        templateUrl : "templates/diplomafirstyearboardtimetable.html",
        controller : "diplomaFirstYearBoardExamTimetableCtrl"
    })
    .when("/vendordetails", {
        templateUrl : "templates/vendordetails.html",
        controller : "vendorDetailsCtrl"
    })

=======
    .when("/scholarship", {
        templateUrl : "templates/scholarship.html",
        controller : "scholarshipCtrl"
    })
     
    .when("/stafftransport", {
        templateUrl : "templates/stafftransport.html",
        controller : "staffTransportCtrl"
    })
    
    .when("/equivalencesubject", {
        templateUrl : "templates/equivalencesubject.html",
        controller : "equivalenceSubjectCtrl"
    })

    .when("/egovspellentry", {
        templateUrl : "templates/egovspellentry.html",
        controller : "egovSpellEntryCtrl"
    })

    .when("/stenoevents", {
        templateUrl : "templates/stenoevents.html",
        controller : "eventsCtrl"
    })
    
    .when("/stenocircular", {
        templateUrl : "templates/stenocircular.html",
        controller : "circularCtrl"
    })


>>>>>>> c758828905f3e1ddcf2a5ab406008fc799ca6fe1
    .otherwise({
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    });
    
});