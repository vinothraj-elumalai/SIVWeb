var sivwebapp = angular.module("sivweb", ["ngRoute"]);
sivwebapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    })
    .when("/dashboard", {
        templateUrl : "templates/dashboard.html",
        controller : "dashboardCtrl"
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
    .when("/transportidcard", {
        templateUrl : "templates/transportidcard.html",
        controller : "transportIdCardCtrl"
    })

    .when("/mtcconcession", {
        templateUrl : "templates/mtcconcession.html",
        controller : "mtcconcessionCtrl"
    })
    
    .when("/trainconcession", {
        templateUrl : "templates/trainconcession.html",
        controller : "trainconcessionCtrl"
    })

    .when("/fuelfilling", {
        templateUrl : "templates/fuelfilling.html",
        controller : "fuelFillingCtrl"
    })

    .when("/transportinsurance", {
        templateUrl : "templates/transportinsurance.html",
        controller : "transportInsuranceCtrl"
    })

    .when("/transportfc", {
        templateUrl : "templates/transportfc.html",
        controller : "transportFCCtrl"
    })

    .when("/campusscheduler", {
        templateUrl : "templates/campusscheduler.html",
        controller : "campusSchedulerCtrl"
    })
    .when("/tournamentdata", {
        templateUrl : "templates/tournamentdata.html",
        controller : "tournamentDataCtrl"
    })
    .when("/sportskitsstock", {
        templateUrl : "templates/sportskitsstock.html",
        controller : "sportsKitsSockCtrl"
    })
    .when("/sportsod", {
        templateUrl : "templates/sportsodform.html",
        controller : "sportsOdCtrl"
    })
    .when("/sportspddetail", {
        templateUrl : "templates/sportspddetails.html",
        controller : "sportsPdDetailCtrl"
    })
    .when("/librarymemberdetail", {
        templateUrl : "templates/librarymemberdetail.html",
        controller : "libraryMemberDetailEntryCtrl"
    })
    .when("/librarybookentry", {
        templateUrl : "templates/librarybookdata.html",
        controller : "libraryBookEntryCtrl"
    })
    .when("/librarycdentry", {
        templateUrl : "templates/librarycddata.html",
        controller : "libraryCdDataCtrl"
    })
    .when("/librarymagazineentry", {
        templateUrl : "templates/librarymagazinedata.html",
        controller : "libraryMagazineDataCtrl"
    })
    .when("/librarybookissuereturn", {
        templateUrl : "templates/librarybookissuereturn.html",
        controller : "libraryBookIssueReturnDataCtrl"
    })
    .when("/libraryusage", {
        templateUrl : "templates/libraryusage.html",
        controller : "libraryUsageCtrl"
    })
    .when("/hostelstudent", {
        templateUrl : "templates/hostelstudentdata.html",
        controller : "hostelStudentDataCtrl"
    })
    .when("/hostelstudentleave", {
        templateUrl : "templates/hostelstudentleaveform.html",
        controller : "hostelStudentLeaveFormCtrl"
    })
    .when("/hostelstudentvisitor", {
        templateUrl : "templates/hostelstudentvisitor.html",
        controller : "hostelStudentVisitorCtrl"
    })
    .when("/parentfeedback", {
        templateUrl : "templates/parentfeedback.html",
        controller : "parentfeedbackCtrl"
    })
    .when("/securityvisitorpass", {
        templateUrl : "templates/securityvisitorpass.html",
        controller : "securityVisitorPassCtrl"
    })
    .when("/securityvehiclesinout", {
        templateUrl : "templates/securityvehiclesinout.html",
        controller : "securityVehiclesInOutCtrl"
    })
    .when("/securityoutpass", {
        templateUrl : "templates/securityoutpass.html",
        controller : "securityOutPassCtrl"
    })
    .when("/securitylatecomers", {
        templateUrl : "templates/securitylatecomers.html",
        controller : "securityLateComersCtrl"
    })
    .when("/studentattendance", {
        templateUrl : "templates/studentattendance.html",
        controller : "studentAttendanceCtrl"
    })
    .when("/corporateentry", {
        templateUrl : "templates/corporateentry.html",
        controller : "corporateEntryCtrl"
    })
    .when("/campusrequest", {
        templateUrl : "templates/campusrequest.html",
        controller : "campusRequestCtrl"
    })
    .when("/securitymaterialinout", {
        templateUrl : "templates/securitymaterialinout.html",
        controller : "securityMaterialInOutPassCtrl"
    })
    .when("/sportsathelete", {
        templateUrl : "templates/sportsathelete.html",
        controller : "sportsAtheleteCtrl"
    })
    .when("/sportskitspurchase", {
        templateUrl : "templates/sportskitspurchase.html",
        controller : "sportsKitsPurchaseCtrl"
    })
    .when("/storespurchase", {
        templateUrl : "templates/storespurchase.html",
        controller : "storesPurchaseCtrl"
    })
    .when("/storessales", {
        templateUrl : "templates/storessales.html",
        controller : "storesSalesCtrl"
    })
    .when("/storesreturn", {
        templateUrl : "templates/storesreturn.html",
        controller : "storesReturnCtrl"
    })
    .when("/superintendentex2", {
        templateUrl : "templates/superintendentex2.html",
        controller : "superintendentEx2Ctrl"
    })
    .when("/staffattendance", {
        templateUrl : "templates/superintendentstaffattendance.html",
        controller : "superintendentStaffAttendanceCtrl"
    })
    .when("/primarykeyuser", {
        templateUrl : "templates/primarykeytestuser.html",
        controller : "primaryKeyUserCtrl"
    })
    .when("/primaryusercontact", {
        templateUrl : "templates/primaryusercontacts.html",
        controller : "primaryUserContactCtrl"
    })
    .when("/primaryuserlog", {
        templateUrl : "templates/primaryuserlog.html",
        controller : "primaryUserLogCtrl"
    })
    .when("/studentpersonalinformationentry", {
        templateUrl : "templates/studentpersonalinformationentry.html",
        controller : "studentPersonalInformationEntryCtrl"
    })
    .when("/staffbiodata", {
        templateUrl : "templates/staffbiodata.html",
        controller : "staffBioDataCtrl"
    })
    .when("/staffacademicdata", {
        templateUrl : "templates/staffacademicinformation.html",
        controller : "staffAcademicDataCtrl"
    })
    .when("/staffwillingsubjects", {
        templateUrl : "templates/staffwillingsubjects.html",
        controller : "staffWillingSubjectsCtrl"
    })

    .when("/institutedetails", {
        templateUrl : "templates/institutedetails.html",
        controller : "instituteDetailsCtrl"
    })
    .when("/institutecoursedetails", {
        templateUrl : "templates/institutecoursedetails.html",
        controller : "instituteCourseDetailsCtrl"
    })
    .when("/institutebatchdetails", {
        templateUrl : "templates/institutebatchdetails.html",
        controller : "instituteBatchDetailsCtrl"
    })
    .when("/institutetestdetails", {
        templateUrl : "templates/institutetestdetails.html",
        controller : "instituteTestDetailsCtrl"
    })
    .when("/instituteexamdetails", {
        templateUrl : "templates/instituteexamdetails.html",
        controller : "instituteExamDetailsCtrl"
    })
    .when("/institutebusnodetails", {
        templateUrl : "templates/institutebusnodetails.html",
        controller : "instituteBusnoDetailsCtrl"
    })
    .when("/institutebusroutedetails", {
        templateUrl : "templates/institutebusroutedetails.html",
        controller : "instituteBusrouteDetailsCtrl"
    })
    .when("/applicationsaleplayschool", {
        templateUrl : "templates/applicationsaleplayschool.html",
        controller : "playSchoolapplicationSaleCtrl"
    })
     .when("/studentdailyattendenceplayschool", {
        templateUrl : "templates/studentdailyattendenceplayschool.html",
        controller : "psdailyattendenceCtrl"
    })
      .when("/childpickupdetailsplayschool", {
        templateUrl : "templates/childpickupdetailsplayschool.html",
        controller : "childpickupdetailsCtrl"
    })
      .when("/admissionplayschool", {
        templateUrl : "templates/admissionplayschool.html",
        controller : "admissionPlaySchoolCtrl"
    })
      .when("/schoolfeessettingplayschool", {
        templateUrl : "templates/schoolfeessettingplayschool.html",
        controller : "schoolFeesSettingPlaySchoolCtrl"
    })
      .when("/transportfeessettingplayschool", {
        templateUrl : "templates/transportfeessettingplayschool.html",
        controller : "playschoolTransportFeesSettingCtrl"
    })
      .when("/studentattendanceplayschoolentry", {
        templateUrl : "templates/studentattendanceplayschoolentry.html",
        controller : "studentAttendancePlayschoolCtrl"
    })
      .when("/feespaymentplayschool", {
        templateUrl : "templates/feespaymentplayschool.html",
        controller : "feesPaymentPlaySchoolCtrl"
    })
      .when("/transportchangeplayschool", {
        templateUrl : "templates/studenttransportchangeplayschool.html",
        controller : "studentTransportChangePlaySchoolCtrl"
    })
      .when("/eventscircularsplayschool", {
        templateUrl : "templates/eventscircularsplayschool.html",
        controller : "eventsCircularsPlaySchoolCtrl"
    })
      .when("/staffpersonalinformationplayschool", {
        templateUrl : "templates/staffpersonalinformationplayschool.html",
        controller : "staffPersonalInformationPlaySchoolCtrl"
    })
      .when("/studenthomeworkplayschool", {
        templateUrl : "templates/studenthomeworkplayschool.html",
        controller : "studentHomeWorkPlaySchoolCtrl"
    })
      .when("/childspickupplayschoolentry", {
        templateUrl : "templates/childspickupplayschoolentry.html",
        controller : "childsPickupPlaySchoolEntryCtrl"
    })
      .when("/photosuploadplayschool", {
        templateUrl : "templates/photosuploadplayschool.html",
        controller : "photosUploadPlaySchoolCtrl"
    })
      .when("/videosuploadplayschool", {
        templateUrl : "templates/videosuploadplayschool.html",
        controller : "videosUploadPlaySchoolCtrl"
    })
      .when("/studentsnamelistplayschool", {
        templateUrl : "templates/studentsnamelistplayschool.html",
        controller : "studentsNameListPlaySchoolCtrl"
    })
      .when("/studentsmonthlyreportplayschool", {
        templateUrl : "templates/studentsmonthlyreportplayschool.html",
        controller : "studentsMonthlyReportPlaySchoolCtrl"
    })
      .when("/studentattendanceplayschoolmanagementview", {
        templateUrl : "templates/studentattendanceplayschoolmanagentview.html",
        controller : "studentAttendancePlaySchoolManagementViewCtrl"
    })
      .when("/dailyfeesreportmanagementplayschool", {
        templateUrl : "templates/dailyfeesreportmanagementplayschool.html",
        controller : "dailyfeesReportPlaySchoolCtrl"
    })
      .when("/admissionstatusmanagementplayschool", {
        templateUrl : "templates/admissionstatusmanagementplayschool.html",
        controller : "admissionStatusManagementPlaySchoolCtrl"
    })
      .when("/individualstudentprogressviewplayschool", {
        templateUrl : "templates/individualstudentprogressviewplayschool.html",
        controller : "studentIndividualProgressViewCtrl"
    })
      .when("/studentprofileviewplayschool", {
        templateUrl : "templates/studentprofileviewplayschool.html",
        controller : "studentProfileViewPlaySchoolCtrl"
    })
      .when("/studentfeespaymenthistoryplayschool", {
        templateUrl : "templates/studentfeespaymenthistoryplayschool.html",
        controller : "studentFeesPaymentHistoryPlaySchoolCtrl"
    })
      .when("/studenthomeworkviewplayschool", {
        templateUrl : "templates/studenthomeworkviewplayschool.html",
        controller : "studentHomeWorkPlaySchoolCtrl"
    })

    .otherwise({
        templateUrl : "templates/login.html",
        controller : "loginCtrl"
    });

});

sivwebapp.constant('hosturl', 'http://localhost:8080');

//old//sivwebapp.constant('hosturl', 'http://ec2-18-220-235-33.us-east-2.compute.amazonaws.com:8080');

//sivwebapp.constant('hosturl', 'http://ec2-18-220-235-33.us-east-2.compute.amazonaws.com:8080');

//sivwebapp.constant('hosturl', 'http://ec2-18-221-7-74.us-east-2.compute.amazonaws.com:8080');