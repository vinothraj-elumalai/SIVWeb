sivwebapp.service('constantService', function() {

    // All your constants declared here.
    // this.dashboardcolors = function(){
    // 	var dashboardColors = {
    //         "#2DA3AD",
    //         "#EC538D",
    //         "#77C046",
    //         "#FC5E13",
    //         "#EDA11B",
    //         "#E4444B"
    // 	} ;
    // }
    this.usermenu = function(role){
      // return a Promise object so that the caller can handle success/failure
      var menulist = [];
      switch(role){
            case "MGMT":
            	menulist = [
		            	{'menuitem': 'Admission Counselling', 'iconclass': 'icon-class-group', 'href': '/admissioncounselling', 'subcategory': 'admission'},
		            	{'menuitem': 'Admission Status', 'iconclass': 'icon-classroom', 'href': '/login'},  //NEED TO DESIGN
		            	{'menuitem': 'College Fees Setting', 'iconclass': 'icon-classroom', 'href': '/collegefeessetting'},
		            	{'menuitem': 'Transport Fees Setting', 'iconclass': 'icon-classroom', 'href': '/transportfeessetting'},
		            	{'menuitem': 'Hostel Fees Setting', 'iconclass': 'icon-classroom', 'href': '/hostelfeessetting'},
		            	{'menuitem': 'Food Fees Setting', 'iconclass': 'icon-classroom', 'href': '/foodfeessetting'},
		            	{'menuitem': 'Staff Attendance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Student Attendance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Staff Performance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Department Performance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Salary Calculation', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Staff Requirement', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Locate Staff', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Admin Removal', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Placement Performance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Promote Staff', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Relieve Staff', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Approvals', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Events', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Transport Maintenance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Hostel', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Sports Performance', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN


            		];
            	return menulist;
                // data.add(new Item("Admission Counselling",R.drawable.admission,".AdmissionCounsellingFragment"));
                // data.add(new Item("Admission Status", R.drawable.accounts,".AdmissionStatusFragment"));
                // data.add(new Item("College Fees Setting", R.drawable.accounts1,".CollegeFeesSettingFragment"));
                // data.add(new Item("Transport Fees Setting", R.drawable.accounts1,".TransportFeesSettingFragment"));
                // data.add(new Item("Hostel Fees Setting", R.drawable.accounts1,".HostelFeesSettingFragment"));
                // data.add(new Item("Food Fees Setting", R.drawable.accounts1,".HostelFeesSettingFragment"));
                // data.add(new Item("Staff Attendance", R.drawable.staff_attendance,".StaffAttendanceFragment"));
                // data.add(new Item("Student Attendance", R.drawable.attendance,".StudentAttendanceFragment"));
                // data.add(new Item("Staff Performance", R.drawable.performance,".StaffPerformanceFragment"));
                // data.add(new Item("Department Performance", R.drawable.performance,".DepartmentPerformanceFragment"));
                // data.add(new Item("Salary Calculation", R.drawable.salary,".SalaryCalculationFragment"));
                // data.add(new Item("Staff Requirement", R.drawable.admission,".StaffReqFragment"));
                // data.add(new Item("Locate Staff", R.drawable.locatestaff,"LocateStaffFragment"));
                // data.add(new Item("Admin Removal", R.drawable.adminremoval,".AdminRemovalFragment"));
                // data.add(new Item("Placement Performance", R.drawable.performance,".PlacementPerformFragment"));
                // data.add(new Item("Promote Staff", R.drawable.promotestaff,".PromoteStaffFragment"));
                // data.add(new Item("Relieve Staff", R.drawable.relievestaff,".RelieveStaffFragment"));
                // data.add(new Item("Approvals", R.drawable.approval,".ApprovalsFragment"));
                // data.add(new Item("Events", R.drawable.events,".EventsFragment"));
                // data.add(new Item("Transport Maintenance", R.drawable.transport,".TransportMaintenanceFragment"));
                // data.add(new Item("Hostel", R.drawable.hostel,".HostelManagementFragment"));
                // data.add(new Item("Reports", R.drawable.reports,".ReportsFragment"));
                // data.add(new Item("Sports Performance", R.drawable.sports,".SportsPerformFragment"));
                break;

            case "PRPL":
            	menulist = [
		            	
		            	{'menuitem': 'Staff Attendance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Student Attendance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Staff Performance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Department Performance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Staff Requirement', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Locate Staff', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Placement Performance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Events', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Hostel', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Sports Performance', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN


            		];
            	return menulist;
                // data.add(new Item("Staff Attendance", R.drawable.staff_attendance,".PrincStaffAttendFragment"));
                // data.add(new Item("Student Attendance", R.drawable.attendance,".PrincStudentAttendFragment"));
                // data.add(new Item("Staff Performance", R.drawable.performance,".PrincStaffPerfFragment"));
                // data.add(new Item("Department Performance", R.drawable.performance,".PrincDeptPerfFragment"));
                // data.add(new Item("Staff Workload", R.drawable.workload,".PrincStaffWorkloadFragment"));
                // data.add(new Item("Staff Requirement", R.drawable.admission,".PrincStaffReqFragment"));
                // data.add(new Item("Locate Staff", R.drawable.locatestaff,".PrincLocateStaffFragment"));
                // data.add(new Item("Hostel", R.drawable.hostel,".PrincHostelFragment"));
                // data.add(new Item("Placement Performance", R.drawable.performance,".PrincPlacementPerfFragment"));
                // data.add(new Item("Sports Performance", R.drawable.performance,".PrincSportPerfFragment"));
                break;

            //case "Office Admin":
            case "OADM":
            	menulist = [
		            	
		            	{'menuitem': 'Staff Attendance', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Student Attendance', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Staff Performance', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Department Performance', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Staff Requirement', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Locate Staff', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Placement Performance', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Events', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Hostel', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Sports Performance', 'iconclass': 'icon-classroom', 'href': '/login'}


            		];
            	return menulist;
                // data.add(new Item("Admission", R.drawable.admission,".OffAdmissionFragment"));
                // data.add(new Item("Student Data", R.drawable.student,".OfficeStudentInfoUpdFragment"));
                // data.add(new Item("Staff Data", R.drawable.staff,".OfficeStaffInfoFragment"));
                // data.add(new Item("Fees Counter", R.drawable.feespayment,".OffFeeCounterFragment"));
                // data.add(new Item("Stores", R.drawable.stores,".OfficeStoresFragment"));
                // data.add(new Item("Transport", R.drawable.transport,".OffTransportFragment"));
                // data.add(new Item("Hostel", R.drawable.hostel,".OfficeHostelFragment"));
                // data.add(new Item("Exam", R.drawable.exam,".OfficeExamFragment"));
                // data.add(new Item("e-Governance", R.drawable.admission,".OffEGovernanceFragment"));
                // data.add(new Item("Events", R.drawable.events,".OffEventHandlerFragment"));
                // data.add(new Item("Circulars", R.drawable.circulars,".OffStenoCircularsFragment"));

                break;

            //case "Office Admission":
            case "OADMSN":
            	menulist = [
		            	
		            	{'menuitem': 'Application Sale', 'iconclass': 'icon-classroom', 'href': '/applicationsale'},
		            	{'menuitem': 'Admission Entry', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Follow up', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'College ID', 'iconclass': 'icon-classroom', 'href': '/studentcollegeid'},
		            	{'menuitem': 'Certificate Submission', 'iconclass': 'icon-classroom', 'href': '/certificatesubmission'},
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN


            		];
            	return menulist;
                // data.add(new Item("Application Sale", R.drawable.application,".ApplicationSaleFragment"));
                // data.add(new Item("Admission Entry", R.drawable.admissionent,".AdmissionEntryFragment"));
                // data.add(new Item("Follow up", R.drawable.follower,".ApplicationFollowFragment"));
                // data.add(new Item("College ID", R.drawable.idcard,".CollegeIdCardFragment"));
                // data.add(new Item("Bonafide", R.drawable.admission,".BonafideFragment"));
                // data.add(new Item("TC", R.drawable.admission,".TcGenerateFragment"));
                // data.add(new Item("Name List", R.drawable.admission,".NameListFragment"));
                // data.add(new Item("First Aid", R.drawable.firstaid,".FirstAidEntryFragment"));
                // data.add(new Item("Certificate Submission", R.drawable.certificate,".CertificateSubmissionFragment"));
                // data.add(new Item("Scholarship", R.drawable.scholarship,".ScholarshipFragment"));
                // data.add(new Item("Reports", R.drawable.reports,".OffAdmissionReportFragment"));
                break;

            //case "Office Fees":
            case "FEES":
            	menulist = [
		            	
		            	{'menuitem': 'Fees Payment', 'iconclass': 'icon-classroom', 'href': '/feespayment'},
		            	{'menuitem': 'Exam Fees', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Follow up', 'iconclass': 'icon-classroom', 'href': '/feesfollowup'},
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
                        ];
                        return menulist;
                // data.add(new Item("Fees Payment",R.drawable.feespayment,".FeesPaymentFragment"));
                // data.add(new Item("Exam Fees", R.drawable.examfees,".ExamFeesFragment"));
                // data.add(new Item("Follow up", R.drawable.follow,".FollowupFeesFragment"));
                // data.add(new Item("Reports", R.drawable.reports,".ReportFeeCounterFragment"));
                break;

            //case "Office Supdt":
            case "OSUPDT":
            	menulist = [
		            	
		            	{'menuitem': 'Staff Personal', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Staff Academic', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Willing Subjects', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Staff Transport', 'iconclass': 'icon-classroom', 'href': '/stafftransport'},
		            	{'menuitem': 'Staff Attendance', 'iconclass': 'icon-classroom', 'href': '/staffattendance'},
		            	{'menuitem': 'Leave Entry', 'iconclass': 'icon-classroom', 'href': '/staffleaveletterentry'},
		            	{'menuitem': 'Nominal Entry', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Equivalence Subject Entry', 'iconclass': 'icon-classroom', 'href': '/equivalencesubject'},
		            	{'menuitem': 'Result Entry', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Ex-2 Entry', 'iconclass': 'icon-classroom', 'href': '/superintendentex2'},
		            	{'menuitem': 'E-Gov Spell Entry', 'iconclass': 'icon-classroom', 'href': '/egovspellentry'},
		            	{'menuitem': 'B-Forms', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Bonafide', 'iconclass': 'icon-classroom', 'href': '/bonafide'},
		            	{'menuitem': 'TC', 'iconclass': 'icon-classroom', 'href': '/studentdiscontinuedtc'},//NEED TO DISCUSS
		            	{'menuitem': 'Students Name List', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Staff Name List', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'First Aid', 'iconclass': 'icon-classroom', 'href': '/firstaid'},
		            	{'menuitem': 'Scholarship', 'iconclass': 'icon-classroom', 'href': '/scholarship'},
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN


            		];
            	return menulist;
                // data.add(new Item("Staff Personal", R.drawable.personalinf,".StaffPersonalFragment"));
                // data.add(new Item("Staff Academic", R.drawable.academic,".StaffAcademicFragment"));
                // data.add(new Item("Willing Subjects", R.drawable.subject,".WillingSubjectsFragment"));
                // data.add(new Item("Staff Transport", R.drawable.transport,".StaffTransportFragment"));
                // data.add(new Item("Staff Attendance", R.drawable.staff_attendance,".OffSupdtStaffAttendanceFragment"));
                // data.add(new Item("Leave Entry", R.drawable.admission,".StaffLeaveEntryFragment"));
                // data.add(new Item("Nominal Entry", R.drawable.admission,".NominalEntryFragment"));
                // data.add(new Item("Equivalence Subject Entry", R.drawable.admission,".EquivalenceSubjectEntryFragment"));
                // data.add(new Item("Result Entry", R.drawable.admission,".ResultEntryFragment"));
                // data.add(new Item("Ex-2 Entry", R.drawable.admission,".Ex2EntryFragment"));
                // data.add(new Item("E-Gov Spell Entry", R.drawable.admission,".EgovSpellEntryFragment"));
                // data.add(new Item("B-Forms", R.drawable.admission,".BformFragment"));
                // data.add(new Item("B-Forms", R.drawable.admission,".BformActivity"));
                // data.add(new Item("Reports", R.drawable.reports,".OfficeSupdtReportFragment"));
                break;

            //case "Office Steno":
            case "OSTN":
            	menulist = [
		            	
		            	{'menuitem': 'Events Entry', 'iconclass': 'icon-classroom', 'href': '/stenoevents'},
		            	{'menuitem': 'Circulars Entry', 'iconclass': 'icon-classroom', 'href': '/stenocircular'},
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;
                // data.add(new Item("Fees Events", R.drawable.fees,".FeesEventsActivity"));
                // data.add(new Item("Branch Events", R.drawable.branches,".BranchEventsActivity"));
                // data.add(new Item("Exam Events", R.drawable.exam,".ExamEventsActivity"));
                // data.add(new Item("Placement Events", R.drawable.placement,".PlacementEventsActivity"));
                // data.add(new Item("Sports Events", R.drawable.sports,".SportsEventsActivity"));
                // data.add(new Item("NSS Events", R.drawable.nss,".NSSEventsActivity"));
                // data.add(new Item("Management Events", R.drawable.events,".ManagementEventsActivity"));
                // data.add(new Item("Fees Circular", R.drawable.circulars,".FeesCircularActivity"));
                // data.add(new Item("Branch Circular", R.drawable.circulars,".BranchCircularActivity"));
                // data.add(new Item("Exam Circular", R.drawable.circulars,".ExamCircularActivity"));
                // data.add(new Item("Placement Circular", R.drawable.circulars,".PlacementCircularActivity"));
                // data.add(new Item("Sports Circular", R.drawable.circulars,".SportsCircularActivity"));
                // data.add(new Item("Management Circular", R.drawable.circulars,".ManagementCircularActivity"));
                // data.add(new Item("Reports", R.drawable.reports,".OfficeStenoReportsActivity"));
                break;

            //case "Office Stores":
            case "OSTO":
            	menulist = [
		            	
		            	{'menuitem': 'Stores Vendor', 'iconclass': 'icon-classroom', 'href': '/vendordetails'},
		            	{'menuitem': 'Stores Purchase', 'iconclass': 'icon-classroom', 'href': '/storespurchase'},
		            	{'menuitem': 'Stores Sales', 'iconclass': 'icon-classroom', 'href': '/storessales'},
		            	{'menuitem': 'Stores Return', 'iconclass': 'icon-classroom', 'href': '/storesreturn'},
		            	{'menuitem': 'Stock Details', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;		            	
                // data.add(new Item("Stores Vendor", R.drawable.vendor,".VendorDetailsFragment"));
                // data.add(new Item("Stores Purchase", R.drawable.stores,".PurchaseFragment"));
                // data.add(new Item("Stores Sales", R.drawable.sale,".SalesFragment "));
                // data.add(new Item("Reports", R.drawable.reports,".OfficeManagerReportsActivity"));

                break;
            //case "Office Transport" :
            case "OTRAN" :
            	menulist = [
		            	
		            	{'menuitem': 'Transport ID', 'iconclass': 'icon-classroom', 'href': '/transportidcard'},
		            	{'menuitem': 'Route Change', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'MTC Concession', 'iconclass': 'icon-classroom', 'href': '/mtcconcession'},
		            	{'menuitem': 'Train Concession', 'iconclass': 'icon-classroom', 'href': '/trainconcession'},
		            	{'menuitem': 'Route Verification', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Fuel Filling', 'iconclass': 'icon-classroom', 'href': '/fuelfilling'},
		            	{'menuitem': 'Transport Insurance', 'iconclass': 'icon-classroom', 'href': '/transportinsurance'},
		            	{'menuitem': 'Transport FC', 'iconclass': 'icon-classroom', 'href': '/transportfc'},
		            	{'menuitem': 'Driver Data', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Requirement Request', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;                
                // data.add(new Item("Transport ID", R.drawable.idcard,".TransportIdFragment"));
                // data.add(new Item("Route Change", R.drawable.admission,".RouteChangeFragment"));
                // data.add(new Item("MTC Concession", R.drawable.admission,".MTCConcessionFragment"));
                // data.add(new Item("Train Concession", R.drawable.admission,".TrainConcessionFragment"));
                // data.add(new Item("Route Verification", R.drawable.admission,".RouteVerificationFragment"));
                // data.add(new Item("Fuel Filling", R.drawable.fuel,".FuelFillingFragment"));
                // data.add(new Item("Transport Insurance", R.drawable.admission,".TransportInsuranceFragment"));
                // data.add(new Item("Transport FC", R.drawable.admission,".TransportFCFragment"));
                // data.add(new Item("Driver Data", R.drawable.driver,".DriverDataFragment"));
                // data.add(new Item("Requirement Request", R.drawable.requiredkit,".TransRequirementReqFragment"));
                // data.add(new Item("Reports", R.drawable.reports,".TransReportFragment"));
                break;



            //case "Teaching Staff":
            case "TSTAFF":
            	menulist = [
		            	
		            	{'menuitem': 'Student Attendance', 'iconclass': 'icon-classroom', 'href': '/studentattendance'},
		            	{'menuitem': 'Exam Mark Entry', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'View Internal Mark', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Time Table', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Home Work Entry', 'iconclass': 'icon-classroom', 'href': '/studenthomework'},
		            	{'menuitem': 'Question Entry', 'iconclass': 'icon-classroom', 'href': '/questionentry'},
		            	{'menuitem': 'Requirements Request', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Leave Request', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Events', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;                

                // data.add(new Item("Student Attendance", R.drawable.attendance,".TeachstaffStudAttEntryFragment"));
                // data.add(new Item("Exam Mark Entry", R.drawable.admission,".TSExamMarkEntryFragment"));
                // data.add(new Item("View Internal Mark", R.drawable.internal,".TSViewInternalFragment"));
                // data.add(new Item("Time Table", R.drawable.timetable,".TSTimeTableViewerFragment"));
                // data.add(new Item("Home Work Entry", R.drawable.homework,".HomeWOrkEntryFragment"));
                // data.add(new Item("Requirements Request", R.drawable.admission,".MaterialRequirementRequestFragment"));
                // data.add(new Item("Leave Request", R.drawable.leaveletter,".StaffLeaveRequestFragment"));
                // data.add(new Item("Events", R.drawable.events,".StaffEventsFragment"));
                // data.add(new Item("Reports", R.drawable.reports,".StaffReportsFragment"));

                break;


            case "HOD":
            	menulist = [
		            	
		            	{'menuitem': 'Student Attendance', 'iconclass': 'icon-classroom', 'href': '/studentattendance'},
		            	{'menuitem': 'Staff Attendance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Subject Entry', 'iconclass': 'icon-classroom', 'href': '/subjectentry'},
		            	{'menuitem': 'Subject Allocation', 'iconclass': 'icon-classroom', 'href': '/subjectallocation'},
		            	{'menuitem': 'Time Table', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Exam Time Table', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Exam Mark Entry', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'View Internal Mark', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Home Work Entry', 'iconclass': 'icon-classroom', 'href': '/studenthomework'},
		            	{'menuitem': 'Question Entry', 'iconclass': 'icon-classroom', 'href': '/questionentry'},
		            	{'menuitem': 'Question Set', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Attendance Entry Monitor', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Student Remarks', 'iconclass': 'icon-classroom', 'href': '/studentremarksentry'},
		            	{'menuitem': 'Staff Leave Approval', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Requirements Request', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Leave Request', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Events', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;                

                // data.add(new Item("Student Attendance", R.drawable.attendance,".StudentAttEntryActivity"));
                // data.add(new Item("Subject Entry", R.drawable.subject,".SubjectEntryActivity"));
                // data.add(new Item("Subject Allocation", R.drawable.subject,".SubjectAllocationActivity"));
                // data.add(new Item("Time Table", R.drawable.timetable,".TimeTableViewerActivity"));
                // data.add(new Item("Exam Time Table", R.drawable.exam,".ExamTimeTableActivity"));
                // data.add(new Item("Exam Mark Entry", R.drawable.exam,".ExamMarkEntryActivity"));
                // data.add(new Item("Question Set", R.drawable.question,".QuestionSetActivity"));
                // data.add(new Item("Attendance Entry Monitor", R.drawable.monitor,".AttEntryMonitorActivity"));
                // data.add(new Item("Student Remarks", R.drawable.admission,".StudentsRemarksActivity"));
                // data.add(new Item("Staff Leave Approval", R.drawable.approval,".StaffLeaveApprovalActivity"));
                // data.add(new Item("Home Work Entry", R.drawable.homework,".HomeWOrkEntryActivity"));
                // data.add(new Item("Requirements Request", R.drawable.admission,".MaterialRequirementRequestActivity"));
                // data.add(new Item("Leave Request", R.drawable.leaveletter,".StaffLeaveRequestActivity"));
                // data.add(new Item("Events", R.drawable.events,".StaffEventsActivity"));
                // data.add(new Item("Reports", R.drawable.reports,".StaffReportsActivity"));
                break;

            //case "Placement officer":
            case "PLO":
            	menulist = [
		            	
		            	{'menuitem': 'Corporates Detail', 'iconclass': 'icon-classroom', 'href': '/corporateentry'},
		            	{'menuitem': 'Campus Request', 'iconclass': 'icon-classroom', 'href': '/campusrequest'},
		            	{'menuitem': 'Schedules', 'iconclass': 'icon-classroom', 'href': '/campusscheduler'},
		            	{'menuitem': 'Followup', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Job Links', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;
                // data.add(new Item("Corporates Detail", R.drawable.corporates,".CorporateDetActivity"));
                // data.add(new Item("Campus Request", R.drawable.campusreq,".CampusReqActivity"));
                // data.add(new Item("Schedules", R.drawable.schedule,".SchedulesActivity"));
                // data.add(new Item("Followup", R.drawable.follow,".FollowupActivity"));
                // data.add(new Item("Seminars", R.drawable.seminars,".SeminarsActivity"));
                // data.add(new Item("Inplant Training", R.drawable.inplant,".InplantActivity"));
                // data.add(new Item("Job Links", R.drawable.joblink,".JobLinksActivity"));
                // data.add(new Item("Reports", R.drawable.reports,".PlacementReportsActivity"));

                break;

            //case "Sports":
            case "SPRT":
            	menulist = [
		            	
		            	{'menuitem': 'Athelete Data', 'iconclass': 'icon-classroom', 'href': '/sportsathelete'},
		            	{'menuitem': 'Tournament Data', 'iconclass': 'icon-classroom', 'href': '/tournamentdata'},
		            	{'menuitem': 'Kits Stock', 'iconclass': 'icon-classroom', 'href': '/sportskitsstock'},
		            	{'menuitem': 'Kits Requirement', 'iconclass': 'icon-classroom', 'href': '/login'},
		            	{'menuitem': 'Kits Purchase', 'iconclass': 'icon-classroom', 'href': '/sportskitspurchase'},
		            	{'menuitem': 'O.D.Form', 'iconclass': 'icon-classroom', 'href': '/sportsod'},//NEED TO DESIGN
		            	{'menuitem': 'Physical Director Details', 'iconclass': 'icon-classroom', 'href': '/sportspddetail'},
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;

                // data.add(new Item("Athelete Data", R.drawable.athlete,".AtheleteDataActivity"));
                // data.add(new Item("Tournament Data", R.drawable.tournament,".TournamentDataActivity"));
                // data.add(new Item("Kits Stock", R.drawable.stockkit,".KitsStockActivity"));
                // data.add(new Item("Kits Requirement", R.drawable.requiredkit,".KitsReqActivity"));
                // data.add(new Item("O.D.Form", R.drawable.leaveletter,".ODFormActivity"));
                // data.add(new Item("Reports", R.drawable.reports,".SportsReportsActivity"));

                break;

            //case "Library":
            case "LIB":
            	menulist = [
		            	
		            	{'menuitem': 'Member Data', 'iconclass': 'icon-classroom', 'href': '/librarymemberdetail'},
		            	{'menuitem': 'Books Data', 'iconclass': 'icon-classroom', 'href': '/librarybookentry'},
		            	{'menuitem': 'CD Data', 'iconclass': 'icon-classroom', 'href': '/librarycdentry'},
		            	{'menuitem': 'Magazines Data', 'iconclass': 'icon-classroom', 'href': '/librarymagazineentry'},
		            	{'menuitem': 'Books Purchase', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Books Availability', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Issuing Books', 'iconclass': 'icon-classroom', 'href': '/librarybookissuereturn'},
		            	{'menuitem': 'Returning Books', 'iconclass': 'icon-classroom', 'href': '/librarybookissuereturn'},
		            	{'menuitem': 'Library Usage', 'iconclass': 'icon-classroom', 'href': '/libraryusage'},
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;

                // data.add(new Item("Member Data", R.drawable.profile,".LibMemberDataFragment"));
                // data.add(new Item("Books Data", R.drawable.book,".LibBooksDataFragment"));
                // data.add(new Item("CD Data", R.drawable.cd,".LibCDDataFragment"));
                // data.add(new Item("Magazines Data", R.drawable.magazine,".MagazinesDataFragment"));
                // data.add(new Item("Books Purchase", R.drawable.purchase,".BooksPurchaseFragment"));
                // data.add(new Item("Books Availability", R.drawable.admission,".BooksAvailFragment"));
                // data.add(new Item("Issuing Books", R.drawable.admission,".IssuingBooksFragment"));
                // data.add(new Item("Returning Books", R.drawable.returnbook,".ReturningBooksFragment"));
                // data.add(new Item("Library Usage", R.drawable.admission,".LibraryUsageFragment"));
                // data.add(new Item("Reports", R.drawable.reports,".LibraryReportsfragment"));

                break;

            //case "Hostel":
            case "HOS":
            	menulist = [
		            	
		            	{'menuitem': 'Student Data', 'iconclass': 'icon-classroom', 'href': '/hostelstudent'},
		            	{'menuitem': 'Facilities Data', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Payment Data', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Leave Data', 'iconclass': 'icon-classroom', 'href': '/hostelstudentleave'},
		            	{'menuitem': 'Visitor Data', 'iconclass': 'icon-classroom', 'href': '/hostelstudentvisitor'},
		            	{'menuitem': 'Food Data', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Medical Data', 'iconclass': 'icon-classroom', 'href': '/firstaid'},
		            	{'menuitem': 'Remarks', 'iconclass': 'icon-classroom', 'href': '/studentremarksentry'},
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;

                // data.add(new Item("Student Data", R.drawable.student,".HostelStudDataFragment"));
                // data.add(new Item("Facilities Data", R.drawable.facility,".HostelFacilitiesDataFragment"));
                // data.add(new Item("Payment Data", R.drawable.feespayment,".HostelPayDataFragment"));
                // data.add(new Item("Leave Data", R.drawable.leaveletter,".HostelStudLeaveDataFragment"));
                // data.add(new Item("Visitor Data", R.drawable.visitor,".HostelVisitorDataFragment"));
                // data.add(new Item("Food Data", R.drawable.food,".HostelFoodDataFragment"));
                // data.add(new Item("Medical Data", R.drawable.medical,".HostelMedicalDataFragment"));
                // data.add(new Item("Remarks", R.drawable.admission,".HostelStudRemFragment"));
                // data.add(new Item("Reports", R.drawable.reports,".HostelReportsFragment"));

                break;

            //case "Parent":
            case "STUD":
            	menulist = [
		            	
		            	{'menuitem': 'Profile', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Daily Attendance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Test Performance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Exam Performance', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Fees Payment', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Home Work', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Leave Request', 'iconclass': 'icon-classroom', 'href': '/studentleaveletter'},
		            	{'menuitem': 'Events', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Remarks', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;
                // data.add(new Item("Profile", R.drawable.profile,".ParentProfileFragment"));
                // data.add(new Item("Daily Attendance", R.drawable.attendance,".ParentDailyAttfragment"));
                // data.add(new Item("Test Performance", R.drawable.performance,".ParentTestPerFragment"));
                // data.add(new Item("Exam Performance", R.drawable.performance,".ParentExamPerFragment"));
                // data.add(new Item("Fees Payment", R.drawable.feespayment,".ParentFeesPaymentFragment"));
                // data.add(new Item("Home Work", R.drawable.homework,".ParentHomeWorkFragment"));
                // data.add(new Item("Leave Request", R.drawable.leaveletter,".ParentLeaveReqFragment"));
                // data.add(new Item("Events", R.drawable.events,".ParentEventFragment"));
                // data.add(new Item("Feed Back", R.drawable.feedback,".ParentFeedBackFragment"));
                // data.add(new Item("Remarks", R.drawable.admission,".ParentRemarksFragment"));

                break;

            //case "System Admin":
            case "SYSADM":
            	menulist = [
		            	
		            	{'menuitem': 'Add User', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Modify User', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Remove User', 'iconclass': 'icon-classroom', 'href': '/login'},//NEED TO DESIGN
		            	{'menuitem': 'Reports', 'iconclass': 'icon-classroom', 'href': '/login'}//NEED TO DESIGN
            		];
            	return menulist;

                // data.add(new Item("Add User", R.drawable.adduser,".AddUserFragment"));
                // data.add(new Item("Modify User",R.drawable.edituser,".ModifyUserFragment"));
                // data.add(new Item("Remove User", R.drawable.relievestaff,".RemoveUserFragment"));
                // data.add(new Item("Reports", R.drawable.reports,".SysAdminReportsFragment"));

                break;
        }
		return role;
	}

});