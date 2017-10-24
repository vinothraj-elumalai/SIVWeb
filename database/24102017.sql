--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: admissioncounselling; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE admissioncounselling (
    applno character varying(255) NOT NULL,
    admissionno character varying(255),
    admissiontype character varying(255),
    allotedcourse character varying(255),
    branchcode character varying(255),
    counsellingdate timestamp without time zone,
    counsellingstatus character varying(255),
    followupdate timestamp without time zone,
    food character varying(255),
    hostel character varying(255),
    loginuser character varying(255),
    remarks character varying(255),
    totalfees bigint,
    transport character varying(255),
    transportstage character varying(255),
    couns_applno character varying(255) NOT NULL
);


ALTER TABLE admissioncounselling OWNER TO postgres;

--
-- Name: allfeesbalance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE allfeesbalance (
    academicyear character varying(255) NOT NULL,
    regno character varying(255) NOT NULL,
    admissionfeesbalance bigint,
    batch character varying(255),
    branchcode character varying(255),
    foodfeesbalance bigint,
    groupinsurancefeesbalance bigint,
    hostelfeesbalance bigint,
    loginuser character varying(255),
    miscellaneousfeesbalance bigint,
    othersfeesbalance bigint,
    penaltyfeesbalance bigint,
    previousbalancefeesbalance bigint,
    semester character varying(255),
    specialfeesbalance bigint,
    textbookstationaryfeesbalance bigint,
    totalfeesbalance bigint,
    transport_feesbalance bigint,
    tuitionfeesbalance bigint
);


ALTER TABLE allfeesbalance OWNER TO postgres;

--
-- Name: applicationfollowup; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE applicationfollowup (
    applicationno character varying(255) NOT NULL,
    alternative_mobileno character varying(255) NOT NULL,
    candidatename character varying(255) NOT NULL,
    currentdate timestamp without time zone NOT NULL,
    enquiry_no character varying(255) NOT NULL,
    fathername character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    mobileno character varying(255) NOT NULL,
    preferred_course character varying(255) NOT NULL,
    willingness character varying(255) NOT NULL
);


ALTER TABLE applicationfollowup OWNER TO postgres;

--
-- Name: applicationsale; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE applicationsale (
    applno character varying(255) NOT NULL,
    appfor character varying(255),
    applicationpaidmode character varying(255),
    applicationprice integer,
    candfathername character varying(255),
    candfirstname character varying(255),
    candlastname character varying(255),
    candmiddlename character varying(255),
    candmothername character varying(255),
    category character varying(255),
    followupdate timestamp without time zone,
    gender character varying(255),
    loginuser character varying(255),
    permanentaddress1 character varying(255),
    permanentaddress2 character varying(255),
    permanentaltemail character varying(255),
    permanentaltmobno character varying(255),
    permanentarea character varying(255),
    permanentemail character varying(255),
    permanentmobileno character varying(255),
    permanentpincode character varying(255),
    permanentstate character varying(255),
    prefferedcour1 character varying(255),
    prefferedcour2 character varying(255),
    prefferedcour3 character varying(255),
    presentaddress1 character varying(255),
    presentaddress2 character varying(255),
    presentaltemail character varying(255),
    presentaltmobno character varying(255),
    presentarea character varying(255),
    presentemail character varying(255),
    presentmobileno character varying(255),
    presentpincode character varying(255),
    presentstate character varying(255),
    qualified character varying(255),
    reference character varying(255),
    remarks character varying(255),
    saledate timestamp without time zone,
    willingtojoin character varying(255)
);


ALTER TABLE applicationsale OWNER TO postgres;

--
-- Name: atheletedetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE atheletedetail (
    id integer NOT NULL,
    areainsports character varying(255),
    athleteid character varying(255),
    house character varying(255),
    loginuser character varying(255),
    performancelevel character varying(255),
    sportscode character varying(255),
    typeofsports character varying(255),
    atheleteid character varying(255)
);


ALTER TABLE atheletedetail OWNER TO postgres;

--
-- Name: atheleteheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE atheleteheader (
    atheleteid character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    loginuser character varying(255),
    regno character varying(255),
    semester integer
);


ALTER TABLE atheleteheader OWNER TO postgres;

--
-- Name: batchdetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE batchdetails (
    batch character varying(255) NOT NULL,
    instituteid character varying(255)
);


ALTER TABLE batchdetails OWNER TO postgres;

--
-- Name: bformdetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE bformdetail (
    photoid character varying(255) NOT NULL,
    applicationno character varying(255) NOT NULL,
    percentage bigint NOT NULL,
    subject1 integer NOT NULL,
    subject2 integer NOT NULL,
    subject3 integer NOT NULL,
    total integer NOT NULL
);


ALTER TABLE bformdetail OWNER TO postgres;

--
-- Name: bformheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE bformheader (
    photoid character varying(255) NOT NULL,
    acadyear character varying(255) NOT NULL,
    allotedquota character varying(255) NOT NULL,
    applicationno character varying(255) NOT NULL,
    bcode character varying(255) NOT NULL,
    category character varying(255) NOT NULL,
    community character varying(255) NOT NULL,
    dob timestamp without time zone NOT NULL,
    gender character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    qualifiedexam character varying(255) NOT NULL,
    religion character varying(255) NOT NULL,
    remarks character varying(255) NOT NULL,
    semester integer NOT NULL,
    slno integer NOT NULL,
    state character varying(255) NOT NULL,
    yearofpass character varying(255) NOT NULL,
    applno character varying(255) NOT NULL,
    regno character varying(255)
);


ALTER TABLE bformheader OWNER TO postgres;

--
-- Name: bonafide; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE bonafide (
    bonafideid character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    branchcode character varying(255),
    branchname character varying(255),
    certificatefor character varying(255),
    fathername character varying(255),
    issueddate timestamp without time zone,
    loginuser character varying(255),
    name character varying(255),
    noofyears integer,
    regno character varying(255),
    semester character varying(255)
);


ALTER TABLE bonafide OWNER TO postgres;

--
-- Name: branchdetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE branchdetails (
    inscode character varying(10),
    branchcode character varying(10),
    branch character varying(255),
    loginuser character varying(25)
);


ALTER TABLE branchdetails OWNER TO postgres;

--
-- Name: busdetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE busdetail (
    department character varying(255) NOT NULL,
    student_id integer NOT NULL,
    busno character varying(255) NOT NULL,
    drivername character varying(255) NOT NULL,
    seatno character varying(255) NOT NULL
);


ALTER TABLE busdetail OWNER TO postgres;

--
-- Name: campusrequestdetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE campusrequestdetail (
    id integer NOT NULL,
    branchcode character varying(255),
    numberofstudents integer,
    requestid character varying(255),
    semester integer,
    studentcategory character varying(255),
    typeofstudent character varying(255)
);


ALTER TABLE campusrequestdetail OWNER TO postgres;

--
-- Name: campusrequestheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE campusrequestheader (
    requestid character varying(255) NOT NULL,
    academicyear character varying(255),
    campusreqfromdate timestamp without time zone,
    campusreqtodate timestamp without time zone,
    corporateid character varying(255),
    entrydate timestamp without time zone,
    followupdate timestamp without time zone,
    loginuser character varying(255),
    remarks character varying(255),
    requesttype character varying(255)
);


ALTER TABLE campusrequestheader OWNER TO postgres;

--
-- Name: campusscheduler; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE campusscheduler (
    scheduleid character varying(255) NOT NULL,
    loginuser character varying(255),
    remarks character varying(255),
    scheduledate timestamp without time zone,
    scheduleday character varying(255),
    typeofevent character varying(255)
);


ALTER TABLE campusscheduler OWNER TO postgres;

--
-- Name: certificatesubmission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE certificatesubmission (
    regno character varying(255) NOT NULL,
    academic_year character varying(255),
    admissionno character varying(255),
    branch character varying(255),
    branch_code character varying(255),
    candidatename character varying(255),
    community_certificate_sl_no character varying(255),
    communitycertificatesubmitted boolean,
    conduct_certificate_sl_no character varying(255),
    conductcertificatesubmitted boolean,
    foloi_no character varying(255),
    login_user character varying(255),
    marksheet_sl_no character varying(255),
    marksheetsubmitted boolean,
    migration_certificate_sl_no character varying(255),
    migrationcertificatesubmitted boolean,
    pass_port_photosubmitted boolean,
    passport_size_photo_copies integer,
    semester integer,
    stamp_size_photo_copies integer,
    stamp_size_photosubmitted boolean,
    student_type character varying(255),
    transfer_certificate_sl_no character varying(255),
    transfercertificatesubmitted boolean,
    xerox_community_certificate_copies integer,
    xerox_communitycertificatesubmitted boolean,
    xerox_marksheet_copies integer,
    xerox_transfer_certificate_copies integer,
    xerox_transfercertificatesubmitted boolean,
    xeroxmarksheetsubmitted boolean,
    student_certificate_regno character varying(255) NOT NULL
);


ALTER TABLE certificatesubmission OWNER TO postgres;

--
-- Name: collegefeessetting; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE collegefeessetting (
    academicyear character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    admissionfees bigint,
    feessettingdate timestamp without time zone,
    groupinsurance bigint,
    loginuser character varying(255),
    miscalleneousfees bigint,
    others bigint,
    specialfees bigint,
    textbookfees bigint,
    totalfees bigint,
    tutionfees bigint
);


ALTER TABLE collegefeessetting OWNER TO postgres;

--
-- Name: corporatedetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE corporatedetail (
    id integer NOT NULL,
    corporateid character varying(255),
    required_branch_code character varying(255),
    required_student_category character varying(255)
);


ALTER TABLE corporatedetail OWNER TO postgres;

--
-- Name: corporateheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE corporateheader (
    corporateid character varying(255) NOT NULL,
    corporatename character varying(255),
    corporatetype character varying(255),
    hralternatecontactno character varying(255),
    hraltmailid character varying(255),
    hrcontactnumber character varying(255),
    hrmailid character varying(255),
    hrname character varying(255),
    loginuser character varying(255)
);


ALTER TABLE corporateheader OWNER TO postgres;

--
-- Name: current_academic_student_actual_fees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE current_academic_student_actual_fees (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionfees bigint,
    admissionno character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    foodfees bigint,
    groupinsurancefees bigint,
    hostelfees bigint,
    loginuser character varying(255),
    miscellaneousfees bigint,
    othersfees bigint,
    penaltyfees bigint,
    previousbalancefees bigint,
    semester character varying(255),
    specialfees bigint,
    textbookstationaryfees bigint,
    totalfees bigint,
    transport_fees bigint,
    tuitionfees bigint,
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE current_academic_student_actual_fees OWNER TO postgres;

--
-- Name: current_academic_student_balance_fees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE current_academic_student_balance_fees (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionfeesbalance bigint,
    batch character varying(255),
    branchcode character varying(255),
    foodfeesbalance bigint,
    groupinsurancefeesbalance bigint,
    hostelfeesbalance bigint,
    loginuser character varying(255),
    miscellaneousfeesbalance bigint,
    othersfeesbalance bigint,
    penaltyfeesbalance bigint,
    previousbalancefeesbalance bigint,
    semester character varying(255),
    specialfeesbalance bigint,
    textbookstationaryfeesbalance bigint,
    totalfeesbalance bigint,
    transport_feesbalance bigint,
    tuitionfeesbalance bigint,
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE current_academic_student_balance_fees OWNER TO postgres;

--
-- Name: current_academic_student_fees_payment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE current_academic_student_fees_payment (
    billno character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    admnfeesbal bigint,
    admnfeespaid bigint,
    admnfeestot bigint,
    bankname character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    chequedate timestamp without time zone,
    chequeno bigint,
    date timestamp without time zone,
    duedate timestamp without time zone,
    foodfeesbal bigint,
    foodfeespaid bigint,
    foodfeestot bigint,
    groupinsurancebal bigint,
    groupinsurancepaid bigint,
    groupinsurancetot bigint,
    hostfeesbal bigint,
    hostfeespaid bigint,
    hostfeestot bigint,
    loginuser character varying(255),
    miscfeesbal bigint,
    miscfeespaid bigint,
    miscfeestot bigint,
    noofprint bigint,
    oldbalancebal bigint,
    oldbalancepaid bigint,
    oldbalancetot bigint,
    othersfeesbal bigint,
    othersfeespaid bigint,
    othersfeestot bigint,
    paymentmethod character varying(255),
    penaltyfeesbal bigint,
    penaltyfeespaid bigint,
    penaltyfeestot bigint,
    regno character varying(255),
    semester character varying(255),
    splfeesbal bigint,
    splfeespaid bigint,
    splfeestot bigint,
    totfeesbal bigint,
    totfeespaid bigint,
    totfeestot bigint,
    transfeesbal bigint,
    transfeespaid bigint,
    transfeestot bigint,
    tutionfeesbal bigint,
    tutionfeespaid bigint,
    tutionfeestot bigint,
    txtbookfeesbal bigint,
    txtbookfeespaid bigint,
    txtbookfeestot bigint
);


ALTER TABLE current_academic_student_fees_payment OWNER TO postgres;

--
-- Name: diploma_first_year_bform_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diploma_first_year_bform_detail (
    applno character varying(255) NOT NULL,
    percentage bigint,
    photoid character varying(255),
    regno character varying(255),
    subject1 integer,
    subject2 integer,
    subject3 integer,
    total integer,
    bform_det_applno character varying(255) NOT NULL
);


ALTER TABLE diploma_first_year_bform_detail OWNER TO postgres;

--
-- Name: diploma_first_year_bform_header; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diploma_first_year_bform_header (
    applno character varying(255) NOT NULL,
    acadyear character varying(255),
    allotedquota character varying(255),
    bcode character varying(255),
    category character varying(255),
    community character varying(255),
    dob timestamp without time zone,
    gender character varying(255),
    loginuser character varying(255),
    name character varying(255),
    photoid character varying(255),
    qualifiedexam character varying(255),
    regno character varying(255),
    religion character varying(255),
    remarks character varying(255),
    semester integer,
    slno integer,
    state character varying(255),
    yearofpass character varying(255),
    bform_head_applno character varying(255) NOT NULL
);


ALTER TABLE diploma_first_year_bform_header OWNER TO postgres;

--
-- Name: diplomabranchboardexamtimetableheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomabranchboardexamtimetableheader (
    academicyear character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    semester character varying(255) NOT NULL,
    entrydate timestamp without time zone,
    loginuser character varying(255),
    maxmarks integer,
    monthandyearofexam character varying(255),
    subject1codeno character varying(255),
    subject1colno integer,
    subject1test_date timestamp without time zone,
    subject1test_day character varying(255),
    subject2codeno character varying(255),
    subject2colno integer,
    subject2test_date timestamp without time zone,
    subject2test_day character varying(255),
    subject3codeno character varying(255),
    subject3colno integer,
    subject3test_date timestamp without time zone,
    subject3test_day character varying(255),
    subject4codeno character varying(255),
    subject4colno integer,
    subject4test_date timestamp without time zone,
    subject4test_day character varying(255),
    subject5codeno character varying(255),
    subject5colno integer,
    subject5test_date timestamp without time zone,
    subject5test_day character varying(255),
    subject6codeno character varying(255),
    subject6colno integer,
    subject6test_date timestamp without time zone,
    subject6test_day character varying(255),
    subject7codeno character varying(255),
    subject7colno integer,
    subject7test_date timestamp without time zone,
    subject7test_day character varying(255)
);


ALTER TABLE diplomabranchboardexamtimetableheader OWNER TO postgres;

--
-- Name: diplomabranchsem3boardexamtimetabledetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomabranchsem3boardexamtimetabledetail (
    regno character varying(255) NOT NULL,
    overall_result character varying(255),
    admissionno character varying(255),
    monthandyearofexam character varying(255),
    rank integer,
    subject1attendance character(1),
    subject1ext_mark integer,
    subject1int_mark integer,
    subject1result character varying(255),
    subject1tot_mark integer,
    subject2attendance character(1),
    subject2ext_mark integer,
    subject2int_mark integer,
    subject2result character varying(255),
    subject2tot_mark integer,
    subject3attendance character(1),
    subject3ext_mark integer,
    subject3int_mark integer,
    subject3result character varying(255),
    subject3tot_mark integer,
    subject4attendance character(1),
    subject4ext_mark integer,
    subject4int_mark integer,
    subject4result character varying(255),
    subject4tot_mark integer,
    subject5attendance character(1),
    subject5ext_mark integer,
    subject5int_mark integer,
    subject5result character varying(255),
    subject5tot_mark integer,
    subject6attendance character(1),
    subject6ext_mark integer,
    subject6int_mark integer,
    subject6result character varying(255),
    subject6tot_mark integer,
    subject7attendance character(1),
    subject7ext_mark integer,
    subject7int_mark integer,
    subject7result character varying(255),
    subject7tot_mark integer,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    semester character varying(255),
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE diplomabranchsem3boardexamtimetabledetail OWNER TO postgres;

--
-- Name: diplomabranchsem4boardexamtimetabledetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomabranchsem4boardexamtimetabledetail (
    regno character varying(255) NOT NULL,
    overall_result character varying(255),
    admissionno character varying(255),
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    semester character varying(255),
    monthandyearofexam character varying(255),
    rank integer,
    subject1attendance character(1),
    subject1ext_mark integer,
    subject1int_mark integer,
    subject1result character varying(255),
    subject1tot_mark integer,
    subject2attendance character(1),
    subject2ext_mark integer,
    subject2int_mark integer,
    subject2result character varying(255),
    subject2tot_mark integer,
    subject3attendance character(1),
    subject3ext_mark integer,
    subject3int_mark integer,
    subject3result character varying(255),
    subject3tot_mark integer,
    subject4attendance character(1),
    subject4ext_mark integer,
    subject4int_mark integer,
    subject4result character varying(255),
    subject4tot_mark integer,
    subject5attendance character(1),
    subject5ext_mark integer,
    subject5int_mark integer,
    subject5result character varying(255),
    subject5tot_mark integer,
    subject6attendance character(1),
    subject6ext_mark integer,
    subject6int_mark integer,
    subject6result character varying(255),
    subject6tot_mark integer,
    subject7attendance character(1),
    subject7ext_mark integer,
    subject7int_mark integer,
    subject7result character varying(255),
    subject7tot_mark integer,
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE diplomabranchsem4boardexamtimetabledetail OWNER TO postgres;

--
-- Name: diplomabranchsem5boardexamtimetabledetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomabranchsem5boardexamtimetabledetail (
    regno character varying(255) NOT NULL,
    overall_result character varying(255),
    admissionno character varying(255),
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    semester character varying(255),
    monthandyearofexam character varying(255),
    rank integer,
    subject1attendance character(1),
    subject1ext_mark integer,
    subject1int_mark integer,
    subject1result character varying(255),
    subject1tot_mark integer,
    subject2attendance character(1),
    subject2ext_mark integer,
    subject2int_mark integer,
    subject2result character varying(255),
    subject2tot_mark integer,
    subject3attendance character(1),
    subject3ext_mark integer,
    subject3int_mark integer,
    subject3result character varying(255),
    subject3tot_mark integer,
    subject4attendance character(1),
    subject4ext_mark integer,
    subject4int_mark integer,
    subject4result character varying(255),
    subject4tot_mark integer,
    subject5attendance character(1),
    subject5ext_mark integer,
    subject5int_mark integer,
    subject5result character varying(255),
    subject5tot_mark integer,
    subject6attendance character(1),
    subject6ext_mark integer,
    subject6int_mark integer,
    subject6result character varying(255),
    subject6tot_mark integer,
    subject7attendance character(1),
    subject7ext_mark integer,
    subject7int_mark integer,
    subject7result character varying(255),
    subject7tot_mark integer,
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE diplomabranchsem5boardexamtimetabledetail OWNER TO postgres;

--
-- Name: diplomabranchsem6boardexamtimetabledetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomabranchsem6boardexamtimetabledetail (
    regno character varying(255) NOT NULL,
    overall_result character varying(255),
    admissionno character varying(255),
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    semester character varying(255),
    monthandyearofexam character varying(255),
    rank integer,
    subject1attendance character(1),
    subject1ext_mark integer,
    subject1int_mark integer,
    subject1result character varying(255),
    subject1tot_mark integer,
    subject2attendance character(1),
    subject2ext_mark integer,
    subject2int_mark integer,
    subject2result character varying(255),
    subject2tot_mark integer,
    subject3attendance character(1),
    subject3ext_mark integer,
    subject3int_mark integer,
    subject3result character varying(255),
    subject3tot_mark integer,
    subject4attendance character(1),
    subject4ext_mark integer,
    subject4int_mark integer,
    subject4result character varying(255),
    subject4tot_mark integer,
    subject5attendance character(1),
    subject5ext_mark integer,
    subject5int_mark integer,
    subject5result character varying(255),
    subject5tot_mark integer,
    subject6attendance character(1),
    subject6ext_mark integer,
    subject6int_mark integer,
    subject6result character varying(255),
    subject6tot_mark integer,
    subject7attendance character(1),
    subject7ext_mark integer,
    subject7int_mark integer,
    subject7result character varying(255),
    subject7tot_mark integer,
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE diplomabranchsem6boardexamtimetabledetail OWNER TO postgres;

--
-- Name: diplomafirstsemboardexamtimetabledetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomafirstsemboardexamtimetabledetail (
    regno character varying(255) NOT NULL,
    overall_result character varying(255),
    admissionno character varying(255),
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    semester character varying(255),
    monthandyearofexam character varying(255),
    rank integer,
    subject1attendance character(1),
    subject1ext_mark integer,
    subject1int_mark integer,
    subject1result character varying(255),
    subject1tot_mark integer,
    subject2attendance character(1),
    subject2ext_mark integer,
    subject2int_mark integer,
    subject2result character varying(255),
    subject2tot_mark integer,
    subject3attendance character(1),
    subject3ext_mark integer,
    subject3int_mark integer,
    subject3result character varying(255),
    subject3tot_mark integer,
    subject4attendance character(1),
    subject4ext_mark integer,
    subject4int_mark integer,
    subject4result character varying(255),
    subject4tot_mark integer,
    subject5attendance character(1),
    subject5ext_mark integer,
    subject5int_mark integer,
    subject5result character varying(255),
    subject5tot_mark integer,
    subject6attendance character(1),
    subject6ext_mark integer,
    subject6int_mark integer,
    subject6result character varying(255),
    subject6tot_mark integer,
    subject7attendance character(1),
    subject7ext_mark integer,
    subject7int_mark integer,
    subject7result character varying(255),
    subject7tot_mark integer,
    subject8attendance character(1),
    subject8ext_mark integer,
    subject8int_mark integer,
    subject8result character varying(255),
    subject8tot_mark integer,
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE diplomafirstsemboardexamtimetabledetail OWNER TO postgres;

--
-- Name: diplomafirstyearboardexamtimetableheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomafirstyearboardexamtimetableheader (
    academicyear character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    semester character varying(255) NOT NULL,
    entrydate timestamp without time zone,
    loginuser character varying(255),
    maxmarks integer,
    monthandyearofexam character varying(255),
    subject1codeno character varying(255),
    subject1colno integer,
    subject1test_date timestamp without time zone,
    subject1test_day character varying(255),
    subject2codeno character varying(255),
    subject2colno integer,
    subject2test_date timestamp without time zone,
    subject2test_day character varying(255),
    subject3codeno character varying(255),
    subject3colno integer,
    subject3test_date timestamp without time zone,
    subject3test_day character varying(255),
    subject4codeno character varying(255),
    subject4colno integer,
    subject4test_date timestamp without time zone,
    subject4test_day character varying(255),
    subject5codeno character varying(255),
    subject5colno integer,
    subject5test_date timestamp without time zone,
    subject5test_day character varying(255),
    subject6codeno character varying(255),
    subject6colno integer,
    subject6test_date timestamp without time zone,
    subject6test_day character varying(255),
    subject7codeno character varying(255),
    subject7colno integer,
    subject7test_date timestamp without time zone,
    subject7test_day character varying(255),
    subject8codeno character varying(255),
    subject8colno integer,
    subject8test_date timestamp without time zone,
    subject8test_day character varying(255)
);


ALTER TABLE diplomafirstyearboardexamtimetableheader OWNER TO postgres;

--
-- Name: diplomainternalbranchtesttimetabledetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomainternalbranchtesttimetabledetail (
    id integer NOT NULL,
    overall_result character varying(255),
    admissionno character varying(255),
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    semester character varying(255),
    testtype character varying(255),
    rank integer,
    regno character varying(255),
    subject1attendance character(1),
    subject1mark integer,
    subject1result character varying(255),
    subject2attendance character(1),
    subject2mark integer,
    subject2result character varying(255),
    subject3attendance character(1),
    subject3mark integer,
    subject3result character varying(255),
    subject4attendance character(1),
    subject4mark integer,
    subject4result character varying(255)
);


ALTER TABLE diplomainternalbranchtesttimetabledetail OWNER TO postgres;

--
-- Name: diplomainternalbranchtesttimetableheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomainternalbranchtesttimetableheader (
    academicyear character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    semester character varying(255) NOT NULL,
    testtype character varying(255) NOT NULL,
    entrydate timestamp without time zone,
    loginuser character varying(255),
    maxmarks integer,
    subject1codeno character varying(255),
    subject1colno integer,
    subject1test_date timestamp without time zone,
    subject1test_day character varying(255),
    subject2codeno character varying(255),
    subject2colno integer,
    subject2test_date timestamp without time zone,
    subject2test_day character varying(255),
    subject3codeno character varying(255),
    subject3colno integer,
    subject3test_date timestamp without time zone,
    subject3test_day character varying(255),
    subject4codeno character varying(255),
    subject4colno integer,
    subject4test_date timestamp without time zone,
    subject4test_day character varying(255)
);


ALTER TABLE diplomainternalbranchtesttimetableheader OWNER TO postgres;

--
-- Name: diplomainternalsem1testtimetabledetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomainternalsem1testtimetabledetail (
    testid integer NOT NULL,
    overall_result character varying(255),
    admissionno character varying(255),
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    semester character varying(255),
    testtype character varying(255),
    rank integer,
    regno character varying(255),
    subject1attendance character(1),
    subject1mark integer,
    subject1result character varying(255),
    subject2attendance character(1),
    subject2mark integer,
    subject2result character varying(255),
    subject3attendance character(1),
    subject3mark integer,
    subject3result character varying(255),
    subject4attendance character(1),
    subject4mark integer,
    subject4result character varying(255),
    subject5attendance character(1),
    subject5mark integer,
    subject5result character varying(255)
);


ALTER TABLE diplomainternalsem1testtimetabledetail OWNER TO postgres;

--
-- Name: diplomainternalsem1testtimetableheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomainternalsem1testtimetableheader (
    academicyear character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    semester character varying(255) NOT NULL,
    testtype character varying(255) NOT NULL,
    entrydate timestamp without time zone,
    loginuser character varying(255),
    maxmarks integer,
    subject1codeno character varying(255),
    subject1colno integer,
    subject1test_date timestamp without time zone,
    subject1test_day character varying(255),
    subject2codeno character varying(255),
    subject2colno integer,
    subject2test_date timestamp without time zone,
    subject2test_day character varying(255),
    subject3codeno character varying(255),
    subject3colno integer,
    subject3test_date timestamp without time zone,
    subject3test_day character varying(255),
    subject4codeno character varying(255),
    subject4colno integer,
    subject4test_date timestamp without time zone,
    subject4test_day character varying(255),
    subject5codeno character varying(255),
    subject5colno integer,
    subject5test_date timestamp without time zone,
    subject5test_day character varying(255)
);


ALTER TABLE diplomainternalsem1testtimetableheader OWNER TO postgres;

--
-- Name: diplomainternalsem2testtimetabledetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomainternalsem2testtimetabledetail (
    testid character varying(255) NOT NULL,
    overall_result character varying(255),
    admissionno character varying(255),
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    semester character varying(255),
    testtype character varying(255),
    rank integer,
    regno character varying(255),
    subject1attendance character(1),
    subject1mark integer,
    subject1result character varying(255),
    subject2attendance character(1),
    subject2mark integer,
    subject2result character varying(255),
    subject3attendance character(1),
    subject3mark integer,
    subject3result character varying(255),
    subject4attendance character(1),
    subject4mark integer,
    subject4result character varying(255),
    subject5attendance character(1),
    subject5mark integer,
    subject5result character varying(255),
    subject6attendance character(1),
    subject6mark integer,
    subject6result character varying(255)
);


ALTER TABLE diplomainternalsem2testtimetabledetail OWNER TO postgres;

--
-- Name: diplomainternalsem2testtimetableheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomainternalsem2testtimetableheader (
    academicyear character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    semester character varying(255) NOT NULL,
    testtype character varying(255) NOT NULL,
    entrydate timestamp without time zone,
    loginuser character varying(255),
    maxmarks integer,
    subject1codeno character varying(255),
    subject1colno integer,
    subject1test_date timestamp without time zone,
    subject1test_day character varying(255),
    subject2codeno character varying(255),
    subject2colno integer,
    subject2test_date timestamp without time zone,
    subject2test_day character varying(255),
    subject3codeno character varying(255),
    subject3colno integer,
    subject3test_date timestamp without time zone,
    subject3test_day character varying(255),
    subject4codeno character varying(255),
    subject4colno integer,
    subject4test_date timestamp without time zone,
    subject4test_day character varying(255),
    subject5codeno character varying(255),
    subject5colno integer,
    subject5test_date timestamp without time zone,
    subject5test_day character varying(255),
    subject6codeno character varying(255),
    subject6colno integer,
    subject6test_date timestamp without time zone,
    subject6test_day character varying(255)
);


ALTER TABLE diplomainternalsem2testtimetableheader OWNER TO postgres;

--
-- Name: diplomasecondsemboardexamtimetabledetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE diplomasecondsemboardexamtimetabledetail (
    regno character varying(255) NOT NULL,
    overall_result character varying(255),
    admissionno character varying(255),
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    semester character varying(255),
    monthandyearofexam character varying(255),
    rank integer,
    subject1attendance character(1),
    subject1ext_mark integer,
    subject1int_mark integer,
    subject1result character varying(255),
    subject1tot_mark integer,
    subject2attendance character(1),
    subject2ext_mark integer,
    subject2int_mark integer,
    subject2result character varying(255),
    subject2tot_mark integer,
    subject3attendance character(1),
    subject3ext_mark integer,
    subject3int_mark integer,
    subject3result character varying(255),
    subject3tot_mark integer,
    subject4attendance character(1),
    subject4ext_mark integer,
    subject4int_mark integer,
    subject4result character varying(255),
    subject4tot_mark integer,
    subject5attendance character(1),
    subject5ext_mark integer,
    subject5int_mark integer,
    subject5result character varying(255),
    subject5tot_mark integer,
    subject6attendance character(1),
    subject6ext_mark integer,
    subject6int_mark integer,
    subject6result character varying(255),
    subject6tot_mark integer,
    subject7attendance character(1),
    subject7ext_mark integer,
    subject7int_mark integer,
    subject7result character varying(255),
    subject7tot_mark integer,
    subject8attendance character(1),
    subject8ext_mark integer,
    subject8int_mark integer,
    subject8result character varying(255),
    subject8tot_mark integer,
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE diplomasecondsemboardexamtimetabledetail OWNER TO postgres;

--
-- Name: egovspellentry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE egovspellentry (
    academicyear character varying(255) NOT NULL,
    semester character varying(255) NOT NULL,
    spellno character varying(255) NOT NULL,
    fromdate timestamp without time zone,
    loginuser character varying(255),
    noofhours integer,
    todate timestamp without time zone
);


ALTER TABLE egovspellentry OWNER TO postgres;

--
-- Name: equivalencesubject; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE equivalencesubject (
    academicyear character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    newbranch character varying(255) NOT NULL,
    newbranchcode character varying(255) NOT NULL,
    newcolumnno character varying(255) NOT NULL,
    newscheme character varying(255) NOT NULL,
    newsemester character varying(255) NOT NULL,
    newsubjectcode character varying(255) NOT NULL,
    newsubjectname character varying(255) NOT NULL,
    oldbranch character varying(255) NOT NULL,
    oldbranchcode character varying(255) NOT NULL,
    oldcolumnno character varying(255) NOT NULL,
    oldscheme character varying(255) NOT NULL,
    oldsemester character varying(255) NOT NULL,
    oldsubjectcode character varying(255) NOT NULL,
    oldsubjectname character varying(255) NOT NULL
);


ALTER TABLE equivalencesubject OWNER TO postgres;

--
-- Name: ex2detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE ex2detail (
    questioncode character varying(255) NOT NULL,
    attendancestatus character varying(255) NOT NULL,
    regno character varying(255) NOT NULL
);


ALTER TABLE ex2detail OWNER TO postgres;

--
-- Name: ex2header; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE ex2header (
    examdate timestamp without time zone NOT NULL,
    academicyear character varying(255),
    branchcode character varying(255),
    columnno integer,
    examday character varying(255),
    examsession character varying(255),
    loginuser character varying(255),
    monthandyearofexam character varying(255),
    questioncode character varying(255),
    semester integer,
    subjectcode character varying(255),
    totalabsent integer,
    totalmalpractice integer,
    totalpresent integer
);


ALTER TABLE ex2header OWNER TO postgres;

--
-- Name: feesentrybase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE feesentrybase (
    academicyear character varying(255) NOT NULL,
    regno character varying(255) NOT NULL,
    admissionfees bigint,
    admissionno character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    foodfees bigint,
    groupinsurancefees bigint,
    hostelfees bigint,
    loginuser character varying(255),
    miscellaneousfees bigint,
    othersfees bigint,
    penaltyfees bigint,
    previousbalancefees bigint,
    semester character varying(255),
    specialfees bigint,
    textbookstationaryfees bigint,
    totalfees bigint,
    transport_fees bigint,
    tuitionfees bigint
);


ALTER TABLE feesentrybase OWNER TO postgres;

--
-- Name: feesfollowup; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE feesfollowup (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    balance bigint,
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    duedate timestamp without time zone,
    lastpaymtamount bigint,
    lastpaymtdate timestamp without time zone,
    loginuser character varying(255),
    remarks character varying(255),
    semester character varying(255),
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE feesfollowup OWNER TO postgres;

--
-- Name: feespayment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE feespayment (
    academicyear character varying(255) NOT NULL,
    regno character varying(255) NOT NULL,
    admissionno character varying(255),
    admnfeesbal bigint,
    admnfeespaid bigint,
    admnfeestot bigint,
    bankname character varying(255),
    billno character varying(255),
    branchcode character varying(255),
    branchname character varying(255),
    chequedate timestamp without time zone,
    chequeno bigint,
    date timestamp without time zone,
    duedate timestamp without time zone,
    foodfeesbal bigint,
    foodfeespaid bigint,
    foodfeestot bigint,
    groupinsurancebal bigint,
    groupinsurancepaid bigint,
    groupinsurancetot bigint,
    hostfeesbal bigint,
    hostfeespaid bigint,
    hostfeestot bigint,
    loginuser character varying(255),
    miscfeesbal bigint,
    miscfeespaid bigint,
    miscfeestot bigint,
    name character varying(255),
    noofprint bigint,
    oldbalancebal bigint,
    oldbalancepaid bigint,
    oldbalancetot bigint,
    othersfeesbal bigint,
    othersfeespaid bigint,
    othersfeestot bigint,
    paymentmethod character varying(255),
    penaltyfeesbal bigint,
    penaltyfeespaid bigint,
    penaltyfeestot bigint,
    semester character varying(255),
    splfeesbal bigint,
    splfeespaid bigint,
    splfeestot bigint,
    totfeesbal bigint,
    totfeespaid bigint,
    totfeestot bigint,
    transfeesbal bigint,
    transfeespaid bigint,
    transfeestot bigint,
    tutionfeesbal bigint,
    tutionfeespaid bigint,
    tutionfeestot bigint,
    txtbookfeesbal bigint,
    txtbookfeespaid bigint,
    txtbookfeestot bigint
);


ALTER TABLE feespayment OWNER TO postgres;

--
-- Name: firstaidentry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE firstaidentry (
    firstaidid character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    branchname character varying(255),
    currentdate timestamp without time zone,
    firstaiddetails character varying(255),
    hospitalfees bigint,
    hospitalname character varying(255),
    loginuser character varying(255),
    name character varying(255),
    reasonforfirstaid character varying(255),
    regno character varying(255),
    remarks character varying(255),
    semester character varying(255)
);


ALTER TABLE firstaidentry OWNER TO postgres;

--
-- Name: foodfeessetting; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE foodfeessetting (
    academicyear character varying(255) NOT NULL,
    feessettingdate timestamp without time zone,
    loginuser character varying(255),
    nonvegfoodfees bigint,
    vegfoodfees bigint
);


ALTER TABLE foodfeessetting OWNER TO postgres;

--
-- Name: for_contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE for_contact (
    regno character varying(255) NOT NULL,
    phoneno character varying(255),
    cont_regno character varying(255) NOT NULL
);


ALTER TABLE for_contact OWNER TO postgres;

--
-- Name: for_new; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE for_new (
    regno character varying(255) NOT NULL,
    department character varying(255),
    fees bigint,
    name character varying(255)
);


ALTER TABLE for_new OWNER TO postgres;

--
-- Name: for_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE for_user (
    regno character varying(255) NOT NULL,
    department character varying(255),
    fees bigint,
    name character varying(255)
);


ALTER TABLE for_user OWNER TO postgres;

--
-- Name: fuelfilling; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE fuelfilling (
    vehicleno character varying(255) NOT NULL,
    amount bigint,
    currentdate timestamp without time zone,
    driverid character varying(255),
    drivername character varying(255),
    fillingstation character varying(255),
    fillingstationmobno bigint,
    fillingtimekms bigint,
    lastfilleddate timestamp without time zone,
    lastfilledlitres character varying(255),
    lastfillingkms bigint,
    loginuser character varying(255),
    nooflitres character varying(255),
    totalkilometers bigint,
    vehicletype character varying(255)
);


ALTER TABLE fuelfilling OWNER TO postgres;

--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hibernate_sequence OWNER TO postgres;

--
-- Name: hostelfeessetting; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE hostelfeessetting (
    academicyear character varying(255) NOT NULL,
    feessettingdate timestamp without time zone,
    foodfees bigint,
    grouproomfees bigint,
    individualroomfees bigint,
    loginuser character varying(255),
    multicotfees bigint,
    others bigint,
    singlecotfees bigint,
    totalfees bigint
);


ALTER TABLE hostelfeessetting OWNER TO postgres;

--
-- Name: hostelstudentdetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE hostelstudentdetail (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    guardian1address1 character varying(255),
    guardian1address2 character varying(255),
    guardian1altemail character varying(255),
    guardian1altmobile character varying(255),
    guardian1area character varying(255),
    guardian1email character varying(255),
    guardian1mobile character varying(255),
    guardian1name character varying(255),
    guardian1pincode character varying(255),
    guardian1state character varying(255),
    guardian2address1 character varying(255),
    guardian2address2 character varying(255),
    guardian2altemail character varying(255),
    guardian2altmobile character varying(255),
    guardian2area character varying(255),
    guardian2email character varying(255),
    guardian2mobile character varying(255),
    guardian2name character varying(255),
    guardian2pincode character varying(255),
    guardian2state character varying(255),
    loginuser character varying(255),
    previoushosteladdress1 character varying(255),
    previoushosteladdress2 character varying(255),
    previoushostelaltemail character varying(255),
    previoushostelaltmobile character varying(255),
    previoushostelarea character varying(255),
    previoushostelemail character varying(255),
    previoushostelexperience character varying(255),
    previoushostelmobile character varying(255),
    previoushostelname character varying(255),
    previoushostelpincode character varying(255),
    previoushostelstate character varying(255),
    semester integer,
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE hostelstudentdetail OWNER TO postgres;

--
-- Name: hostelstudentleavedetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE hostelstudentleavedetail (
    fromdate timestamp without time zone NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    approvedby character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    noofdays integer,
    reason character varying(255),
    regno character varying(255),
    remarks character varying(255),
    requestedby character varying(255),
    requestedpersoncontactno character varying(255),
    semester integer,
    todate timestamp without time zone
);


ALTER TABLE hostelstudentleavedetail OWNER TO postgres;

--
-- Name: hostelstudentvisitordetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE hostelstudentvisitordetail (
    visitorid character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    noofvisitorcompanion integer,
    regno character varying(255),
    remarks character varying(255),
    semester integer,
    visitoraddress1 character varying(255),
    visitoraddress2 character varying(255),
    visitoraltmobilenumber character varying(255),
    visitorarea character varying(255),
    visitoremail character varying(255),
    visitorgender character varying(255),
    visitorintime character varying(255),
    visitormobilenumber character varying(255),
    visitorname character varying(255),
    visitorouttime character varying(255),
    visitorpincode character varying(255),
    visitorrelationship character varying(255),
    visitorstate character varying(255),
    visitortype character varying(255)
);


ALTER TABLE hostelstudentvisitordetail OWNER TO postgres;

--
-- Name: institutebatchdetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE institutebatchdetails (
    batch character varying(255) NOT NULL,
    instituteid character varying(255)
);


ALTER TABLE institutebatchdetails OWNER TO postgres;

--
-- Name: institutebusdetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE institutebusdetails (
    busno character varying(255) NOT NULL,
    instituteid character varying(255)
);


ALTER TABLE institutebusdetails OWNER TO postgres;

--
-- Name: institutebusnodetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE institutebusnodetails (
    busno character varying(255) NOT NULL,
    instituteid character varying(255)
);


ALTER TABLE institutebusnodetails OWNER TO postgres;

--
-- Name: institutebusroutedetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE institutebusroutedetails (
    route character varying(255) NOT NULL,
    stage character varying(255) NOT NULL,
    instituteid character varying(255)
);


ALTER TABLE institutebusroutedetails OWNER TO postgres;

--
-- Name: institutecoursedetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE institutecoursedetails (
    coursecode character varying(255) NOT NULL,
    coursename character varying(255),
    instituteid character varying(255)
);


ALTER TABLE institutecoursedetails OWNER TO postgres;

--
-- Name: institutedetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE institutedetails (
    instituteid character varying(255) NOT NULL,
    instituteaddress1 character varying(255),
    instituteaddress2 character varying(255),
    institutearea character varying(255),
    institutecode character varying(255),
    institutecontactno1 character varying(255),
    institutecontactno2 character varying(255),
    instituteemail1 character varying(255),
    instituteemail2 character varying(255),
    instituteimage smallint,
    institutelogo smallint,
    institutename character varying(255),
    institutepincode character varying(255),
    institutestate character varying(255),
    institutetype character varying(255),
    instituteweb character varying(255)
);


ALTER TABLE institutedetails OWNER TO postgres;

--
-- Name: instituteexamdetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE instituteexamdetails (
    examname character varying(255) NOT NULL,
    instituteid character varying(255)
);


ALTER TABLE instituteexamdetails OWNER TO postgres;

--
-- Name: institutetestdetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE institutetestdetails (
    testname character varying(255) NOT NULL,
    instituteid character varying(255)
);


ALTER TABLE institutetestdetails OWNER TO postgres;

--
-- Name: librarybookentrydetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE librarybookentrydetail (
    slno integer NOT NULL,
    bookid character varying(255),
    branchcode character varying(255),
    regno character varying(255)
);


ALTER TABLE librarybookentrydetail OWNER TO postgres;

--
-- Name: librarybookentryheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE librarybookentryheader (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    authorname character varying(255),
    bookname character varying(255),
    bookslno character varying(255),
    bookstatus character varying(255),
    booktype character varying(255),
    cubboardno character varying(255),
    loginuser character varying(255),
    noofcopies integer,
    publishername character varying(255),
    purchaseddate timestamp without time zone,
    purchasedfrom character varying(255),
    totalprice bigint,
    unitprice bigint
);


ALTER TABLE librarybookentryheader OWNER TO postgres;

--
-- Name: librarybookissuereturndetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE librarybookissuereturndetail (
    slno integer NOT NULL,
    bookid character varying(255),
    bookslno character varying(255),
    currentdate timestamp without time zone,
    currentstatus character varying(255),
    fineamount bigint,
    memberid character varying(255),
    possiblereturndate timestamp without time zone,
    regno character varying(255)
);


ALTER TABLE librarybookissuereturndetail OWNER TO postgres;

--
-- Name: librarybookissuereturnheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE librarybookissuereturnheader (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    memberid character varying(255),
    semester integer
);


ALTER TABLE librarybookissuereturnheader OWNER TO postgres;

--
-- Name: librarycdentrydetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE librarycdentrydetail (
    slno integer NOT NULL,
    branchcode character varying(255),
    cdid character varying(255)
);


ALTER TABLE librarycdentrydetail OWNER TO postgres;

--
-- Name: librarycdentryheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE librarycdentryheader (
    cdid character varying(255) NOT NULL,
    academicyear character varying(255),
    authorname character varying(255),
    cdname character varying(255),
    cdslno character varying(255),
    cdstatus character varying(255),
    cdtype character varying(255),
    cubboardno character varying(255),
    loginuser character varying(255),
    noofcopies integer,
    publishername character varying(255),
    purchaseddate timestamp without time zone,
    purchasedfrom character varying(255),
    totalprice bigint,
    unitprice bigint
);


ALTER TABLE librarycdentryheader OWNER TO postgres;

--
-- Name: librarymagazineentry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE librarymagazineentry (
    magazineid character varying(255) NOT NULL,
    academicyear character varying(255),
    authorname character varying(255),
    cubboardno character varying(255),
    loginuser character varying(255),
    magazinename character varying(255),
    magazineslno character varying(255),
    magazinestatus character varying(255),
    magazinetype character varying(255),
    noofcopies integer,
    publishername character varying(255),
    purchaseddate timestamp without time zone,
    purchasedfrom character varying(255),
    totalprice bigint,
    unitprice bigint
);


ALTER TABLE librarymagazineentry OWNER TO postgres;

--
-- Name: librarymemberdetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE librarymemberdetail (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    eligiblenoofbooks integer,
    loginuser character varying(255),
    memberid character varying(255),
    noofbookstaken integer,
    semester integer,
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE librarymemberdetail OWNER TO postgres;

--
-- Name: libraryusage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE libraryusage (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    memberid character varying(255),
    purpose character varying(255),
    remarks character varying(255),
    semester integer,
    timefrom character varying(255),
    timeto character varying(255)
);


ALTER TABLE libraryusage OWNER TO postgres;

--
-- Name: mtcconcession; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE mtcconcession (
    mtcconcessionid character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    branchcode character varying(255),
    branchname character varying(255),
    emailid character varying(255),
    loginuser character varying(255),
    presentaddress1 character varying(255),
    presentaddress2 character varying(255),
    presentmobileno character varying(255),
    regno character varying(255),
    route1 character varying(255),
    route2 character varying(255),
    route3 character varying(255),
    semester integer
);


ALTER TABLE mtcconcession OWNER TO postgres;

--
-- Name: parentfeedback; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE parentfeedback (
    regno character varying(255) NOT NULL,
    academicyear character varying(255) NOT NULL,
    admissionno character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    currentdate timestamp without time zone NOT NULL,
    loginuser character varying(255) NOT NULL,
    message character varying(255) NOT NULL,
    messageto character varying(255) NOT NULL,
    semester integer NOT NULL
);


ALTER TABLE parentfeedback OWNER TO postgres;

--
-- Name: questionentry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE questionentry (
    sno integer NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    branchname character varying(255),
    category character varying(255),
    important boolean,
    loginuser character varying(255),
    mark integer,
    model character varying(255),
    question character varying(255),
    questiontype character varying(255),
    scheme character varying(255),
    selected boolean,
    semester character varying(255),
    shufflequestionno integer,
    subjectcode character varying(255),
    subjectname character varying(255),
    unit character varying(255)
);


ALTER TABLE questionentry OWNER TO postgres;

--
-- Name: scholarship; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE scholarship (
    scholarshipid character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    applieddate timestamp without time zone,
    bankaccountname character varying(255),
    bankaccountno character varying(255),
    bankbranch character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    branchname character varying(255),
    community character varying(255),
    currentdate timestamp without time zone,
    fathername character varying(255),
    ifsccode character varying(255),
    loginuser character varying(255),
    mobileno bigint,
    name character varying(255),
    regno character varying(255),
    sactioneddate timestamp without time zone,
    scholarshipamount bigint,
    scholarshiptype character varying(255),
    semester character varying(255),
    status character varying(255)
);


ALTER TABLE scholarship OWNER TO postgres;

--
-- Name: securitylatecomers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE securitylatecomers (
    latecomeid character varying(255) NOT NULL,
    academicyear character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    currentdate timestamp without time zone NOT NULL,
    loginuser character varying(255) NOT NULL,
    nooftimesmonth integer NOT NULL,
    nooftimesoverall integer NOT NULL,
    reason character varying(255) NOT NULL,
    registerno character varying(255) NOT NULL,
    semester integer NOT NULL,
    timein character varying(255) NOT NULL,
    typeofperson character varying(255) NOT NULL
);


ALTER TABLE securitylatecomers OWNER TO postgres;

--
-- Name: securitymaterialinoutdetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE securitymaterialinoutdetail (
    matgatepassid character varying(255) NOT NULL,
    materialcode character varying(255) NOT NULL,
    materialcondition character varying(255) NOT NULL,
    materialname character varying(255) NOT NULL,
    noofitems integer NOT NULL
);


ALTER TABLE securitymaterialinoutdetail OWNER TO postgres;

--
-- Name: securitymaterialinoutheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE securitymaterialinoutheader (
    matgatepassid character varying(255) NOT NULL,
    academicyear character varying(255) NOT NULL,
    currentdate timestamp without time zone NOT NULL,
    loginuser character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    reason character varying(255) NOT NULL,
    staffid character varying(255) NOT NULL,
    timein character varying(255) NOT NULL,
    timeout character varying(255) NOT NULL,
    vehicleno character varying(255) NOT NULL,
    vehicletype character varying(255) NOT NULL
);


ALTER TABLE securitymaterialinoutheader OWNER TO postgres;

--
-- Name: securityoutpass; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE securityoutpass (
    outpassid character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    nooftimesmonth integer,
    nooftimesoverall integer,
    reason character varying(255),
    regno character varying(255),
    semester integer,
    timeout character varying(255),
    typeofperson character varying(255)
);


ALTER TABLE securityoutpass OWNER TO postgres;

--
-- Name: securitystudentlatecomers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE securitystudentlatecomers (
    latecomeid character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    nooftimesmonth integer,
    nooftimesoverall integer,
    reason character varying(255),
    regno character varying(255),
    semester integer,
    timein character varying(255),
    typeofperson character varying(255)
);


ALTER TABLE securitystudentlatecomers OWNER TO postgres;

--
-- Name: securitystudentoutpass; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE securitystudentoutpass (
    outpassid character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    nooftimesmonth integer,
    nooftimesoverall integer,
    reason character varying(255),
    regno character varying(255),
    semester integer,
    timeout character varying(255),
    typeofperson character varying(255)
);


ALTER TABLE securitystudentoutpass OWNER TO postgres;

--
-- Name: securitystudentvisitorpass; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE securitystudentvisitorpass (
    visitorid character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    noofpersons integer,
    persontomeet character varying(255),
    reason character varying(255),
    regno character varying(255),
    semester integer,
    timein character varying(255),
    timeout character varying(255),
    visitorname character varying(255),
    visitortransportmode character varying(255)
);


ALTER TABLE securitystudentvisitorpass OWNER TO postgres;

--
-- Name: securityvehiclesinout; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE securityvehiclesinout (
    vehiclesinoutid character varying(255) NOT NULL,
    academicyear character varying(255) NOT NULL,
    currentdate timestamp without time zone NOT NULL,
    loginuser character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    reason character varying(255) NOT NULL,
    staffid character varying(255) NOT NULL,
    timein character varying(255) NOT NULL,
    timeout character varying(255) NOT NULL,
    vehicleno character varying(255) NOT NULL,
    vehicletype character varying(255) NOT NULL
);


ALTER TABLE securityvehiclesinout OWNER TO postgres;

--
-- Name: securityvisitorpass; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE securityvisitorpass (
    visitorid character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    noofpersons integer,
    persontomeet character varying(255),
    reason character varying(255),
    regno character varying(255),
    semester integer,
    timein character varying(255),
    timeout character varying(255),
    visitorname character varying(255),
    visitortransportmode character varying(255)
);


ALTER TABLE securityvisitorpass OWNER TO postgres;

--
-- Name: sportskitspurchasedetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE sportskitspurchasedetail (
    id integer NOT NULL,
    billno character varying(255),
    item_hsncode character varying(255),
    itemname character varying(255),
    itemquantity integer,
    itemtotalprice bigint,
    itemunitprice bigint
);


ALTER TABLE sportskitspurchasedetail OWNER TO postgres;

--
-- Name: sportskitspurchaseheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE sportskitspurchaseheader (
    billno character varying(255) NOT NULL,
    academicyear character varying(255),
    balanceamount bigint,
    bankname character varying(255),
    chequedate timestamp without time zone,
    chequeno character varying(255),
    duedate timestamp without time zone,
    loginuser character varying(255),
    paidamount bigint,
    paymentmode character varying(255),
    purchasedate timestamp without time zone,
    totalamount bigint,
    vendorid character varying(255)
);


ALTER TABLE sportskitspurchaseheader OWNER TO postgres;

--
-- Name: sportskitsstock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE sportskitsstock (
    itemcode character varying(255) NOT NULL,
    itemname character varying(255),
    itemstatus character varying(255),
    loginuser character varying(255),
    quantityinhand integer
);


ALTER TABLE sportskitsstock OWNER TO postgres;

--
-- Name: sportsod; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE sportsod (
    id integer NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    fromdate timestamp without time zone,
    loginuser character varying(255),
    reasonforod character varying(255),
    regno character varying(255),
    semester integer,
    todate timestamp without time zone
);


ALTER TABLE sportsod OWNER TO postgres;

--
-- Name: sportspddetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE sportspddetail (
    institutecode character varying(255) NOT NULL,
    instituteaddress1 character varying(255),
    instituteaddress2 character varying(255),
    institutearea character varying(255),
    institutename character varying(255),
    institutepin character varying(255),
    loginuser character varying(255),
    physicaldirector1altemail character varying(255),
    physicaldirector1altmobile character varying(255),
    physicaldirector1email character varying(255),
    physicaldirector1mobile character varying(255),
    physicaldirector1name character varying(255),
    physicaldirector2altemail character varying(255),
    physicaldirector2altmobile character varying(255),
    physicaldirector2email character varying(255),
    physicaldirector2mobile character varying(255),
    physicaldirector2name character varying(255)
);


ALTER TABLE sportspddetail OWNER TO postgres;

--
-- Name: spring_session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE spring_session (
    session_id character(36) NOT NULL,
    creation_time bigint NOT NULL,
    last_access_time bigint NOT NULL,
    max_inactive_interval integer NOT NULL,
    principal_name character varying(100)
);


ALTER TABLE spring_session OWNER TO postgres;

--
-- Name: spring_session_attributes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE spring_session_attributes (
    session_id character(36) NOT NULL,
    attribute_name character varying(200) NOT NULL,
    attribute_bytes bytea
);


ALTER TABLE spring_session_attributes OWNER TO postgres;

--
-- Name: staffacademicinformation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE staffacademicinformation (
    staffid character varying(255) NOT NULL,
    awardwinner boolean,
    board character varying(255),
    course character varying(255),
    degree character varying(255),
    experiencecategory character varying(255),
    experiencedesignation character varying(255),
    experiencenoofyears integer,
    loginuser character varying(255),
    monthandyearofpass character varying(255),
    ncc boolean,
    nss boolean,
    organisationname character varying(255),
    paperpresentation boolean,
    percentage bigint,
    qualifiication character varying(255),
    seminars boolean,
    training boolean,
    staff_academic_staffid character varying(255) NOT NULL
);


ALTER TABLE staffacademicinformation OWNER TO postgres;

--
-- Name: staffattendancedetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE staffattendancedetail (
    attdate timestamp without time zone NOT NULL,
    attendancestatus character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    informed boolean NOT NULL,
    loginuser character varying(255) NOT NULL,
    staffid character varying(255) NOT NULL
);


ALTER TABLE staffattendancedetail OWNER TO postgres;

--
-- Name: staffattendanceheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE staffattendanceheader (
    attdate timestamp without time zone NOT NULL,
    academicyear character varying(255) NOT NULL,
    attendance_day character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    totalabsent integer NOT NULL,
    totalpermission integer NOT NULL,
    totalpresent integer NOT NULL
);


ALTER TABLE staffattendanceheader OWNER TO postgres;

--
-- Name: staffbaseinformation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE staffbaseinformation (
    staffid character varying(255) NOT NULL,
    branch character varying(255),
    branchcode character varying(255),
    dateofjoin timestamp without time zone,
    designation character varying(255),
    loginuser character varying(255),
    staffname character varying(255),
    status character varying(255),
    staff_base_staffid character varying(255) NOT NULL
);


ALTER TABLE staffbaseinformation OWNER TO postgres;

--
-- Name: staffdepositinformation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE staffdepositinformation (
    staffid character varying(255) NOT NULL,
    degreecertificateslno character varying(255),
    loginuser character varying(255),
    marksheetslno character varying(255),
    originaldegreecertificate boolean,
    originalmarksheet boolean,
    originaltransfercertificate boolean,
    othercertificate boolean,
    othercertificateslno character varying(255),
    salarydeposited bigint,
    transfercertificateslno character varying(255),
    typeofdeposit character varying(255),
    staff_deposit_staffid character varying(255) NOT NULL
);


ALTER TABLE staffdepositinformation OWNER TO postgres;

--
-- Name: staffeligibilityinformation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE staffeligibilityinformation (
    staffid character varying(255) NOT NULL,
    bankaccountno character varying(255),
    bankbranch character varying(255),
    bankifsccode character varying(255),
    bankname character varying(255),
    eligibleforcl character varying(255),
    loginuser character varying(255),
    noofcl integer,
    noofpl integer,
    staffidcard boolean,
    stafflibrarycard boolean,
    stafflogbook boolean,
    staff_eligibility_staffid character varying(255) NOT NULL
);


ALTER TABLE staffeligibilityinformation OWNER TO postgres;

--
-- Name: staffleaveletterentry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE staffleaveletterentry (
    staffid character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    branchname character varying(255) NOT NULL,
    currentdate timestamp without time zone NOT NULL,
    designation character varying(255) NOT NULL,
    fromdate timestamp without time zone NOT NULL,
    loginuser character varying(255) NOT NULL,
    noofdays integer NOT NULL,
    reason character varying(255) NOT NULL,
    staffname character varying(255) NOT NULL,
    todate timestamp without time zone NOT NULL,
    typeofleave character varying(255) NOT NULL
);


ALTER TABLE staffleaveletterentry OWNER TO postgres;

--
-- Name: staffpersonalinformation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE staffpersonalinformation (
    staffid character varying(255) NOT NULL,
    aadharnumber character varying(255),
    bloodgroup character varying(255),
    candfathername character varying(255),
    candmothername character varying(255),
    caste character varying(255),
    community character varying(255),
    dob timestamp without time zone,
    fatheroccupation character varying(255),
    gender character varying(255),
    loginuser character varying(255),
    maritialstatus character varying(255),
    mothertoungue character varying(255),
    panno character varying(255),
    permanentaddress1 character varying(255),
    permanentaddress2 character varying(255),
    permanentaltemail character varying(255),
    permanentaltmobno character varying(255),
    permanentarea character varying(255),
    permanentemail character varying(255),
    permanentmobileno character varying(255),
    permanentpincode character varying(255),
    permanentstate character varying(255),
    physicallyhandicapped character varying(255),
    placeofbirth character varying(255),
    presentaddress1 character varying(255),
    presentaddress2 character varying(255),
    presentaltemail character varying(255),
    presentaltmobno character varying(255),
    presentarea character varying(255),
    presentemail character varying(255),
    presentmobileno character varying(255),
    presentpincode character varying(255),
    presentstate character varying(255),
    referencedby character varying(255),
    refererid character varying(255),
    referername character varying(255),
    spousename character varying(255),
    spouseoccupation character varying(255)
);


ALTER TABLE staffpersonalinformation OWNER TO postgres;

--
-- Name: stafftransport; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE stafftransport (
    staffid character varying(255) NOT NULL,
    academic_year character varying(255) NOT NULL,
    amount bigint NOT NULL,
    branch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    designation character varying(255) NOT NULL,
    facility character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    route character varying(255) NOT NULL,
    routeno character varying(255) NOT NULL,
    staffname character varying(255) NOT NULL,
    stage character varying(255) NOT NULL,
    transportmode character varying(255) NOT NULL
);


ALTER TABLE stafftransport OWNER TO postgres;

--
-- Name: staffwillingsubjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE staffwillingsubjects (
    staffid character varying(255) NOT NULL,
    branchcode character varying(255),
    loginuser character varying(255),
    nooftimespracticalsubject1handled integer,
    nooftimespracticalsubject2handled integer,
    nooftimespracticalsubject3handled integer,
    nooftimespracticalsubject4handled integer,
    nooftimespracticalsubject5handled integer,
    nooftimestheorysubject1handled integer,
    nooftimestheorysubject2handled integer,
    nooftimestheorysubject3handled integer,
    nooftimestheorysubject4handled integer,
    nooftimestheorysubject5handled integer,
    practicalsubject1code character varying(255),
    practicalsubject2code character varying(255),
    practicalsubject3code character varying(255),
    practicalsubject4code character varying(255),
    practicalsubject5code character varying(255),
    theorysubject1code character varying(255),
    theorysubject2code character varying(255),
    theorysubject3code character varying(255),
    theorysubject4code character varying(255),
    theorysubject5code character varying(255),
    totalteachingexperience integer,
    staff_willingsubjects_staffid character varying(255) NOT NULL
);


ALTER TABLE staffwillingsubjects OWNER TO postgres;

--
-- Name: stenocircular; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE stenocircular (
    circularid character varying(255) NOT NULL,
    academicyear character varying(255),
    branch character varying(255),
    branchcode character varying(255),
    circulardate timestamp without time zone,
    circularparticular character varying(255),
    circulartype character varying(255),
    currentdate timestamp without time zone,
    loginuser character varying(255),
    semester character varying(255)
);


ALTER TABLE stenocircular OWNER TO postgres;

--
-- Name: stenoevents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE stenoevents (
    eventid character varying(255) NOT NULL,
    academicyear character varying(255),
    branch character varying(255),
    branchcode character varying(255),
    currentdate timestamp without time zone,
    eventdate timestamp without time zone,
    eventparticular character varying(255),
    eventtype character varying(255),
    loginuser character varying(255),
    semester character varying(255)
);


ALTER TABLE stenoevents OWNER TO postgres;

--
-- Name: storesmaterialstock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE storesmaterialstock (
    item_hsn_code character varying(255) NOT NULL,
    item_minimum_level bigint,
    item_name character varying(255),
    item_stock_in_hand bigint
);


ALTER TABLE storesmaterialstock OWNER TO postgres;

--
-- Name: storespurchasedetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE storespurchasedetail (
    id integer NOT NULL,
    billno character varying(255),
    item_hsn_code character varying(255),
    item_name character varying(255),
    item_quantity integer,
    item_total_price bigint,
    item_unit_price bigint,
    vendor_id character varying(255)
);


ALTER TABLE storespurchasedetail OWNER TO postgres;

--
-- Name: storespurchaseheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE storespurchaseheader (
    billno character varying(255) NOT NULL,
    academic_year character varying(255),
    balance_amount bigint,
    bank_name character varying(255),
    cheque_date timestamp without time zone,
    cheque_no character varying(255),
    due_date timestamp without time zone,
    loginuser character varying(255),
    paid_amount bigint,
    payment_mode character varying(255),
    purchase_date timestamp without time zone,
    total_amount bigint,
    vendorid character varying(255)
);


ALTER TABLE storespurchaseheader OWNER TO postgres;

--
-- Name: storesreturndetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE storesreturndetail (
    id integer NOT NULL,
    billno character varying(255),
    item_hsn_code character varying(255),
    item_name character varying(255),
    item_quantity integer,
    item_total_price bigint,
    item_unit_price bigint,
    vendor_id character varying(255)
);


ALTER TABLE storesreturndetail OWNER TO postgres;

--
-- Name: storesreturnheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE storesreturnheader (
    billno character varying(255) NOT NULL,
    academic_year character varying(255),
    balance_amount bigint,
    bank_name character varying(255),
    cheque_date timestamp without time zone,
    cheque_no character varying(255),
    due_date timestamp without time zone,
    loginuser character varying(255),
    payment_mode character varying(255),
    received_amount bigint,
    return_date timestamp without time zone,
    total_amount bigint,
    vendorid character varying(255)
);


ALTER TABLE storesreturnheader OWNER TO postgres;

--
-- Name: storessalesdetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE storessalesdetail (
    id integer NOT NULL,
    billno character varying(255),
    item_hsn_code character varying(255),
    item_name character varying(255),
    item_quantity integer,
    item_total_price bigint,
    item_unit_price bigint
);


ALTER TABLE storessalesdetail OWNER TO postgres;

--
-- Name: storessalesheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE storessalesheader (
    billno character varying(255) NOT NULL,
    academic_year character varying(255),
    balance_amount bigint,
    bank_name character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    cheque_date timestamp without time zone,
    cheque_no character varying(255),
    due_date timestamp without time zone,
    loginuser character varying(255),
    paid_amount bigint,
    payment_mode character varying(255),
    regno character varying(255),
    sales_date timestamp without time zone,
    semester integer,
    total_amount bigint
);


ALTER TABLE storessalesheader OWNER TO postgres;

--
-- Name: storesvendordetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE storesvendordetails (
    vendorid character varying(255) NOT NULL,
    contact_person_alternate_mob_no character varying(255),
    contact_person_mob_no character varying(255),
    contact_person_name character varying(255),
    loginuser character varying(255),
    vendor_address1 character varying(255),
    vendor_address2 character varying(255),
    vendor_alternate_email character varying(255),
    vendor_area character varying(255),
    vendor_deleted boolean,
    vendor_email character varying(255),
    vendorgstno character varying(255),
    vendor_name character varying(255),
    vendor_pan_no character varying(255),
    vendor_pin character varying(255)
);


ALTER TABLE storesvendordetails OWNER TO postgres;

--
-- Name: studentacademicinfo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentacademicinfo (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    admitteddate timestamp without time zone,
    bloodgroup character varying(255),
    caste character varying(255),
    community character varying(255),
    durationfrom character varying(255),
    durationto character varying(255),
    loginuser character varying(255),
    "national" character varying(255),
    religion character varying(255),
    student_academic_regno character varying(255) NOT NULL
);


ALTER TABLE studentacademicinfo OWNER TO postgres;

--
-- Name: studentattendancedetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentattendancedetail (
    id integer NOT NULL,
    entrydate timestamp without time zone,
    hour integer,
    regno character varying(255),
    status character varying(255)
);


ALTER TABLE studentattendancedetail OWNER TO postgres;

--
-- Name: studentattendanceheader; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentattendanceheader (
    entrydate timestamp without time zone NOT NULL,
    academiyear character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    dayname character varying(255) NOT NULL,
    hour integer NOT NULL,
    loginuser character varying(255) NOT NULL,
    semester character varying(255) NOT NULL,
    total_absent integer NOT NULL,
    total_present integer NOT NULL
);


ALTER TABLE studentattendanceheader OWNER TO postgres;

--
-- Name: studentbaseinformation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentbaseinformation (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    batch character varying(255),
    branch character varying(255),
    branchcode character varying(255),
    loginuser character varying(255),
    poto character varying(255),
    scheme character varying(255),
    semester character varying(255),
    studentname character varying(255),
    studenttype character varying(255),
    student_base_regno character varying(255) NOT NULL
);


ALTER TABLE studentbaseinformation OWNER TO postgres;

--
-- Name: studentcollegeid; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentcollegeid (
    idcardno character varying(255) NOT NULL,
    batch character varying(255),
    academicyear character varying(255),
    admissionno character varying(255),
    branch character varying(255),
    branchcode character varying(255),
    candidatename character varying(255),
    idissueddate timestamp without time zone,
    idstatus character varying(255),
    idtype character varying(255),
    loginuser character varying(255),
    regno character varying(255),
    semester integer
);


ALTER TABLE studentcollegeid OWNER TO postgres;

--
-- Name: studentdiscontinuedtctab; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentdiscontinuedtctab (
    regno character varying(255) NOT NULL,
    academic_year character varying(255) NOT NULL,
    admissionno character varying(255) NOT NULL,
    approved character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    candname character varying(255) NOT NULL,
    caste character varying(255) NOT NULL,
    community character varying(255) NOT NULL,
    dateofadmission timestamp without time zone NOT NULL,
    dob timestamp without time zone NOT NULL,
    dobw character varying(255) NOT NULL,
    durationfrom character varying(255) NOT NULL,
    durationto character varying(255) NOT NULL,
    entrydate timestamp without time zone NOT NULL,
    fathername character varying(255) NOT NULL,
    feesbalance bigint NOT NULL,
    gender character varying(255) NOT NULL,
    lastappearedexam character varying(255) NOT NULL,
    leftdate timestamp without time zone NOT NULL,
    loginuser character varying(255) NOT NULL,
    mothername character varying(255) NOT NULL,
    nationality character varying(255) NOT NULL,
    qualified character varying(255) NOT NULL,
    reasonfortc character varying(255) NOT NULL,
    religion character varying(255) NOT NULL,
    semester integer NOT NULL,
    studenttype character varying(255) NOT NULL,
    tcserialno character varying(255) NOT NULL,
    yearofstudent character varying(255) NOT NULL
);


ALTER TABLE studentdiscontinuedtctab OWNER TO postgres;

--
-- Name: studentfood; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentfood (
    regno character varying(255) NOT NULL,
    academic_year character varying(255) NOT NULL,
    branch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    foodfees bigint NOT NULL,
    foodtype character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    semester integer NOT NULL
);


ALTER TABLE studentfood OWNER TO postgres;

--
-- Name: studenthomework; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studenthomework (
    subjectcode character varying(255) NOT NULL,
    academic_year character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    entrydate timestamp without time zone NOT NULL,
    homeworkcontent character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    semester integer NOT NULL,
    staffid character varying(255) NOT NULL,
    staff_name character varying(255) NOT NULL,
    subjectname character varying(255) NOT NULL
);


ALTER TABLE studenthomework OWNER TO postgres;

--
-- Name: studenthostel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studenthostel (
    regno character varying(255) NOT NULL,
    academic_year character varying(255) NOT NULL,
    amount bigint NOT NULL,
    branch character varying(255) NOT NULL,
    branch_code character varying(255) NOT NULL,
    foodtype character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    optd_facility character varying(255) NOT NULL,
    semester integer NOT NULL
);


ALTER TABLE studenthostel OWNER TO postgres;

--
-- Name: studentleaveletter; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentleaveletter (
    fromdate timestamp without time zone NOT NULL,
    academic_year character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    entrydate timestamp without time zone,
    leavereason character varying(255),
    loginuser character varying(255),
    noofdays integer,
    regno character varying(255),
    semester integer,
    todate timestamp without time zone
);


ALTER TABLE studentleaveletter OWNER TO postgres;

--
-- Name: studentpersonalinformation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentpersonalinformation (
    regno character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    dateofbirth timestamp without time zone,
    fathername character varying(255),
    gender character varying(255),
    loginuser character varying(255),
    mothername character varying(255),
    name character varying(255),
    permanentaddress1 character varying(255),
    permanentaddress2 character varying(255),
    permanentaltemail character varying(255),
    permanentaltmobileno character varying(255),
    permanentarea character varying(255),
    permanentemail character varying(255),
    permanentmobileno character varying(255),
    permanentpincode character varying(255),
    permanentstate character varying(255),
    presentaddress1 character varying(255),
    presentaddress2 character varying(255),
    presentaltemail character varying(255),
    presentaltmobileno character varying(255),
    presentarea character varying(255),
    presentemail character varying(255),
    presentmobileno character varying(255),
    presentpincode character varying(255),
    presentstate character varying(255),
    reference character varying(255)
);


ALTER TABLE studentpersonalinformation OWNER TO postgres;

--
-- Name: studentremarksaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentremarksaction (
    followupid character varying(255) NOT NULL,
    loginuser character varying(255),
    regno character varying(255),
    remarkactiondate timestamp without time zone,
    remarkactionday character varying(255),
    remarkactiondetails character varying(255),
    remarkid character varying(255),
    statusofaction character varying(255)
);


ALTER TABLE studentremarksaction OWNER TO postgres;

--
-- Name: studentremarksentry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studentremarksentry (
    remarkid character varying(255) NOT NULL,
    academicyear character varying(255),
    batch character varying(255),
    branchcode character varying(255),
    loginuser character varying(255),
    primaryaction character varying(255),
    regno character varying(255),
    remarkdate timestamp without time zone,
    remarkday character varying(255),
    remarks character varying(255),
    semester integer
);


ALTER TABLE studentremarksentry OWNER TO postgres;

--
-- Name: studenttransport; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE studenttransport (
    studenttransportid character varying(255) NOT NULL,
    academic_year character varying(255),
    amount bigint,
    branch character varying(255),
    branch_code character varying(255),
    busno integer,
    loginuser character varying(255),
    regno character varying(255),
    route character varying(255),
    semester integer,
    stage character varying(255)
);


ALTER TABLE studenttransport OWNER TO postgres;

--
-- Name: subjectallocation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE subjectallocation (
    subjectcode character varying(255) NOT NULL,
    academicyear character varying(255) NOT NULL,
    allottedhours integer NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    branchname character varying(255) NOT NULL,
    classroomno integer NOT NULL,
    columnname character varying(255) NOT NULL,
    columnno integer NOT NULL,
    day character varying(255) NOT NULL,
    hour integer NOT NULL,
    hourspersyllabus integer NOT NULL,
    inshort character varying(255) NOT NULL,
    loadhours1 integer NOT NULL,
    loadhours2 integer NOT NULL,
    loginuser character varying(255) NOT NULL,
    reqhours integer NOT NULL,
    scheme character varying(255) NOT NULL,
    semester character varying(255) NOT NULL,
    staff1_id character varying(255) NOT NULL,
    staff1_name character varying(255) NOT NULL,
    staff2_id character varying(255) NOT NULL,
    staff2_name character varying(255) NOT NULL,
    subjectname character varying(255) NOT NULL,
    subjecttype character varying(255) NOT NULL,
    totweekhours integer NOT NULL
);


ALTER TABLE subjectallocation OWNER TO postgres;

--
-- Name: subjectentry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE subjectentry (
    academicyear character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    semester character varying(255) NOT NULL,
    subjectcode character varying(255) NOT NULL,
    allottedhours character varying(255),
    columnname character varying(255),
    hours character varying(255),
    inshort character varying(255),
    loginuser character varying(255),
    reqhours character varying(255),
    scheme character varying(255),
    subjectname character varying(255),
    subjecttype character varying(255)
);


ALTER TABLE subjectentry OWNER TO postgres;

--
-- Name: subjecttimetable; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE subjecttimetable (
    branch character varying(255) NOT NULL,
    academic_year character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    dayno integer NOT NULL,
    hour1 character varying(255) NOT NULL,
    hour2 character varying(255) NOT NULL,
    hour3 character varying(255) NOT NULL,
    hour4 character varying(255) NOT NULL,
    hour5 character varying(255) NOT NULL,
    hour6 character varying(255) NOT NULL,
    hour7 character varying(255) NOT NULL,
    hour8 character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    semester integer NOT NULL,
    ttday character varying(255) NOT NULL
);


ALTER TABLE subjecttimetable OWNER TO postgres;

--
-- Name: tournamentdata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE tournamentdata (
    tournamentid character varying(255) NOT NULL,
    locationaddress1 character varying(255),
    locationaddress2 character varying(255),
    locationarea character varying(255),
    locationpincode character varying(255),
    locationstate character varying(255),
    loginuser character varying(255),
    physicaldirectoraltemail character varying(255),
    physicaldirectoraltmobileno character varying(255),
    physicaldirectoremail character varying(255),
    physicaldirectormobileno character varying(255),
    sportscode character varying(255),
    sportstype character varying(255),
    tournamentdate timestamp without time zone,
    tournamentday character varying(255),
    tournamentenddate timestamp without time zone,
    tournamentlevel character varying(255),
    tournamentlocation character varying(255),
    tournamentname character varying(255),
    tournamentnoofdays integer,
    tournamentstartdate timestamp without time zone
);


ALTER TABLE tournamentdata OWNER TO postgres;

--
-- Name: trainconcession; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE trainconcession (
    trainconcessionid character varying(255) NOT NULL,
    academicyear character varying(255),
    admissionno character varying(255),
    branchcode character varying(255),
    branchname character varying(255),
    certdate timestamp without time zone,
    certno character varying(255),
    dob character varying(255),
    emailid character varying(255),
    gender character varying(255),
    loginuser character varying(255),
    periodfrom character varying(255),
    periodto character varying(255),
    presentaddress1 character varying(255),
    presentaddress2 character varying(255),
    presentmobileno character varying(255),
    regno character varying(255),
    semester integer
);


ALTER TABLE trainconcession OWNER TO postgres;

--
-- Name: transportfc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transportfc (
    currentdate timestamp without time zone NOT NULL,
    amount bigint NOT NULL,
    dateoffc timestamp without time zone NOT NULL,
    expirydate timestamp without time zone NOT NULL,
    loginuser character varying(255) NOT NULL,
    remarks character varying(255) NOT NULL,
    vehicleid character varying(255) NOT NULL,
    vehicletype character varying(255) NOT NULL
);


ALTER TABLE transportfc OWNER TO postgres;

--
-- Name: transportfeessetting; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transportfeessetting (
    academicyear character varying(255) NOT NULL,
    stage character varying(255) NOT NULL,
    amount bigint,
    feessettingdate timestamp without time zone,
    loginuser character varying(255),
    route character varying(255)
);


ALTER TABLE transportfeessetting OWNER TO postgres;

--
-- Name: transportidcard; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transportidcard (
    regno character varying(255) NOT NULL,
    batch character varying(255) NOT NULL,
    academic_year character varying(255) NOT NULL,
    admissionno character varying(255) NOT NULL,
    branch character varying(255) NOT NULL,
    branchcode character varying(255) NOT NULL,
    candidatename character varying(255) NOT NULL,
    idcardno character varying(255) NOT NULL,
    idissueddate timestamp without time zone NOT NULL,
    idstatus character varying(255) NOT NULL,
    idtype character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    routename character varying(255) NOT NULL,
    routeno integer NOT NULL,
    seatno character varying(255) NOT NULL,
    semester integer NOT NULL,
    stage character varying(255) NOT NULL
);


ALTER TABLE transportidcard OWNER TO postgres;

--
-- Name: transportinsurance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transportinsurance (
    currentdate timestamp without time zone NOT NULL,
    dateofexpiry timestamp without time zone NOT NULL,
    insuramount bigint NOT NULL,
    insurancecompany character varying(255) NOT NULL,
    loginuser character varying(255) NOT NULL,
    mobileno bigint NOT NULL,
    valofvehic character varying(255) NOT NULL,
    vehicleid character varying(255) NOT NULL,
    vehicletype character varying(255) NOT NULL
);


ALTER TABLE transportinsurance OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    username character varying(255) NOT NULL,
    academic_year character varying(255),
    branch_code character varying(255),
    designation character varying(255),
    first_name character varying(255),
    instituteid character varying(255),
    last_name character varying(255),
    password character varying(255),
    semester integer,
    staff_id character varying(255),
    student_id character varying(255),
    user_role character varying(255)
);


ALTER TABLE users OWNER TO postgres;

--
-- Name: users_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users_log (
    log_id integer NOT NULL,
    log character varying(255),
    regno character varying(255)
);


ALTER TABLE users_log OWNER TO postgres;

--
-- Name: users_new; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users_new (
    regno integer NOT NULL,
    department character varying(255),
    fees bigint,
    name character varying(255)
);


ALTER TABLE users_new OWNER TO postgres;

--
-- Name: users_new_contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users_new_contact (
    regno integer NOT NULL,
    phoneno character varying(255),
    cont_regno integer NOT NULL
);


ALTER TABLE users_new_contact OWNER TO postgres;

--
-- Name: users_staff; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users_staff (
    id bigint NOT NULL,
    academic_year character varying(255) NOT NULL,
    branch_code character varying(255) NOT NULL,
    designation character varying(255) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    staff_id character varying(255) NOT NULL,
    user_role character varying(255) NOT NULL,
    username character varying(255) NOT NULL
);


ALTER TABLE users_staff OWNER TO postgres;

--
-- Name: users_student; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users_student (
    id bigint NOT NULL,
    academic_year character varying(255) NOT NULL,
    branch_code character varying(255) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    semester integer NOT NULL,
    student_id character varying(255) NOT NULL,
    user_role character varying(255) NOT NULL,
    username character varying(255) NOT NULL
);


ALTER TABLE users_student OWNER TO postgres;

--
-- Data for Name: admissioncounselling; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY admissioncounselling (applno, admissionno, admissiontype, allotedcourse, branchcode, counsellingdate, counsellingstatus, followupdate, food, hostel, loginuser, remarks, totalfees, transport, transportstage, couns_applno) FROM stdin;
101	12MECHI01	MANAGEMENT QUOTA	MECHANICAL ENGINEERING	1020	2018-04-09 00:00:00	Admitted	2017-12-12 00:00:00	Vegetarian Food	Seperate Room	KAMAL	NIL	252525	ROUTE - I	STAGE - II	101
102	12MECHI02	MANAGEMENT QUOTA	MECHANICAL ENGINEERING	1020	2018-04-09 00:00:00	Admitted	2017-12-12 00:00:00	Vegetarian Food	Seperate Room	KAMAL	NIL	252525	ROUTE - I	STAGE - II	102
103	12MECHA02	MANAGEMENT QUOTA	MECHANICAL ENGINEERING	1020	2018-04-09 00:00:00	Admitted	2017-12-12 00:00:00	Vegetarian Food	Seperate Room	KAMAL	NIL	252525	ROUTE - I	STAGE - II	103
\.


--
-- Data for Name: allfeesbalance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY allfeesbalance (academicyear, regno, admissionfeesbalance, batch, branchcode, foodfeesbalance, groupinsurancefeesbalance, hostelfeesbalance, loginuser, miscellaneousfeesbalance, othersfeesbalance, penaltyfeesbalance, previousbalancefeesbalance, semester, specialfeesbalance, textbookstationaryfeesbalance, totalfeesbalance, transport_feesbalance, tuitionfeesbalance) FROM stdin;
\.


--
-- Data for Name: applicationfollowup; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY applicationfollowup (applicationno, alternative_mobileno, candidatename, currentdate, enquiry_no, fathername, loginuser, mobileno, preferred_course, willingness) FROM stdin;
\.


--
-- Data for Name: applicationsale; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY applicationsale (applno, appfor, applicationpaidmode, applicationprice, candfathername, candfirstname, candlastname, candmiddlename, candmothername, category, followupdate, gender, loginuser, permanentaddress1, permanentaddress2, permanentaltemail, permanentaltmobno, permanentarea, permanentemail, permanentmobileno, permanentpincode, permanentstate, prefferedcour1, prefferedcour2, prefferedcour3, presentaddress1, presentaddress2, presentaltemail, presentaltmobno, presentarea, presentemail, presentmobileno, presentpincode, presentstate, qualified, reference, remarks, saledate, willingtojoin) FROM stdin;
101	First Year	Paid	250	BAKTHAVATCHALAM	THIRUMAL	S B		MOHANAM	Application Sale	2018-08-09 00:00:00	Male	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	SSLC	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
102	First Year	Paid	250	BAKTHAVATCHALAM	THIRUMAL	S B		MOHANAM	Application Sale	2018-08-09 00:00:00	Male	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	SSLC	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
103	First Year	Paid	250	AX	SEETHA	T		MOHANAM	Application Sale	2018-08-09 00:00:00	Female	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	HSC	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
104	First Year	Paid	250	AX	RANI	T		MOHANAM	Application Sale	2018-08-09 00:00:00	Female	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	HSC	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
105	First Year	Paid	250	AX	RAJESH	T		MOHANAM	Application Sale	2018-08-09 00:00:00	Male	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	I.T.I	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
106	First Year	Paid	250	AX	RAMESH	T		MOHANAM	Application Sale	2018-08-09 00:00:00	Male	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	SSLC	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
107	Direct Second Year	Paid	250	AX	DINESH	T		MOHANAM	Application Sale	2018-08-09 00:00:00	Male	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	HSC	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
108	Direct Second Year	Paid	250	AX	VISHAL	T		MOHANAM	Application Sale	2018-08-09 00:00:00	Male	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	HSC	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
109	First Year	Paid	250	AX	HARSHIITHA	T		MOHANAM	Application Sale	2018-08-09 00:00:00	Male	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	SSLC	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
110	First Year	Paid	250	AX	RUPESH	T		MOHANAM	Application Sale	2018-08-09 00:00:00	Male	KAMAL	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	PUDHUR, AMBATTUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	CIVIL ENGINEERING	MECHANICAL ENGINEERING	AUTOMOBILE ENGINEERING	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	TamiNadu	SSLC	MANIKANDAN	NIL	2018-04-09 00:00:00	Yes
\.


--
-- Data for Name: atheletedetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY atheletedetail (id, areainsports, athleteid, house, loginuser, performancelevel, sportscode, typeofsports, atheleteid) FROM stdin;
\.


--
-- Data for Name: atheleteheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY atheleteheader (atheleteid, academicyear, batch, branchcode, loginuser, regno, semester) FROM stdin;
\.


--
-- Data for Name: batchdetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY batchdetails (batch, instituteid) FROM stdin;
BATCH - I	101
\.


--
-- Data for Name: bformdetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY bformdetail (photoid, applicationno, percentage, subject1, subject2, subject3, total) FROM stdin;
\.


--
-- Data for Name: bformheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY bformheader (photoid, acadyear, allotedquota, applicationno, bcode, category, community, dob, gender, loginuser, name, qualifiedexam, religion, remarks, semester, slno, state, yearofpass, applno, regno) FROM stdin;
\.


--
-- Data for Name: bonafide; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY bonafide (bonafideid, academicyear, admissionno, branchcode, branchname, certificatefor, fathername, issueddate, loginuser, name, noofyears, regno, semester) FROM stdin;
\.


--
-- Data for Name: branchdetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY branchdetails (inscode, branchcode, branch, loginuser) FROM stdin;
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
309	1010	CIVIL ENGINEERING	\N
309	1020	MECHANICAL ENGINEERING	\N
309	1021	AUTOMOBILE ENGINEERING	\N
\.


--
-- Data for Name: busdetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY busdetail (department, student_id, busno, drivername, seatno) FROM stdin;
\.


--
-- Data for Name: campusrequestdetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY campusrequestdetail (id, branchcode, numberofstudents, requestid, semester, studentcategory, typeofstudent) FROM stdin;
\.


--
-- Data for Name: campusrequestheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY campusrequestheader (requestid, academicyear, campusreqfromdate, campusreqtodate, corporateid, entrydate, followupdate, loginuser, remarks, requesttype) FROM stdin;
\.


--
-- Data for Name: campusscheduler; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY campusscheduler (scheduleid, loginuser, remarks, scheduledate, scheduleday, typeofevent) FROM stdin;
\.


--
-- Data for Name: certificatesubmission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY certificatesubmission (regno, academic_year, admissionno, branch, branch_code, candidatename, community_certificate_sl_no, communitycertificatesubmitted, conduct_certificate_sl_no, conductcertificatesubmitted, foloi_no, login_user, marksheet_sl_no, marksheetsubmitted, migration_certificate_sl_no, migrationcertificatesubmitted, pass_port_photosubmitted, passport_size_photo_copies, semester, stamp_size_photo_copies, stamp_size_photosubmitted, student_type, transfer_certificate_sl_no, transfercertificatesubmitted, xerox_community_certificate_copies, xerox_communitycertificatesubmitted, xerox_marksheet_copies, xerox_transfer_certificate_copies, xerox_transfercertificatesubmitted, xeroxmarksheetsubmitted, student_certificate_regno) FROM stdin;
12MECHI01	2019-2020	12MECHI01	MECHANICAL ENGINEERING	1020	kamalakannan S B	265	t	434	t	123	KAMAL	123	t	4	t	t	3	4	3	t	Regular	365	t	2	t	2	2	t	t	12MECHI01
12MECHI02	2015-2016	12MECHI02	MECHANICAL ENGINEERING	1020	SURESH	4578	t	-	\N	126	KAMAL	-	\N	-	\N	\N	0	6	3	t	Regular	-	\N	3	t	0	0	\N	\N	12MECHI02
\.


--
-- Data for Name: collegefeessetting; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY collegefeessetting (academicyear, branchcode, admissionfees, feessettingdate, groupinsurance, loginuser, miscalleneousfees, others, specialfees, textbookfees, totalfees, tutionfees) FROM stdin;
\.


--
-- Data for Name: corporatedetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY corporatedetail (id, corporateid, required_branch_code, required_student_category) FROM stdin;
\.


--
-- Data for Name: corporateheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY corporateheader (corporateid, corporatename, corporatetype, hralternatecontactno, hraltmailid, hrcontactnumber, hrmailid, hrname, loginuser) FROM stdin;
\.


--
-- Data for Name: current_academic_student_actual_fees; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY current_academic_student_actual_fees (regno, academicyear, admissionfees, admissionno, batch, branchcode, foodfees, groupinsurancefees, hostelfees, loginuser, miscellaneousfees, othersfees, penaltyfees, previousbalancefees, semester, specialfees, textbookstationaryfees, totalfees, transport_fees, tuitionfees, student_base_regno) FROM stdin;
\.


--
-- Data for Name: current_academic_student_balance_fees; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY current_academic_student_balance_fees (regno, academicyear, admissionfeesbalance, batch, branchcode, foodfeesbalance, groupinsurancefeesbalance, hostelfeesbalance, loginuser, miscellaneousfeesbalance, othersfeesbalance, penaltyfeesbalance, previousbalancefeesbalance, semester, specialfeesbalance, textbookstationaryfeesbalance, totalfeesbalance, transport_feesbalance, tuitionfeesbalance, student_base_regno) FROM stdin;
\.


--
-- Data for Name: current_academic_student_fees_payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY current_academic_student_fees_payment (billno, academicyear, admissionno, admnfeesbal, admnfeespaid, admnfeestot, bankname, batch, branchcode, chequedate, chequeno, date, duedate, foodfeesbal, foodfeespaid, foodfeestot, groupinsurancebal, groupinsurancepaid, groupinsurancetot, hostfeesbal, hostfeespaid, hostfeestot, loginuser, miscfeesbal, miscfeespaid, miscfeestot, noofprint, oldbalancebal, oldbalancepaid, oldbalancetot, othersfeesbal, othersfeespaid, othersfeestot, paymentmethod, penaltyfeesbal, penaltyfeespaid, penaltyfeestot, regno, semester, splfeesbal, splfeespaid, splfeestot, totfeesbal, totfeespaid, totfeestot, transfeesbal, transfeespaid, transfeestot, tutionfeesbal, tutionfeespaid, tutionfeestot, txtbookfeesbal, txtbookfeespaid, txtbookfeestot) FROM stdin;
\.


--
-- Data for Name: diploma_first_year_bform_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diploma_first_year_bform_detail (applno, percentage, photoid, regno, subject1, subject2, subject3, total, bform_det_applno) FROM stdin;
\.


--
-- Data for Name: diploma_first_year_bform_header; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diploma_first_year_bform_header (applno, acadyear, allotedquota, bcode, category, community, dob, gender, loginuser, name, photoid, qualifiedexam, regno, religion, remarks, semester, slno, state, yearofpass, bform_head_applno) FROM stdin;
\.


--
-- Data for Name: diplomabranchboardexamtimetableheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomabranchboardexamtimetableheader (academicyear, batch, branchcode, semester, entrydate, loginuser, maxmarks, monthandyearofexam, subject1codeno, subject1colno, subject1test_date, subject1test_day, subject2codeno, subject2colno, subject2test_date, subject2test_day, subject3codeno, subject3colno, subject3test_date, subject3test_day, subject4codeno, subject4colno, subject4test_date, subject4test_day, subject5codeno, subject5colno, subject5test_date, subject5test_day, subject6codeno, subject6colno, subject6test_date, subject6test_day, subject7codeno, subject7colno, subject7test_date, subject7test_day) FROM stdin;
\.


--
-- Data for Name: diplomabranchsem3boardexamtimetabledetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomabranchsem3boardexamtimetabledetail (regno, overall_result, admissionno, monthandyearofexam, rank, subject1attendance, subject1ext_mark, subject1int_mark, subject1result, subject1tot_mark, subject2attendance, subject2ext_mark, subject2int_mark, subject2result, subject2tot_mark, subject3attendance, subject3ext_mark, subject3int_mark, subject3result, subject3tot_mark, subject4attendance, subject4ext_mark, subject4int_mark, subject4result, subject4tot_mark, subject5attendance, subject5ext_mark, subject5int_mark, subject5result, subject5tot_mark, subject6attendance, subject6ext_mark, subject6int_mark, subject6result, subject6tot_mark, subject7attendance, subject7ext_mark, subject7int_mark, subject7result, subject7tot_mark, academicyear, batch, branchcode, semester, student_base_regno) FROM stdin;
\.


--
-- Data for Name: diplomabranchsem4boardexamtimetabledetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomabranchsem4boardexamtimetabledetail (regno, overall_result, admissionno, academicyear, batch, branchcode, semester, monthandyearofexam, rank, subject1attendance, subject1ext_mark, subject1int_mark, subject1result, subject1tot_mark, subject2attendance, subject2ext_mark, subject2int_mark, subject2result, subject2tot_mark, subject3attendance, subject3ext_mark, subject3int_mark, subject3result, subject3tot_mark, subject4attendance, subject4ext_mark, subject4int_mark, subject4result, subject4tot_mark, subject5attendance, subject5ext_mark, subject5int_mark, subject5result, subject5tot_mark, subject6attendance, subject6ext_mark, subject6int_mark, subject6result, subject6tot_mark, subject7attendance, subject7ext_mark, subject7int_mark, subject7result, subject7tot_mark, student_base_regno) FROM stdin;
\.


--
-- Data for Name: diplomabranchsem5boardexamtimetabledetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomabranchsem5boardexamtimetabledetail (regno, overall_result, admissionno, academicyear, batch, branchcode, semester, monthandyearofexam, rank, subject1attendance, subject1ext_mark, subject1int_mark, subject1result, subject1tot_mark, subject2attendance, subject2ext_mark, subject2int_mark, subject2result, subject2tot_mark, subject3attendance, subject3ext_mark, subject3int_mark, subject3result, subject3tot_mark, subject4attendance, subject4ext_mark, subject4int_mark, subject4result, subject4tot_mark, subject5attendance, subject5ext_mark, subject5int_mark, subject5result, subject5tot_mark, subject6attendance, subject6ext_mark, subject6int_mark, subject6result, subject6tot_mark, subject7attendance, subject7ext_mark, subject7int_mark, subject7result, subject7tot_mark, student_base_regno) FROM stdin;
\.


--
-- Data for Name: diplomabranchsem6boardexamtimetabledetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomabranchsem6boardexamtimetabledetail (regno, overall_result, admissionno, academicyear, batch, branchcode, semester, monthandyearofexam, rank, subject1attendance, subject1ext_mark, subject1int_mark, subject1result, subject1tot_mark, subject2attendance, subject2ext_mark, subject2int_mark, subject2result, subject2tot_mark, subject3attendance, subject3ext_mark, subject3int_mark, subject3result, subject3tot_mark, subject4attendance, subject4ext_mark, subject4int_mark, subject4result, subject4tot_mark, subject5attendance, subject5ext_mark, subject5int_mark, subject5result, subject5tot_mark, subject6attendance, subject6ext_mark, subject6int_mark, subject6result, subject6tot_mark, subject7attendance, subject7ext_mark, subject7int_mark, subject7result, subject7tot_mark, student_base_regno) FROM stdin;
\.


--
-- Data for Name: diplomafirstsemboardexamtimetabledetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomafirstsemboardexamtimetabledetail (regno, overall_result, admissionno, academicyear, batch, branchcode, semester, monthandyearofexam, rank, subject1attendance, subject1ext_mark, subject1int_mark, subject1result, subject1tot_mark, subject2attendance, subject2ext_mark, subject2int_mark, subject2result, subject2tot_mark, subject3attendance, subject3ext_mark, subject3int_mark, subject3result, subject3tot_mark, subject4attendance, subject4ext_mark, subject4int_mark, subject4result, subject4tot_mark, subject5attendance, subject5ext_mark, subject5int_mark, subject5result, subject5tot_mark, subject6attendance, subject6ext_mark, subject6int_mark, subject6result, subject6tot_mark, subject7attendance, subject7ext_mark, subject7int_mark, subject7result, subject7tot_mark, subject8attendance, subject8ext_mark, subject8int_mark, subject8result, subject8tot_mark, student_base_regno) FROM stdin;
\.


--
-- Data for Name: diplomafirstyearboardexamtimetableheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomafirstyearboardexamtimetableheader (academicyear, batch, branchcode, semester, entrydate, loginuser, maxmarks, monthandyearofexam, subject1codeno, subject1colno, subject1test_date, subject1test_day, subject2codeno, subject2colno, subject2test_date, subject2test_day, subject3codeno, subject3colno, subject3test_date, subject3test_day, subject4codeno, subject4colno, subject4test_date, subject4test_day, subject5codeno, subject5colno, subject5test_date, subject5test_day, subject6codeno, subject6colno, subject6test_date, subject6test_day, subject7codeno, subject7colno, subject7test_date, subject7test_day, subject8codeno, subject8colno, subject8test_date, subject8test_day) FROM stdin;
\.


--
-- Data for Name: diplomainternalbranchtesttimetabledetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomainternalbranchtesttimetabledetail (id, overall_result, admissionno, academicyear, batch, branchcode, semester, testtype, rank, regno, subject1attendance, subject1mark, subject1result, subject2attendance, subject2mark, subject2result, subject3attendance, subject3mark, subject3result, subject4attendance, subject4mark, subject4result) FROM stdin;
\.


--
-- Data for Name: diplomainternalbranchtesttimetableheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomainternalbranchtesttimetableheader (academicyear, batch, branchcode, semester, testtype, entrydate, loginuser, maxmarks, subject1codeno, subject1colno, subject1test_date, subject1test_day, subject2codeno, subject2colno, subject2test_date, subject2test_day, subject3codeno, subject3colno, subject3test_date, subject3test_day, subject4codeno, subject4colno, subject4test_date, subject4test_day) FROM stdin;
\.


--
-- Data for Name: diplomainternalsem1testtimetabledetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomainternalsem1testtimetabledetail (testid, overall_result, admissionno, academicyear, batch, branchcode, semester, testtype, rank, regno, subject1attendance, subject1mark, subject1result, subject2attendance, subject2mark, subject2result, subject3attendance, subject3mark, subject3result, subject4attendance, subject4mark, subject4result, subject5attendance, subject5mark, subject5result) FROM stdin;
\.


--
-- Data for Name: diplomainternalsem1testtimetableheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomainternalsem1testtimetableheader (academicyear, batch, branchcode, semester, testtype, entrydate, loginuser, maxmarks, subject1codeno, subject1colno, subject1test_date, subject1test_day, subject2codeno, subject2colno, subject2test_date, subject2test_day, subject3codeno, subject3colno, subject3test_date, subject3test_day, subject4codeno, subject4colno, subject4test_date, subject4test_day, subject5codeno, subject5colno, subject5test_date, subject5test_day) FROM stdin;
\.


--
-- Data for Name: diplomainternalsem2testtimetabledetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomainternalsem2testtimetabledetail (testid, overall_result, admissionno, academicyear, batch, branchcode, semester, testtype, rank, regno, subject1attendance, subject1mark, subject1result, subject2attendance, subject2mark, subject2result, subject3attendance, subject3mark, subject3result, subject4attendance, subject4mark, subject4result, subject5attendance, subject5mark, subject5result, subject6attendance, subject6mark, subject6result) FROM stdin;
\.


--
-- Data for Name: diplomainternalsem2testtimetableheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomainternalsem2testtimetableheader (academicyear, batch, branchcode, semester, testtype, entrydate, loginuser, maxmarks, subject1codeno, subject1colno, subject1test_date, subject1test_day, subject2codeno, subject2colno, subject2test_date, subject2test_day, subject3codeno, subject3colno, subject3test_date, subject3test_day, subject4codeno, subject4colno, subject4test_date, subject4test_day, subject5codeno, subject5colno, subject5test_date, subject5test_day, subject6codeno, subject6colno, subject6test_date, subject6test_day) FROM stdin;
\.


--
-- Data for Name: diplomasecondsemboardexamtimetabledetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY diplomasecondsemboardexamtimetabledetail (regno, overall_result, admissionno, academicyear, batch, branchcode, semester, monthandyearofexam, rank, subject1attendance, subject1ext_mark, subject1int_mark, subject1result, subject1tot_mark, subject2attendance, subject2ext_mark, subject2int_mark, subject2result, subject2tot_mark, subject3attendance, subject3ext_mark, subject3int_mark, subject3result, subject3tot_mark, subject4attendance, subject4ext_mark, subject4int_mark, subject4result, subject4tot_mark, subject5attendance, subject5ext_mark, subject5int_mark, subject5result, subject5tot_mark, subject6attendance, subject6ext_mark, subject6int_mark, subject6result, subject6tot_mark, subject7attendance, subject7ext_mark, subject7int_mark, subject7result, subject7tot_mark, subject8attendance, subject8ext_mark, subject8int_mark, subject8result, subject8tot_mark, student_base_regno) FROM stdin;
\.


--
-- Data for Name: egovspellentry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY egovspellentry (academicyear, semester, spellno, fromdate, loginuser, noofhours, todate) FROM stdin;
\.


--
-- Data for Name: equivalencesubject; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY equivalencesubject (academicyear, loginuser, newbranch, newbranchcode, newcolumnno, newscheme, newsemester, newsubjectcode, newsubjectname, oldbranch, oldbranchcode, oldcolumnno, oldscheme, oldsemester, oldsubjectcode, oldsubjectname) FROM stdin;
\.


--
-- Data for Name: ex2detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY ex2detail (questioncode, attendancestatus, regno) FROM stdin;
\.


--
-- Data for Name: ex2header; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY ex2header (examdate, academicyear, branchcode, columnno, examday, examsession, loginuser, monthandyearofexam, questioncode, semester, subjectcode, totalabsent, totalmalpractice, totalpresent) FROM stdin;
\.


--
-- Data for Name: feesentrybase; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY feesentrybase (academicyear, regno, admissionfees, admissionno, batch, branchcode, foodfees, groupinsurancefees, hostelfees, loginuser, miscellaneousfees, othersfees, penaltyfees, previousbalancefees, semester, specialfees, textbookstationaryfees, totalfees, transport_fees, tuitionfees) FROM stdin;
\.


--
-- Data for Name: feesfollowup; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY feesfollowup (regno, academicyear, admissionno, balance, batch, branchcode, currentdate, duedate, lastpaymtamount, lastpaymtdate, loginuser, remarks, semester, student_base_regno) FROM stdin;
\.


--
-- Data for Name: feespayment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY feespayment (academicyear, regno, admissionno, admnfeesbal, admnfeespaid, admnfeestot, bankname, billno, branchcode, branchname, chequedate, chequeno, date, duedate, foodfeesbal, foodfeespaid, foodfeestot, groupinsurancebal, groupinsurancepaid, groupinsurancetot, hostfeesbal, hostfeespaid, hostfeestot, loginuser, miscfeesbal, miscfeespaid, miscfeestot, name, noofprint, oldbalancebal, oldbalancepaid, oldbalancetot, othersfeesbal, othersfeespaid, othersfeestot, paymentmethod, penaltyfeesbal, penaltyfeespaid, penaltyfeestot, semester, splfeesbal, splfeespaid, splfeestot, totfeesbal, totfeespaid, totfeestot, transfeesbal, transfeespaid, transfeestot, tutionfeesbal, tutionfeespaid, tutionfeestot, txtbookfeesbal, txtbookfeespaid, txtbookfeestot) FROM stdin;
\.


--
-- Data for Name: firstaidentry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY firstaidentry (firstaidid, academicyear, admissionno, batch, branchcode, branchname, currentdate, firstaiddetails, hospitalfees, hospitalname, loginuser, name, reasonforfirstaid, regno, remarks, semester) FROM stdin;
\.


--
-- Data for Name: foodfeessetting; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY foodfeessetting (academicyear, feessettingdate, loginuser, nonvegfoodfees, vegfoodfees) FROM stdin;
\.


--
-- Data for Name: for_contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY for_contact (regno, phoneno, cont_regno) FROM stdin;
\.


--
-- Data for Name: for_new; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY for_new (regno, department, fees, name) FROM stdin;
\.


--
-- Data for Name: for_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY for_user (regno, department, fees, name) FROM stdin;
\.


--
-- Data for Name: fuelfilling; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY fuelfilling (vehicleno, amount, currentdate, driverid, drivername, fillingstation, fillingstationmobno, fillingtimekms, lastfilleddate, lastfilledlitres, lastfillingkms, loginuser, nooflitres, totalkilometers, vehicletype) FROM stdin;
\.


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('hibernate_sequence', 18, true);


--
-- Data for Name: hostelfeessetting; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY hostelfeessetting (academicyear, feessettingdate, foodfees, grouproomfees, individualroomfees, loginuser, multicotfees, others, singlecotfees, totalfees) FROM stdin;
\.


--
-- Data for Name: hostelstudentdetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY hostelstudentdetail (regno, academicyear, admissionno, batch, branchcode, guardian1address1, guardian1address2, guardian1altemail, guardian1altmobile, guardian1area, guardian1email, guardian1mobile, guardian1name, guardian1pincode, guardian1state, guardian2address1, guardian2address2, guardian2altemail, guardian2altmobile, guardian2area, guardian2email, guardian2mobile, guardian2name, guardian2pincode, guardian2state, loginuser, previoushosteladdress1, previoushosteladdress2, previoushostelaltemail, previoushostelaltmobile, previoushostelarea, previoushostelemail, previoushostelexperience, previoushostelmobile, previoushostelname, previoushostelpincode, previoushostelstate, semester, student_base_regno) FROM stdin;
\.


--
-- Data for Name: hostelstudentleavedetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY hostelstudentleavedetail (fromdate, academicyear, admissionno, approvedby, batch, branchcode, currentdate, loginuser, noofdays, reason, regno, remarks, requestedby, requestedpersoncontactno, semester, todate) FROM stdin;
\.


--
-- Data for Name: hostelstudentvisitordetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY hostelstudentvisitordetail (visitorid, academicyear, admissionno, batch, branchcode, currentdate, loginuser, noofvisitorcompanion, regno, remarks, semester, visitoraddress1, visitoraddress2, visitoraltmobilenumber, visitorarea, visitoremail, visitorgender, visitorintime, visitormobilenumber, visitorname, visitorouttime, visitorpincode, visitorrelationship, visitorstate, visitortype) FROM stdin;
\.


--
-- Data for Name: institutebatchdetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY institutebatchdetails (batch, instituteid) FROM stdin;
BATCH - I	101
BATCH - II	101
BATCH - III	101
BATCH - IV	101
BATCH - V	101
BATCH - VI	101
NULL	101
\.


--
-- Data for Name: institutebusdetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY institutebusdetails (busno, instituteid) FROM stdin;
\.


--
-- Data for Name: institutebusnodetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY institutebusnodetails (busno, instituteid) FROM stdin;
101	101
102	101
103	101
104	101
105	101
106	101
107	101
108	101
109	101
110	101
\.


--
-- Data for Name: institutebusroutedetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY institutebusroutedetails (route, stage, instituteid) FROM stdin;
MANALI	REDHILLS	101
MANALI	KAVANGARAI	101
MANALI	PUZHAL	101
MANALI	MOOLAKADAI	101
MOOLAKADAI	MOOLAKADAI	101
\.


--
-- Data for Name: institutecoursedetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY institutecoursedetails (coursecode, coursename, instituteid) FROM stdin;
1010	CIVIL ENGINEERING	101
1020	MECHANICAL ENGINEERING	101
1030	AUTOMOBILE ENGINEERING	101
1040	ELECTRONICS AND COMMUNICATION ENGINEERING	101
1046	INFORMATION TECHNOLOGY	101
1050	COMPUTER ENGINEERING	102
\.


--
-- Data for Name: institutedetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY institutedetails (instituteid, instituteaddress1, instituteaddress2, institutearea, institutecode, institutecontactno1, institutecontactno2, instituteemail1, instituteemail2, instituteimage, institutelogo, institutename, institutepincode, institutestate, institutetype, instituteweb) FROM stdin;
101	S5 WEST BANU NAGAR	PUDHUR, AMBATTUR	\N	309	9283604647	7200976486	informkamalakannan@gmail.com	informkamalakannan@gmail.com	\N	\N	GB CORP ENGG COLLEGE	600053	TAMILNADU	ENGINEERING COLLEGE	www.gbcorp.in
102	S5 WEST BANU NAGAR	PUDHUR, AMBATTUR	\N	310	9283604647	7200976486	informkamalakannan@gmail.com	informkamalakannan@gmail.com	\N	\N	SBK ENGG COLLEGE	600053	TAMILNADU	ENGINEERING COLLEGE	www.gbcorp.in
103	PAMMAL	PALLAVARAM	\N	103	9283604647	9283604647	informkamalakannan@gmail.com	informkamlakannan@gmail.com	\N	\N	MODERN KIDS	600053	TAMILNADU	PLAY SCHOOL	www.modernkids.com
\.


--
-- Data for Name: instituteexamdetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY instituteexamdetails (examname, instituteid) FROM stdin;
FIRST SEM BOARD EXAM	101
SECOND SEM BOARD EXAM	101
THIRD SEM BOARD EXAM	101
FOURTH SEM BOARD EXAM	101
FIFTH SEM BOARD EXAM	101
SIXTH SEM BOARD EXAM	101
SEVENTH SEM BOARD EXAM	101
EIGHTH SEM BOARD EXAM	101
\.


--
-- Data for Name: institutetestdetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY institutetestdetails (testname, instituteid) FROM stdin;
INTERNAL ASSESMENT TEST - I	101
INTERNAL ASSESMENT TEST - II	101
INTERNAL ASSESMENT TEST - III	101
INTERNAL ASSESMENT TEST - IV	101
MODEL EXAM - I	101
MODEL EXAM - II	101
MODEL EXAM - III	101
MODEL EXAM - IV	101
\.


--
-- Data for Name: librarybookentrydetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY librarybookentrydetail (slno, bookid, branchcode, regno) FROM stdin;
\.


--
-- Data for Name: librarybookentryheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY librarybookentryheader (regno, academicyear, authorname, bookname, bookslno, bookstatus, booktype, cubboardno, loginuser, noofcopies, publishername, purchaseddate, purchasedfrom, totalprice, unitprice) FROM stdin;
\.


--
-- Data for Name: librarybookissuereturndetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY librarybookissuereturndetail (slno, bookid, bookslno, currentdate, currentstatus, fineamount, memberid, possiblereturndate, regno) FROM stdin;
\.


--
-- Data for Name: librarybookissuereturnheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY librarybookissuereturnheader (regno, academicyear, batch, branchcode, currentdate, loginuser, memberid, semester) FROM stdin;
\.


--
-- Data for Name: librarycdentrydetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY librarycdentrydetail (slno, branchcode, cdid) FROM stdin;
\.


--
-- Data for Name: librarycdentryheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY librarycdentryheader (cdid, academicyear, authorname, cdname, cdslno, cdstatus, cdtype, cubboardno, loginuser, noofcopies, publishername, purchaseddate, purchasedfrom, totalprice, unitprice) FROM stdin;
\.


--
-- Data for Name: librarymagazineentry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY librarymagazineentry (magazineid, academicyear, authorname, cubboardno, loginuser, magazinename, magazineslno, magazinestatus, magazinetype, noofcopies, publishername, purchaseddate, purchasedfrom, totalprice, unitprice) FROM stdin;
\.


--
-- Data for Name: librarymemberdetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY librarymemberdetail (regno, academicyear, batch, branchcode, eligiblenoofbooks, loginuser, memberid, noofbookstaken, semester, student_base_regno) FROM stdin;
\.


--
-- Data for Name: libraryusage; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY libraryusage (regno, academicyear, batch, branchcode, currentdate, loginuser, memberid, purpose, remarks, semester, timefrom, timeto) FROM stdin;
\.


--
-- Data for Name: mtcconcession; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY mtcconcession (mtcconcessionid, academicyear, admissionno, branchcode, branchname, emailid, loginuser, presentaddress1, presentaddress2, presentmobileno, regno, route1, route2, route3, semester) FROM stdin;
\.


--
-- Data for Name: parentfeedback; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY parentfeedback (regno, academicyear, admissionno, batch, branchcode, currentdate, loginuser, message, messageto, semester) FROM stdin;
\.


--
-- Data for Name: questionentry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY questionentry (sno, academicyear, batch, branchcode, branchname, category, important, loginuser, mark, model, question, questiontype, scheme, selected, semester, shufflequestionno, subjectcode, subjectname, unit) FROM stdin;
\.


--
-- Data for Name: scholarship; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY scholarship (scholarshipid, academicyear, admissionno, applieddate, bankaccountname, bankaccountno, bankbranch, batch, branchcode, branchname, community, currentdate, fathername, ifsccode, loginuser, mobileno, name, regno, sactioneddate, scholarshipamount, scholarshiptype, semester, status) FROM stdin;
\.


--
-- Data for Name: securitylatecomers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY securitylatecomers (latecomeid, academicyear, batch, branchcode, currentdate, loginuser, nooftimesmonth, nooftimesoverall, reason, registerno, semester, timein, typeofperson) FROM stdin;
\.


--
-- Data for Name: securitymaterialinoutdetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY securitymaterialinoutdetail (matgatepassid, materialcode, materialcondition, materialname, noofitems) FROM stdin;
\.


--
-- Data for Name: securitymaterialinoutheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY securitymaterialinoutheader (matgatepassid, academicyear, currentdate, loginuser, name, reason, staffid, timein, timeout, vehicleno, vehicletype) FROM stdin;
\.


--
-- Data for Name: securityoutpass; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY securityoutpass (outpassid, academicyear, batch, branchcode, currentdate, loginuser, nooftimesmonth, nooftimesoverall, reason, regno, semester, timeout, typeofperson) FROM stdin;
\.


--
-- Data for Name: securitystudentlatecomers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY securitystudentlatecomers (latecomeid, academicyear, batch, branchcode, currentdate, loginuser, nooftimesmonth, nooftimesoverall, reason, regno, semester, timein, typeofperson) FROM stdin;
\.


--
-- Data for Name: securitystudentoutpass; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY securitystudentoutpass (outpassid, academicyear, batch, branchcode, currentdate, loginuser, nooftimesmonth, nooftimesoverall, reason, regno, semester, timeout, typeofperson) FROM stdin;
\.


--
-- Data for Name: securitystudentvisitorpass; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY securitystudentvisitorpass (visitorid, academicyear, batch, branchcode, currentdate, loginuser, noofpersons, persontomeet, reason, regno, semester, timein, timeout, visitorname, visitortransportmode) FROM stdin;
\.


--
-- Data for Name: securityvehiclesinout; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY securityvehiclesinout (vehiclesinoutid, academicyear, currentdate, loginuser, name, reason, staffid, timein, timeout, vehicleno, vehicletype) FROM stdin;
\.


--
-- Data for Name: securityvisitorpass; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY securityvisitorpass (visitorid, academicyear, batch, branchcode, currentdate, loginuser, noofpersons, persontomeet, reason, regno, semester, timein, timeout, visitorname, visitortransportmode) FROM stdin;
\.


--
-- Data for Name: sportskitspurchasedetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY sportskitspurchasedetail (id, billno, item_hsncode, itemname, itemquantity, itemtotalprice, itemunitprice) FROM stdin;
\.


--
-- Data for Name: sportskitspurchaseheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY sportskitspurchaseheader (billno, academicyear, balanceamount, bankname, chequedate, chequeno, duedate, loginuser, paidamount, paymentmode, purchasedate, totalamount, vendorid) FROM stdin;
\.


--
-- Data for Name: sportskitsstock; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY sportskitsstock (itemcode, itemname, itemstatus, loginuser, quantityinhand) FROM stdin;
\.


--
-- Data for Name: sportsod; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY sportsod (id, academicyear, batch, branchcode, currentdate, fromdate, loginuser, reasonforod, regno, semester, todate) FROM stdin;
\.


--
-- Data for Name: sportspddetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY sportspddetail (institutecode, instituteaddress1, instituteaddress2, institutearea, institutename, institutepin, loginuser, physicaldirector1altemail, physicaldirector1altmobile, physicaldirector1email, physicaldirector1mobile, physicaldirector1name, physicaldirector2altemail, physicaldirector2altmobile, physicaldirector2email, physicaldirector2mobile, physicaldirector2name) FROM stdin;
\.


--
-- Data for Name: spring_session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY spring_session (session_id, creation_time, last_access_time, max_inactive_interval, principal_name) FROM stdin;
\.


--
-- Data for Name: spring_session_attributes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY spring_session_attributes (session_id, attribute_name, attribute_bytes) FROM stdin;
\.


--
-- Data for Name: staffacademicinformation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY staffacademicinformation (staffid, awardwinner, board, course, degree, experiencecategory, experiencedesignation, experiencenoofyears, loginuser, monthandyearofpass, ncc, nss, organisationname, paperpresentation, percentage, qualifiication, seminars, training, staff_academic_staffid) FROM stdin;
\.


--
-- Data for Name: staffattendancedetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY staffattendancedetail (attdate, attendancestatus, branchcode, informed, loginuser, staffid) FROM stdin;
\.


--
-- Data for Name: staffattendanceheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY staffattendanceheader (attdate, academicyear, attendance_day, branchcode, loginuser, totalabsent, totalpermission, totalpresent) FROM stdin;
\.


--
-- Data for Name: staffbaseinformation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY staffbaseinformation (staffid, branch, branchcode, dateofjoin, designation, loginuser, staffname, status, staff_base_staffid) FROM stdin;
\.


--
-- Data for Name: staffdepositinformation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY staffdepositinformation (staffid, degreecertificateslno, loginuser, marksheetslno, originaldegreecertificate, originalmarksheet, originaltransfercertificate, othercertificate, othercertificateslno, salarydeposited, transfercertificateslno, typeofdeposit, staff_deposit_staffid) FROM stdin;
\.


--
-- Data for Name: staffeligibilityinformation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY staffeligibilityinformation (staffid, bankaccountno, bankbranch, bankifsccode, bankname, eligibleforcl, loginuser, noofcl, noofpl, staffidcard, stafflibrarycard, stafflogbook, staff_eligibility_staffid) FROM stdin;
\.


--
-- Data for Name: staffleaveletterentry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY staffleaveletterentry (staffid, branchcode, branchname, currentdate, designation, fromdate, loginuser, noofdays, reason, staffname, todate, typeofleave) FROM stdin;
\.


--
-- Data for Name: staffpersonalinformation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY staffpersonalinformation (staffid, aadharnumber, bloodgroup, candfathername, candmothername, caste, community, dob, fatheroccupation, gender, loginuser, maritialstatus, mothertoungue, panno, permanentaddress1, permanentaddress2, permanentaltemail, permanentaltmobno, permanentarea, permanentemail, permanentmobileno, permanentpincode, permanentstate, physicallyhandicapped, placeofbirth, presentaddress1, presentaddress2, presentaltemail, presentaltmobno, presentarea, presentemail, presentmobileno, presentpincode, presentstate, referencedby, refererid, referername, spousename, spouseoccupation) FROM stdin;
\.


--
-- Data for Name: stafftransport; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY stafftransport (staffid, academic_year, amount, branch, branchcode, designation, facility, loginuser, route, routeno, staffname, stage, transportmode) FROM stdin;
\.


--
-- Data for Name: staffwillingsubjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY staffwillingsubjects (staffid, branchcode, loginuser, nooftimespracticalsubject1handled, nooftimespracticalsubject2handled, nooftimespracticalsubject3handled, nooftimespracticalsubject4handled, nooftimespracticalsubject5handled, nooftimestheorysubject1handled, nooftimestheorysubject2handled, nooftimestheorysubject3handled, nooftimestheorysubject4handled, nooftimestheorysubject5handled, practicalsubject1code, practicalsubject2code, practicalsubject3code, practicalsubject4code, practicalsubject5code, theorysubject1code, theorysubject2code, theorysubject3code, theorysubject4code, theorysubject5code, totalteachingexperience, staff_willingsubjects_staffid) FROM stdin;
\.


--
-- Data for Name: stenocircular; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY stenocircular (circularid, academicyear, branch, branchcode, circulardate, circularparticular, circulartype, currentdate, loginuser, semester) FROM stdin;
\.


--
-- Data for Name: stenoevents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY stenoevents (eventid, academicyear, branch, branchcode, currentdate, eventdate, eventparticular, eventtype, loginuser, semester) FROM stdin;
\.


--
-- Data for Name: storesmaterialstock; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY storesmaterialstock (item_hsn_code, item_minimum_level, item_name, item_stock_in_hand) FROM stdin;
\.


--
-- Data for Name: storespurchasedetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY storespurchasedetail (id, billno, item_hsn_code, item_name, item_quantity, item_total_price, item_unit_price, vendor_id) FROM stdin;
\.


--
-- Data for Name: storespurchaseheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY storespurchaseheader (billno, academic_year, balance_amount, bank_name, cheque_date, cheque_no, due_date, loginuser, paid_amount, payment_mode, purchase_date, total_amount, vendorid) FROM stdin;
\.


--
-- Data for Name: storesreturndetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY storesreturndetail (id, billno, item_hsn_code, item_name, item_quantity, item_total_price, item_unit_price, vendor_id) FROM stdin;
\.


--
-- Data for Name: storesreturnheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY storesreturnheader (billno, academic_year, balance_amount, bank_name, cheque_date, cheque_no, due_date, loginuser, payment_mode, received_amount, return_date, total_amount, vendorid) FROM stdin;
\.


--
-- Data for Name: storessalesdetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY storessalesdetail (id, billno, item_hsn_code, item_name, item_quantity, item_total_price, item_unit_price) FROM stdin;
\.


--
-- Data for Name: storessalesheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY storessalesheader (billno, academic_year, balance_amount, bank_name, batch, branchcode, cheque_date, cheque_no, due_date, loginuser, paid_amount, payment_mode, regno, sales_date, semester, total_amount) FROM stdin;
\.


--
-- Data for Name: storesvendordetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY storesvendordetails (vendorid, contact_person_alternate_mob_no, contact_person_mob_no, contact_person_name, loginuser, vendor_address1, vendor_address2, vendor_alternate_email, vendor_area, vendor_deleted, vendor_email, vendorgstno, vendor_name, vendor_pan_no, vendor_pin) FROM stdin;
\.


--
-- Data for Name: studentacademicinfo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentacademicinfo (regno, academicyear, admitteddate, bloodgroup, caste, community, durationfrom, durationto, loginuser, "national", religion, student_academic_regno) FROM stdin;
\.


--
-- Data for Name: studentattendancedetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentattendancedetail (id, entrydate, hour, regno, status) FROM stdin;
\.


--
-- Data for Name: studentattendanceheader; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentattendanceheader (entrydate, academiyear, batch, branchcode, dayname, hour, loginuser, semester, total_absent, total_present) FROM stdin;
\.


--
-- Data for Name: studentbaseinformation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentbaseinformation (regno, academicyear, admissionno, batch, branch, branchcode, loginuser, poto, scheme, semester, studentname, studenttype, student_base_regno) FROM stdin;
12MECHI01	2016-2017	12MECHI01	Batch - I	Civil Engineering	1020	KAMAL	Yes	M	1	kamal	Regular	12MECHI01
12MECHI02	2016-2017	12MECHI02	Batch - I	Mechanical Engineering	1020	KAMAL	Yes	M	1	ANUBAMA	Regular	12MECHI02
12MECHI03	2016-2017	12MECHI03	Batch - I	Mechanical Engineering	1020	KAMAL	Yes	M	1	THIRUMAL	Regular	12MECHI03
\.


--
-- Data for Name: studentcollegeid; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentcollegeid (idcardno, batch, academicyear, admissionno, branch, branchcode, candidatename, idissueddate, idstatus, idtype, loginuser, regno, semester) FROM stdin;
\.


--
-- Data for Name: studentdiscontinuedtctab; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentdiscontinuedtctab (regno, academic_year, admissionno, approved, batch, branch, branchcode, candname, caste, community, dateofadmission, dob, dobw, durationfrom, durationto, entrydate, fathername, feesbalance, gender, lastappearedexam, leftdate, loginuser, mothername, nationality, qualified, reasonfortc, religion, semester, studenttype, tcserialno, yearofstudent) FROM stdin;
\.


--
-- Data for Name: studentfood; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentfood (regno, academic_year, branch, branchcode, foodfees, foodtype, loginuser, semester) FROM stdin;
\.


--
-- Data for Name: studenthomework; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studenthomework (subjectcode, academic_year, batch, branch, branchcode, entrydate, homeworkcontent, loginuser, semester, staffid, staff_name, subjectname) FROM stdin;
\.


--
-- Data for Name: studenthostel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studenthostel (regno, academic_year, amount, branch, branch_code, foodtype, loginuser, optd_facility, semester) FROM stdin;
\.


--
-- Data for Name: studentleaveletter; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentleaveletter (fromdate, academic_year, batch, branchcode, entrydate, leavereason, loginuser, noofdays, regno, semester, todate) FROM stdin;
\.


--
-- Data for Name: studentpersonalinformation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentpersonalinformation (regno, academicyear, admissionno, dateofbirth, fathername, gender, loginuser, mothername, name, permanentaddress1, permanentaddress2, permanentaltemail, permanentaltmobileno, permanentarea, permanentemail, permanentmobileno, permanentpincode, permanentstate, presentaddress1, presentaddress2, presentaltemail, presentaltmobileno, presentarea, presentemail, presentmobileno, presentpincode, presentstate, reference) FROM stdin;
12MECHI01	2017-2018	12MECHI01	1978-05-06 00:00:00	BAKTHAVATCHALAM  S	MALE	kamal	MOHANAM  M	KAMALAKANNAN	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	WEST BANU NAGAR,PUDHUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	\N	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	\N	MANIKANDAN
12MECHI02	2017-2018	12MECHI02	1978-05-06 00:00:00	BAKTHAVATCHALAM  S	FEMALE	kamal	MOHANAM  M	ANUBAMA	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	WEST BANU NAGAR,PUDHUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	\N	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	\N	MANIKANDAN
12MECHI03	2017-2018	12MECHI03	1978-05-06 00:00:00	BAKTHAVATCHALAM  S	FEMALE	kamal	MOHANAM  M	SNEHA	1/1190, RAJAYOGI STREET, WEST BANU NAGAR,	WEST BANU NAGAR,PUDHUR	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	\N	1/1190,RAJAYOGI STREET	WEST BANU NAGAR, PUDHUR,	informkamalakannan@gmail.com	9283604647	CHENNAI	informkamalakannan@gmail.com	9283604647	600053	\N	MANIKANDAN
\.


--
-- Data for Name: studentremarksaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentremarksaction (followupid, loginuser, regno, remarkactiondate, remarkactionday, remarkactiondetails, remarkid, statusofaction) FROM stdin;
\.


--
-- Data for Name: studentremarksentry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studentremarksentry (remarkid, academicyear, batch, branchcode, loginuser, primaryaction, regno, remarkdate, remarkday, remarks, semester) FROM stdin;
\.


--
-- Data for Name: studenttransport; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY studenttransport (studenttransportid, academic_year, amount, branch, branch_code, busno, loginuser, regno, route, semester, stage) FROM stdin;
\.


--
-- Data for Name: subjectallocation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY subjectallocation (subjectcode, academicyear, allottedhours, batch, branchcode, branchname, classroomno, columnname, columnno, day, hour, hourspersyllabus, inshort, loadhours1, loadhours2, loginuser, reqhours, scheme, semester, staff1_id, staff1_name, staff2_id, staff2_name, subjectname, subjecttype, totweekhours) FROM stdin;
\.


--
-- Data for Name: subjectentry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY subjectentry (academicyear, branchcode, semester, subjectcode, allottedhours, columnname, hours, inshort, loginuser, reqhours, scheme, subjectname, subjecttype) FROM stdin;
\.


--
-- Data for Name: subjecttimetable; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY subjecttimetable (branch, academic_year, batch, branchcode, dayno, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, loginuser, semester, ttday) FROM stdin;
\.


--
-- Data for Name: tournamentdata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY tournamentdata (tournamentid, locationaddress1, locationaddress2, locationarea, locationpincode, locationstate, loginuser, physicaldirectoraltemail, physicaldirectoraltmobileno, physicaldirectoremail, physicaldirectormobileno, sportscode, sportstype, tournamentdate, tournamentday, tournamentenddate, tournamentlevel, tournamentlocation, tournamentname, tournamentnoofdays, tournamentstartdate) FROM stdin;
\.


--
-- Data for Name: trainconcession; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY trainconcession (trainconcessionid, academicyear, admissionno, branchcode, branchname, certdate, certno, dob, emailid, gender, loginuser, periodfrom, periodto, presentaddress1, presentaddress2, presentmobileno, regno, semester) FROM stdin;
\.


--
-- Data for Name: transportfc; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY transportfc (currentdate, amount, dateoffc, expirydate, loginuser, remarks, vehicleid, vehicletype) FROM stdin;
\.


--
-- Data for Name: transportfeessetting; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY transportfeessetting (academicyear, stage, amount, feessettingdate, loginuser, route) FROM stdin;
\.


--
-- Data for Name: transportidcard; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY transportidcard (regno, batch, academic_year, admissionno, branch, branchcode, candidatename, idcardno, idissueddate, idstatus, idtype, loginuser, routename, routeno, seatno, semester, stage) FROM stdin;
\.


--
-- Data for Name: transportinsurance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY transportinsurance (currentdate, dateofexpiry, insuramount, insurancecompany, loginuser, mobileno, valofvehic, vehicleid, vehicletype) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (username, academic_year, branch_code, designation, first_name, instituteid, last_name, password, semester, staff_id, student_id, user_role) FROM stdin;
kamal	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	kamal	3	123	123	MGMT
seetha	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	seetha	3	123	123	PRPL
rani	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	rani	3	123	123	OADM
jagan	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	jagan	3	123	123	OADMSN
thirumal	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	thirumal	3	123	123	FEES
anubama	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	anubama	3	123	123	OSUPDT
vinoth	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	vinoth	3	123	123	OSTN
ranjani	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	ranjani	3	123	123	OSTO
gautham	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	gautham	3	123	123	OTRAN
franklin	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	franklin	3	123	123	TSTAFF
bhuvana	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	bhuvana	3	123	123	HOD
janani	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	janani	3	123	123	PLO
viji	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	viji	3	123	123	SPRT
prakash	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	prakash	3	123	123	LIB
lokesh	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	lokesh	3	123	123	HOS
karthik	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	karthik	3	123	123	STUD
vishal	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	vishal	3	123	123	SYSADM
sakthi	2017-2018	1010 Civil Engineering	HOD	KAMAL	103	SB	sakthi	3	123	123	PLAYSCHOOL
12MECHI01	2017-2018	1010 Civil Engineering	HOD	KAMAL	101	SB	12MECHI01	3	123	123	STUD
\.


--
-- Data for Name: users_log; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users_log (log_id, log, regno) FROM stdin;
\.


--
-- Data for Name: users_new; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users_new (regno, department, fees, name) FROM stdin;
\.


--
-- Data for Name: users_new_contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users_new_contact (regno, phoneno, cont_regno) FROM stdin;
\.


--
-- Data for Name: users_staff; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users_staff (id, academic_year, branch_code, designation, first_name, last_name, password, staff_id, user_role, username) FROM stdin;
\.


--
-- Data for Name: users_student; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users_student (id, academic_year, branch_code, first_name, last_name, password, semester, student_id, user_role, username) FROM stdin;
\.


--
-- Name: admissioncounselling admissioncounselling_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY admissioncounselling
    ADD CONSTRAINT admissioncounselling_pkey PRIMARY KEY (applno);


--
-- Name: allfeesbalance allfeesbalance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY allfeesbalance
    ADD CONSTRAINT allfeesbalance_pkey PRIMARY KEY (academicyear, regno);


--
-- Name: applicationfollowup applicationfollowup_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY applicationfollowup
    ADD CONSTRAINT applicationfollowup_pkey PRIMARY KEY (applicationno);


--
-- Name: applicationsale applicationsale_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY applicationsale
    ADD CONSTRAINT applicationsale_pkey PRIMARY KEY (applno);


--
-- Name: atheletedetail atheletedetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY atheletedetail
    ADD CONSTRAINT atheletedetail_pkey PRIMARY KEY (id);


--
-- Name: atheleteheader atheleteheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY atheleteheader
    ADD CONSTRAINT atheleteheader_pkey PRIMARY KEY (atheleteid);


--
-- Name: batchdetails batchdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY batchdetails
    ADD CONSTRAINT batchdetails_pkey PRIMARY KEY (batch);


--
-- Name: bformdetail bformdetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY bformdetail
    ADD CONSTRAINT bformdetail_pkey PRIMARY KEY (photoid);


--
-- Name: bformheader bformheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY bformheader
    ADD CONSTRAINT bformheader_pkey PRIMARY KEY (photoid);


--
-- Name: bonafide bonafide_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY bonafide
    ADD CONSTRAINT bonafide_pkey PRIMARY KEY (bonafideid);


--
-- Name: busdetail busdetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY busdetail
    ADD CONSTRAINT busdetail_pkey PRIMARY KEY (department, student_id);


--
-- Name: campusrequestdetail campusrequestdetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY campusrequestdetail
    ADD CONSTRAINT campusrequestdetail_pkey PRIMARY KEY (id);


--
-- Name: campusrequestheader campusrequestheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY campusrequestheader
    ADD CONSTRAINT campusrequestheader_pkey PRIMARY KEY (requestid);


--
-- Name: campusscheduler campusscheduler_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY campusscheduler
    ADD CONSTRAINT campusscheduler_pkey PRIMARY KEY (scheduleid);


--
-- Name: certificatesubmission certificatesubmission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY certificatesubmission
    ADD CONSTRAINT certificatesubmission_pkey PRIMARY KEY (regno);


--
-- Name: collegefeessetting collegefeessetting_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY collegefeessetting
    ADD CONSTRAINT collegefeessetting_pkey PRIMARY KEY (academicyear, branchcode);


--
-- Name: corporatedetail corporatedetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY corporatedetail
    ADD CONSTRAINT corporatedetail_pkey PRIMARY KEY (id);


--
-- Name: corporateheader corporateheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY corporateheader
    ADD CONSTRAINT corporateheader_pkey PRIMARY KEY (corporateid);


--
-- Name: current_academic_student_actual_fees current_academic_student_actual_fees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY current_academic_student_actual_fees
    ADD CONSTRAINT current_academic_student_actual_fees_pkey PRIMARY KEY (regno);


--
-- Name: current_academic_student_balance_fees current_academic_student_balance_fees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY current_academic_student_balance_fees
    ADD CONSTRAINT current_academic_student_balance_fees_pkey PRIMARY KEY (regno);


--
-- Name: current_academic_student_fees_payment current_academic_student_fees_payment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY current_academic_student_fees_payment
    ADD CONSTRAINT current_academic_student_fees_payment_pkey PRIMARY KEY (billno);


--
-- Name: diploma_first_year_bform_detail diploma_first_year_bform_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diploma_first_year_bform_detail
    ADD CONSTRAINT diploma_first_year_bform_detail_pkey PRIMARY KEY (applno);


--
-- Name: diploma_first_year_bform_header diploma_first_year_bform_header_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diploma_first_year_bform_header
    ADD CONSTRAINT diploma_first_year_bform_header_pkey PRIMARY KEY (applno);


--
-- Name: diplomabranchboardexamtimetableheader diplomabranchboardexamtimetableheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomabranchboardexamtimetableheader
    ADD CONSTRAINT diplomabranchboardexamtimetableheader_pkey PRIMARY KEY (academicyear, batch, branchcode, semester);


--
-- Name: diplomabranchsem3boardexamtimetabledetail diplomabranchsem3boardexamtimetabledetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomabranchsem3boardexamtimetabledetail
    ADD CONSTRAINT diplomabranchsem3boardexamtimetabledetail_pkey PRIMARY KEY (regno);


--
-- Name: diplomabranchsem4boardexamtimetabledetail diplomabranchsem4boardexamtimetabledetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomabranchsem4boardexamtimetabledetail
    ADD CONSTRAINT diplomabranchsem4boardexamtimetabledetail_pkey PRIMARY KEY (regno);


--
-- Name: diplomabranchsem5boardexamtimetabledetail diplomabranchsem5boardexamtimetabledetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomabranchsem5boardexamtimetabledetail
    ADD CONSTRAINT diplomabranchsem5boardexamtimetabledetail_pkey PRIMARY KEY (regno);


--
-- Name: diplomabranchsem6boardexamtimetabledetail diplomabranchsem6boardexamtimetabledetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomabranchsem6boardexamtimetabledetail
    ADD CONSTRAINT diplomabranchsem6boardexamtimetabledetail_pkey PRIMARY KEY (regno);


--
-- Name: diplomafirstsemboardexamtimetabledetail diplomafirstsemboardexamtimetabledetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomafirstsemboardexamtimetabledetail
    ADD CONSTRAINT diplomafirstsemboardexamtimetabledetail_pkey PRIMARY KEY (regno);


--
-- Name: diplomafirstyearboardexamtimetableheader diplomafirstyearboardexamtimetableheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomafirstyearboardexamtimetableheader
    ADD CONSTRAINT diplomafirstyearboardexamtimetableheader_pkey PRIMARY KEY (academicyear, batch, branchcode, semester);


--
-- Name: diplomainternalbranchtesttimetabledetail diplomainternalbranchtesttimetabledetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomainternalbranchtesttimetabledetail
    ADD CONSTRAINT diplomainternalbranchtesttimetabledetail_pkey PRIMARY KEY (id);


--
-- Name: diplomainternalbranchtesttimetableheader diplomainternalbranchtesttimetableheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomainternalbranchtesttimetableheader
    ADD CONSTRAINT diplomainternalbranchtesttimetableheader_pkey PRIMARY KEY (academicyear, batch, branchcode, semester, testtype);


--
-- Name: diplomainternalsem1testtimetabledetail diplomainternalsem1testtimetabledetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomainternalsem1testtimetabledetail
    ADD CONSTRAINT diplomainternalsem1testtimetabledetail_pkey PRIMARY KEY (testid);


--
-- Name: diplomainternalsem1testtimetableheader diplomainternalsem1testtimetableheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomainternalsem1testtimetableheader
    ADD CONSTRAINT diplomainternalsem1testtimetableheader_pkey PRIMARY KEY (academicyear, batch, branchcode, semester, testtype);


--
-- Name: diplomainternalsem2testtimetabledetail diplomainternalsem2testtimetabledetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomainternalsem2testtimetabledetail
    ADD CONSTRAINT diplomainternalsem2testtimetabledetail_pkey PRIMARY KEY (testid);


--
-- Name: diplomainternalsem2testtimetableheader diplomainternalsem2testtimetableheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomainternalsem2testtimetableheader
    ADD CONSTRAINT diplomainternalsem2testtimetableheader_pkey PRIMARY KEY (academicyear, batch, branchcode, semester, testtype);


--
-- Name: diplomasecondsemboardexamtimetabledetail diplomasecondsemboardexamtimetabledetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomasecondsemboardexamtimetabledetail
    ADD CONSTRAINT diplomasecondsemboardexamtimetabledetail_pkey PRIMARY KEY (regno);


--
-- Name: egovspellentry egovspellentry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY egovspellentry
    ADD CONSTRAINT egovspellentry_pkey PRIMARY KEY (academicyear, semester, spellno);


--
-- Name: equivalencesubject equivalencesubject_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY equivalencesubject
    ADD CONSTRAINT equivalencesubject_pkey PRIMARY KEY (academicyear);


--
-- Name: ex2detail ex2detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ex2detail
    ADD CONSTRAINT ex2detail_pkey PRIMARY KEY (questioncode);


--
-- Name: ex2header ex2header_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY ex2header
    ADD CONSTRAINT ex2header_pkey PRIMARY KEY (examdate);


--
-- Name: feesentrybase feesentrybase_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY feesentrybase
    ADD CONSTRAINT feesentrybase_pkey PRIMARY KEY (academicyear, regno);


--
-- Name: feesfollowup feesfollowup_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY feesfollowup
    ADD CONSTRAINT feesfollowup_pkey PRIMARY KEY (regno);


--
-- Name: feespayment feespayment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY feespayment
    ADD CONSTRAINT feespayment_pkey PRIMARY KEY (academicyear, regno);


--
-- Name: firstaidentry firstaidentry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY firstaidentry
    ADD CONSTRAINT firstaidentry_pkey PRIMARY KEY (firstaidid);


--
-- Name: foodfeessetting foodfeessetting_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY foodfeessetting
    ADD CONSTRAINT foodfeessetting_pkey PRIMARY KEY (academicyear);


--
-- Name: for_contact for_contact_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY for_contact
    ADD CONSTRAINT for_contact_pkey PRIMARY KEY (regno);


--
-- Name: for_new for_new_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY for_new
    ADD CONSTRAINT for_new_pkey PRIMARY KEY (regno);


--
-- Name: for_user for_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY for_user
    ADD CONSTRAINT for_user_pkey PRIMARY KEY (regno);


--
-- Name: fuelfilling fuelfilling_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY fuelfilling
    ADD CONSTRAINT fuelfilling_pkey PRIMARY KEY (vehicleno);


--
-- Name: hostelfeessetting hostelfeessetting_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hostelfeessetting
    ADD CONSTRAINT hostelfeessetting_pkey PRIMARY KEY (academicyear);


--
-- Name: hostelstudentdetail hostelstudentdetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hostelstudentdetail
    ADD CONSTRAINT hostelstudentdetail_pkey PRIMARY KEY (regno);


--
-- Name: hostelstudentleavedetail hostelstudentleavedetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hostelstudentleavedetail
    ADD CONSTRAINT hostelstudentleavedetail_pkey PRIMARY KEY (fromdate);


--
-- Name: hostelstudentvisitordetail hostelstudentvisitordetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hostelstudentvisitordetail
    ADD CONSTRAINT hostelstudentvisitordetail_pkey PRIMARY KEY (visitorid);


--
-- Name: institutebatchdetails institutebatchdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutebatchdetails
    ADD CONSTRAINT institutebatchdetails_pkey PRIMARY KEY (batch);


--
-- Name: institutebusdetails institutebusdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutebusdetails
    ADD CONSTRAINT institutebusdetails_pkey PRIMARY KEY (busno);


--
-- Name: institutebusnodetails institutebusnodetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutebusnodetails
    ADD CONSTRAINT institutebusnodetails_pkey PRIMARY KEY (busno);


--
-- Name: institutebusroutedetails institutebusroutedetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutebusroutedetails
    ADD CONSTRAINT institutebusroutedetails_pkey PRIMARY KEY (route, stage);


--
-- Name: institutecoursedetails institutecoursedetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutecoursedetails
    ADD CONSTRAINT institutecoursedetails_pkey PRIMARY KEY (coursecode);


--
-- Name: institutedetails institutedetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutedetails
    ADD CONSTRAINT institutedetails_pkey PRIMARY KEY (instituteid);


--
-- Name: instituteexamdetails instituteexamdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY instituteexamdetails
    ADD CONSTRAINT instituteexamdetails_pkey PRIMARY KEY (examname);


--
-- Name: institutetestdetails institutetestdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutetestdetails
    ADD CONSTRAINT institutetestdetails_pkey PRIMARY KEY (testname);


--
-- Name: librarybookentrydetail librarybookentrydetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarybookentrydetail
    ADD CONSTRAINT librarybookentrydetail_pkey PRIMARY KEY (slno);


--
-- Name: librarybookentryheader librarybookentryheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarybookentryheader
    ADD CONSTRAINT librarybookentryheader_pkey PRIMARY KEY (regno);


--
-- Name: librarybookissuereturndetail librarybookissuereturndetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarybookissuereturndetail
    ADD CONSTRAINT librarybookissuereturndetail_pkey PRIMARY KEY (slno);


--
-- Name: librarybookissuereturnheader librarybookissuereturnheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarybookissuereturnheader
    ADD CONSTRAINT librarybookissuereturnheader_pkey PRIMARY KEY (regno);


--
-- Name: librarycdentrydetail librarycdentrydetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarycdentrydetail
    ADD CONSTRAINT librarycdentrydetail_pkey PRIMARY KEY (slno);


--
-- Name: librarycdentryheader librarycdentryheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarycdentryheader
    ADD CONSTRAINT librarycdentryheader_pkey PRIMARY KEY (cdid);


--
-- Name: librarymagazineentry librarymagazineentry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarymagazineentry
    ADD CONSTRAINT librarymagazineentry_pkey PRIMARY KEY (magazineid);


--
-- Name: librarymemberdetail librarymemberdetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarymemberdetail
    ADD CONSTRAINT librarymemberdetail_pkey PRIMARY KEY (regno);


--
-- Name: libraryusage libraryusage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY libraryusage
    ADD CONSTRAINT libraryusage_pkey PRIMARY KEY (regno);


--
-- Name: mtcconcession mtcconcession_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY mtcconcession
    ADD CONSTRAINT mtcconcession_pkey PRIMARY KEY (mtcconcessionid);


--
-- Name: parentfeedback parentfeedback_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY parentfeedback
    ADD CONSTRAINT parentfeedback_pkey PRIMARY KEY (regno);


--
-- Name: questionentry questionentry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY questionentry
    ADD CONSTRAINT questionentry_pkey PRIMARY KEY (sno);


--
-- Name: scholarship scholarship_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY scholarship
    ADD CONSTRAINT scholarship_pkey PRIMARY KEY (scholarshipid);


--
-- Name: securitylatecomers securitylatecomers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securitylatecomers
    ADD CONSTRAINT securitylatecomers_pkey PRIMARY KEY (latecomeid);


--
-- Name: securitymaterialinoutdetail securitymaterialinoutdetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securitymaterialinoutdetail
    ADD CONSTRAINT securitymaterialinoutdetail_pkey PRIMARY KEY (matgatepassid);


--
-- Name: securitymaterialinoutheader securitymaterialinoutheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securitymaterialinoutheader
    ADD CONSTRAINT securitymaterialinoutheader_pkey PRIMARY KEY (matgatepassid);


--
-- Name: securityoutpass securityoutpass_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securityoutpass
    ADD CONSTRAINT securityoutpass_pkey PRIMARY KEY (outpassid);


--
-- Name: securitystudentlatecomers securitystudentlatecomers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securitystudentlatecomers
    ADD CONSTRAINT securitystudentlatecomers_pkey PRIMARY KEY (latecomeid);


--
-- Name: securitystudentoutpass securitystudentoutpass_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securitystudentoutpass
    ADD CONSTRAINT securitystudentoutpass_pkey PRIMARY KEY (outpassid);


--
-- Name: securitystudentvisitorpass securitystudentvisitorpass_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securitystudentvisitorpass
    ADD CONSTRAINT securitystudentvisitorpass_pkey PRIMARY KEY (visitorid);


--
-- Name: securityvehiclesinout securityvehiclesinout_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securityvehiclesinout
    ADD CONSTRAINT securityvehiclesinout_pkey PRIMARY KEY (vehiclesinoutid);


--
-- Name: securityvisitorpass securityvisitorpass_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securityvisitorpass
    ADD CONSTRAINT securityvisitorpass_pkey PRIMARY KEY (visitorid);


--
-- Name: sportskitspurchasedetail sportskitspurchasedetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sportskitspurchasedetail
    ADD CONSTRAINT sportskitspurchasedetail_pkey PRIMARY KEY (id);


--
-- Name: sportskitspurchaseheader sportskitspurchaseheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sportskitspurchaseheader
    ADD CONSTRAINT sportskitspurchaseheader_pkey PRIMARY KEY (billno);


--
-- Name: sportskitsstock sportskitsstock_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sportskitsstock
    ADD CONSTRAINT sportskitsstock_pkey PRIMARY KEY (itemcode);


--
-- Name: sportsod sportsod_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sportsod
    ADD CONSTRAINT sportsod_pkey PRIMARY KEY (id);


--
-- Name: sportspddetail sportspddetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sportspddetail
    ADD CONSTRAINT sportspddetail_pkey PRIMARY KEY (institutecode);


--
-- Name: spring_session_attributes spring_session_attributes_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY spring_session_attributes
    ADD CONSTRAINT spring_session_attributes_pk PRIMARY KEY (session_id, attribute_name);


--
-- Name: spring_session spring_session_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY spring_session
    ADD CONSTRAINT spring_session_pk PRIMARY KEY (session_id);


--
-- Name: staffacademicinformation staffacademicinformation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffacademicinformation
    ADD CONSTRAINT staffacademicinformation_pkey PRIMARY KEY (staffid);


--
-- Name: staffattendancedetail staffattendancedetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffattendancedetail
    ADD CONSTRAINT staffattendancedetail_pkey PRIMARY KEY (attdate);


--
-- Name: staffattendanceheader staffattendanceheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffattendanceheader
    ADD CONSTRAINT staffattendanceheader_pkey PRIMARY KEY (attdate);


--
-- Name: staffbaseinformation staffbaseinformation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffbaseinformation
    ADD CONSTRAINT staffbaseinformation_pkey PRIMARY KEY (staffid);


--
-- Name: staffdepositinformation staffdepositinformation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffdepositinformation
    ADD CONSTRAINT staffdepositinformation_pkey PRIMARY KEY (staffid);


--
-- Name: staffeligibilityinformation staffeligibilityinformation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffeligibilityinformation
    ADD CONSTRAINT staffeligibilityinformation_pkey PRIMARY KEY (staffid);


--
-- Name: staffleaveletterentry staffleaveletterentry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffleaveletterentry
    ADD CONSTRAINT staffleaveletterentry_pkey PRIMARY KEY (staffid);


--
-- Name: staffpersonalinformation staffpersonalinformation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffpersonalinformation
    ADD CONSTRAINT staffpersonalinformation_pkey PRIMARY KEY (staffid);


--
-- Name: stafftransport stafftransport_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY stafftransport
    ADD CONSTRAINT stafftransport_pkey PRIMARY KEY (staffid);


--
-- Name: staffwillingsubjects staffwillingsubjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffwillingsubjects
    ADD CONSTRAINT staffwillingsubjects_pkey PRIMARY KEY (staffid);


--
-- Name: stenocircular stenocircular_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY stenocircular
    ADD CONSTRAINT stenocircular_pkey PRIMARY KEY (circularid);


--
-- Name: stenoevents stenoevents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY stenoevents
    ADD CONSTRAINT stenoevents_pkey PRIMARY KEY (eventid);


--
-- Name: storesmaterialstock storesmaterialstock_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storesmaterialstock
    ADD CONSTRAINT storesmaterialstock_pkey PRIMARY KEY (item_hsn_code);


--
-- Name: storespurchasedetail storespurchasedetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storespurchasedetail
    ADD CONSTRAINT storespurchasedetail_pkey PRIMARY KEY (id);


--
-- Name: storespurchaseheader storespurchaseheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storespurchaseheader
    ADD CONSTRAINT storespurchaseheader_pkey PRIMARY KEY (billno);


--
-- Name: storesreturndetail storesreturndetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storesreturndetail
    ADD CONSTRAINT storesreturndetail_pkey PRIMARY KEY (id);


--
-- Name: storesreturnheader storesreturnheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storesreturnheader
    ADD CONSTRAINT storesreturnheader_pkey PRIMARY KEY (billno);


--
-- Name: storessalesdetail storessalesdetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storessalesdetail
    ADD CONSTRAINT storessalesdetail_pkey PRIMARY KEY (id);


--
-- Name: storessalesheader storessalesheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storessalesheader
    ADD CONSTRAINT storessalesheader_pkey PRIMARY KEY (billno);


--
-- Name: storesvendordetails storesvendordetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storesvendordetails
    ADD CONSTRAINT storesvendordetails_pkey PRIMARY KEY (vendorid);


--
-- Name: studentacademicinfo studentacademicinfo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentacademicinfo
    ADD CONSTRAINT studentacademicinfo_pkey PRIMARY KEY (regno);


--
-- Name: studentattendancedetail studentattendancedetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentattendancedetail
    ADD CONSTRAINT studentattendancedetail_pkey PRIMARY KEY (id);


--
-- Name: studentattendanceheader studentattendanceheader_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentattendanceheader
    ADD CONSTRAINT studentattendanceheader_pkey PRIMARY KEY (entrydate);


--
-- Name: studentbaseinformation studentbaseinformation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentbaseinformation
    ADD CONSTRAINT studentbaseinformation_pkey PRIMARY KEY (regno);


--
-- Name: studentcollegeid studentcollegeid_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentcollegeid
    ADD CONSTRAINT studentcollegeid_pkey PRIMARY KEY (idcardno);


--
-- Name: studentdiscontinuedtctab studentdiscontinuedtctab_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentdiscontinuedtctab
    ADD CONSTRAINT studentdiscontinuedtctab_pkey PRIMARY KEY (regno);


--
-- Name: studentfood studentfood_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentfood
    ADD CONSTRAINT studentfood_pkey PRIMARY KEY (regno);


--
-- Name: studenthomework studenthomework_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studenthomework
    ADD CONSTRAINT studenthomework_pkey PRIMARY KEY (subjectcode);


--
-- Name: studenthostel studenthostel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studenthostel
    ADD CONSTRAINT studenthostel_pkey PRIMARY KEY (regno);


--
-- Name: studentleaveletter studentleaveletter_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentleaveletter
    ADD CONSTRAINT studentleaveletter_pkey PRIMARY KEY (fromdate);


--
-- Name: studentpersonalinformation studentpersonalinformation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentpersonalinformation
    ADD CONSTRAINT studentpersonalinformation_pkey PRIMARY KEY (regno);


--
-- Name: studentremarksaction studentremarksaction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentremarksaction
    ADD CONSTRAINT studentremarksaction_pkey PRIMARY KEY (followupid);


--
-- Name: studentremarksentry studentremarksentry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentremarksentry
    ADD CONSTRAINT studentremarksentry_pkey PRIMARY KEY (remarkid);


--
-- Name: studenttransport studenttransport_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studenttransport
    ADD CONSTRAINT studenttransport_pkey PRIMARY KEY (studenttransportid);


--
-- Name: subjectallocation subjectallocation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY subjectallocation
    ADD CONSTRAINT subjectallocation_pkey PRIMARY KEY (subjectcode);


--
-- Name: subjectentry subjectentry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY subjectentry
    ADD CONSTRAINT subjectentry_pkey PRIMARY KEY (academicyear, branchcode, semester, subjectcode);


--
-- Name: subjecttimetable subjecttimetable_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY subjecttimetable
    ADD CONSTRAINT subjecttimetable_pkey PRIMARY KEY (branch);


--
-- Name: tournamentdata tournamentdata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tournamentdata
    ADD CONSTRAINT tournamentdata_pkey PRIMARY KEY (tournamentid);


--
-- Name: trainconcession trainconcession_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY trainconcession
    ADD CONSTRAINT trainconcession_pkey PRIMARY KEY (trainconcessionid);


--
-- Name: transportfc transportfc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transportfc
    ADD CONSTRAINT transportfc_pkey PRIMARY KEY (currentdate);


--
-- Name: transportfeessetting transportfeessetting_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transportfeessetting
    ADD CONSTRAINT transportfeessetting_pkey PRIMARY KEY (academicyear, stage);


--
-- Name: transportidcard transportidcard_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transportidcard
    ADD CONSTRAINT transportidcard_pkey PRIMARY KEY (regno);


--
-- Name: transportinsurance transportinsurance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transportinsurance
    ADD CONSTRAINT transportinsurance_pkey PRIMARY KEY (currentdate);


--
-- Name: librarymemberdetail uk_7nyqwtb9cmimxwwi4ewpp7iao; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarymemberdetail
    ADD CONSTRAINT uk_7nyqwtb9cmimxwwi4ewpp7iao UNIQUE (memberid);


--
-- Name: admissioncounselling uk_f8ba0quj9pjsh1d8v0sjq31i5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY admissioncounselling
    ADD CONSTRAINT uk_f8ba0quj9pjsh1d8v0sjq31i5 UNIQUE (admissionno);


--
-- Name: diploma_first_year_bform_detail uk_gj915wl814ilkmm43lodxxj6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diploma_first_year_bform_detail
    ADD CONSTRAINT uk_gj915wl814ilkmm43lodxxj6 UNIQUE (photoid);


--
-- Name: librarybookentryheader uk_hs6mfxqgancq85p8qqsednolv; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarybookentryheader
    ADD CONSTRAINT uk_hs6mfxqgancq85p8qqsednolv UNIQUE (bookslno);


--
-- Name: librarycdentryheader uk_i3ims1imn9psi5t4u50rsbgqc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarycdentryheader
    ADD CONSTRAINT uk_i3ims1imn9psi5t4u50rsbgqc UNIQUE (cdslno);


--
-- Name: certificatesubmission uk_mkcn4hru5n44cuwcd4wrpm2jy; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY certificatesubmission
    ADD CONSTRAINT uk_mkcn4hru5n44cuwcd4wrpm2jy UNIQUE (foloi_no);


--
-- Name: users_log users_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users_log
    ADD CONSTRAINT users_log_pkey PRIMARY KEY (log_id);


--
-- Name: users_new_contact users_new_contact_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users_new_contact
    ADD CONSTRAINT users_new_contact_pkey PRIMARY KEY (regno);


--
-- Name: users_new users_new_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users_new
    ADD CONSTRAINT users_new_pkey PRIMARY KEY (regno);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);


--
-- Name: users_staff users_staff_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users_staff
    ADD CONSTRAINT users_staff_pkey PRIMARY KEY (id);


--
-- Name: users_student users_student_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users_student
    ADD CONSTRAINT users_student_pkey PRIMARY KEY (id);


--
-- Name: spring_session_attributes_ix1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX spring_session_attributes_ix1 ON spring_session_attributes USING btree (session_id);


--
-- Name: spring_session_ix1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX spring_session_ix1 ON spring_session USING btree (last_access_time);


--
-- Name: sportsod fk12w2jrbv611hdjl6sykk6maaq; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sportsod
    ADD CONSTRAINT fk12w2jrbv611hdjl6sykk6maaq FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: users fk18bsywnidwrhexi25loryfq2l; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fk18bsywnidwrhexi25loryfq2l FOREIGN KEY (instituteid) REFERENCES institutedetails(instituteid);


--
-- Name: diplomainternalsem1testtimetabledetail fk1ab70len9lfkx0g0i9fdgbqj4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomainternalsem1testtimetabledetail
    ADD CONSTRAINT fk1ab70len9lfkx0g0i9fdgbqj4 FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: staffeligibilityinformation fk3hdutkoyng772fv8rwnj4efmy; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffeligibilityinformation
    ADD CONSTRAINT fk3hdutkoyng772fv8rwnj4efmy FOREIGN KEY (staff_eligibility_staffid) REFERENCES staffpersonalinformation(staffid);


--
-- Name: campusrequestdetail fk3jpmwiwmeuoiq5snicamjwdmx; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY campusrequestdetail
    ADD CONSTRAINT fk3jpmwiwmeuoiq5snicamjwdmx FOREIGN KEY (requestid) REFERENCES campusrequestheader(requestid);


--
-- Name: campusrequestheader fk3jxvvmedf0m13cn4ge0wy4f2f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY campusrequestheader
    ADD CONSTRAINT fk3jxvvmedf0m13cn4ge0wy4f2f FOREIGN KEY (corporateid) REFERENCES corporateheader(corporateid);


--
-- Name: diplomainternalsem2testtimetabledetail fk4m6hsq3a0hq1j1q64n43q8buw; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomainternalsem2testtimetabledetail
    ADD CONSTRAINT fk4m6hsq3a0hq1j1q64n43q8buw FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: current_academic_student_fees_payment fk57guiu47t6i1jw1i2c0e5yua5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY current_academic_student_fees_payment
    ADD CONSTRAINT fk57guiu47t6i1jw1i2c0e5yua5 FOREIGN KEY (regno) REFERENCES current_academic_student_actual_fees(regno);


--
-- Name: studentremarksentry fk5kx7t4tw1vear1l0im8ffx9d1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentremarksentry
    ADD CONSTRAINT fk5kx7t4tw1vear1l0im8ffx9d1 FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: institutebusnodetails fk6ihyejk1i53nm5rdwj273fvci; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutebusnodetails
    ADD CONSTRAINT fk6ihyejk1i53nm5rdwj273fvci FOREIGN KEY (instituteid) REFERENCES institutedetails(instituteid);


--
-- Name: hostelstudentleavedetail fk723er31xgrcb1n4an508ow5ka; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hostelstudentleavedetail
    ADD CONSTRAINT fk723er31xgrcb1n4an508ow5ka FOREIGN KEY (regno) REFERENCES hostelstudentdetail(regno);


--
-- Name: institutecoursedetails fk72e7ryx9o7a8i3ojt5ghw3k5a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutecoursedetails
    ADD CONSTRAINT fk72e7ryx9o7a8i3ojt5ghw3k5a FOREIGN KEY (instituteid) REFERENCES institutedetails(instituteid);


--
-- Name: diplomabranchsem4boardexamtimetabledetail fk74w26hky6y2qog1jthkvkx88r; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomabranchsem4boardexamtimetabledetail
    ADD CONSTRAINT fk74w26hky6y2qog1jthkvkx88r FOREIGN KEY (student_base_regno) REFERENCES studentbaseinformation(regno);


--
-- Name: for_contact fk7b0ypp08b6qnmgb2un65n83fs; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY for_contact
    ADD CONSTRAINT fk7b0ypp08b6qnmgb2un65n83fs FOREIGN KEY (cont_regno) REFERENCES for_user(regno);


--
-- Name: securitystudentvisitorpass fk7csl4m1c8fh2k31unp3sln09f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securitystudentvisitorpass
    ADD CONSTRAINT fk7csl4m1c8fh2k31unp3sln09f FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: current_academic_student_balance_fees fk7hygudv9lu5nwjta088b5yagn; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY current_academic_student_balance_fees
    ADD CONSTRAINT fk7hygudv9lu5nwjta088b5yagn FOREIGN KEY (student_base_regno) REFERENCES current_academic_student_actual_fees(regno);


--
-- Name: firstaidentry fk7nsbk9j5tiumotmwfgvfcwm45; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY firstaidentry
    ADD CONSTRAINT fk7nsbk9j5tiumotmwfgvfcwm45 FOREIGN KEY (regno) REFERENCES studentpersonalinformation(regno);


--
-- Name: atheleteheader fk814b35ylbc8migurm588o3eb4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY atheleteheader
    ADD CONSTRAINT fk814b35ylbc8migurm588o3eb4 FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: institutetestdetails fk9dwxphsau60x5rmbebm4jhn07; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutetestdetails
    ADD CONSTRAINT fk9dwxphsau60x5rmbebm4jhn07 FOREIGN KEY (instituteid) REFERENCES institutedetails(instituteid);


--
-- Name: atheletedetail fk9ml753nb269yv34m4mgegx5h9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY atheletedetail
    ADD CONSTRAINT fk9ml753nb269yv34m4mgegx5h9 FOREIGN KEY (atheleteid) REFERENCES atheleteheader(atheleteid);


--
-- Name: securitystudentoutpass fka42oo739yqt3q3q2t9oluqtud; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securitystudentoutpass
    ADD CONSTRAINT fka42oo739yqt3q3q2t9oluqtud FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: diploma_first_year_bform_detail fka65rb2hahrdy90gifhqj40519; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diploma_first_year_bform_detail
    ADD CONSTRAINT fka65rb2hahrdy90gifhqj40519 FOREIGN KEY (bform_det_applno) REFERENCES admissioncounselling(applno);


--
-- Name: studentattendancedetail fkawvreu34mbex80yncnrdpudck; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentattendancedetail
    ADD CONSTRAINT fkawvreu34mbex80yncnrdpudck FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: mtcconcession fkbjc7vg1wtmxcf33pl9vto5qrk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY mtcconcession
    ADD CONSTRAINT fkbjc7vg1wtmxcf33pl9vto5qrk FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: studentcollegeid fkca63wmg20aku8ui2bkcy9qu9u; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentcollegeid
    ADD CONSTRAINT fkca63wmg20aku8ui2bkcy9qu9u FOREIGN KEY (regno) REFERENCES studentpersonalinformation(regno);


--
-- Name: staffbaseinformation fkcswdioxy9h97n7jlaqel8xwjs; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffbaseinformation
    ADD CONSTRAINT fkcswdioxy9h97n7jlaqel8xwjs FOREIGN KEY (staff_base_staffid) REFERENCES staffpersonalinformation(staffid);


--
-- Name: securitystudentlatecomers fkd1fms1imkjo6ay0ajsoxhli5i; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY securitystudentlatecomers
    ADD CONSTRAINT fkd1fms1imkjo6ay0ajsoxhli5i FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: storesreturnheader fkdd1q23l88pmhhc4w9l2lv3hkx; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storesreturnheader
    ADD CONSTRAINT fkdd1q23l88pmhhc4w9l2lv3hkx FOREIGN KEY (vendorid) REFERENCES storesvendordetails(vendorid);


--
-- Name: librarybookentrydetail fkddaboofhdweb6h5995equr34l; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarybookentrydetail
    ADD CONSTRAINT fkddaboofhdweb6h5995equr34l FOREIGN KEY (regno) REFERENCES librarybookentryheader(regno);


--
-- Name: admissioncounselling fkdqhj92xakvojd0e1iim0rssyl; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY admissioncounselling
    ADD CONSTRAINT fkdqhj92xakvojd0e1iim0rssyl FOREIGN KEY (couns_applno) REFERENCES applicationsale(applno);


--
-- Name: scholarship fkdx66kpc0gr1b28xaromuy52fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY scholarship
    ADD CONSTRAINT fkdx66kpc0gr1b28xaromuy52fk FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: studentremarksaction fkecxnkajl1mg3nsvjdkgii2lf4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentremarksaction
    ADD CONSTRAINT fkecxnkajl1mg3nsvjdkgii2lf4 FOREIGN KEY (remarkid) REFERENCES studentremarksentry(remarkid);


--
-- Name: diplomabranchsem6boardexamtimetabledetail fker6oejfhtr4udvlefc0rvudfp; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomabranchsem6boardexamtimetabledetail
    ADD CONSTRAINT fker6oejfhtr4udvlefc0rvudfp FOREIGN KEY (student_base_regno) REFERENCES studentbaseinformation(regno);


--
-- Name: certificatesubmission fkf253ks4uycmi1aoppnwt1bcbc; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY certificatesubmission
    ADD CONSTRAINT fkf253ks4uycmi1aoppnwt1bcbc FOREIGN KEY (student_certificate_regno) REFERENCES studentpersonalinformation(regno);


--
-- Name: diplomafirstsemboardexamtimetabledetail fkf4wb217cnpmb9nvgi8gs2nux9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomafirstsemboardexamtimetabledetail
    ADD CONSTRAINT fkf4wb217cnpmb9nvgi8gs2nux9 FOREIGN KEY (student_base_regno) REFERENCES studentbaseinformation(regno);


--
-- Name: storessalesdetail fkf5qmvueupe1900v41it0m1d51; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storessalesdetail
    ADD CONSTRAINT fkf5qmvueupe1900v41it0m1d51 FOREIGN KEY (billno) REFERENCES storessalesheader(billno);


--
-- Name: storesreturndetail fkfk5mq8mwaknomw5apxmlh2cxo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storesreturndetail
    ADD CONSTRAINT fkfk5mq8mwaknomw5apxmlh2cxo FOREIGN KEY (billno) REFERENCES storesreturnheader(billno);


--
-- Name: diplomabranchsem3boardexamtimetabledetail fkg653msomtoov6w7kanpdil3w7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomabranchsem3boardexamtimetabledetail
    ADD CONSTRAINT fkg653msomtoov6w7kanpdil3w7 FOREIGN KEY (student_base_regno) REFERENCES studentbaseinformation(regno);


--
-- Name: bonafide fkgx2hb8sa06sypmc2xvj93c0r2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY bonafide
    ADD CONSTRAINT fkgx2hb8sa06sypmc2xvj93c0r2 FOREIGN KEY (regno) REFERENCES studentpersonalinformation(regno);


--
-- Name: libraryusage fkh39lm14n233wywuitk3hl1io3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY libraryusage
    ADD CONSTRAINT fkh39lm14n233wywuitk3hl1io3 FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: librarybookissuereturnheader fkhb5pasbfyanmtn3aoixmo2j3h; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarybookissuereturnheader
    ADD CONSTRAINT fkhb5pasbfyanmtn3aoixmo2j3h FOREIGN KEY (regno) REFERENCES librarymemberdetail(regno);


--
-- Name: studentleaveletter fkhysg9ockqg6c32afnk0iqxb8v; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentleaveletter
    ADD CONSTRAINT fkhysg9ockqg6c32afnk0iqxb8v FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: feesfollowup fkir6j75eilbxvv7x8vxqlsfdbg; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY feesfollowup
    ADD CONSTRAINT fkir6j75eilbxvv7x8vxqlsfdbg FOREIGN KEY (student_base_regno) REFERENCES current_academic_student_actual_fees(regno);


--
-- Name: institutebusroutedetails fkiwhij9d0x6w029hh7fcynu7l4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutebusroutedetails
    ADD CONSTRAINT fkiwhij9d0x6w029hh7fcynu7l4 FOREIGN KEY (instituteid) REFERENCES institutedetails(instituteid);


--
-- Name: staffwillingsubjects fkjqowod3mhm7mwhh4ml220qgqu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffwillingsubjects
    ADD CONSTRAINT fkjqowod3mhm7mwhh4ml220qgqu FOREIGN KEY (staff_willingsubjects_staffid) REFERENCES staffpersonalinformation(staffid);


--
-- Name: storessalesheader fkju27jw6iqxirgvde8kx8fa98y; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storessalesheader
    ADD CONSTRAINT fkju27jw6iqxirgvde8kx8fa98y FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: staffacademicinformation fkk8i5ror2d4jejn86p9qktlyhq; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffacademicinformation
    ADD CONSTRAINT fkk8i5ror2d4jejn86p9qktlyhq FOREIGN KEY (staff_academic_staffid) REFERENCES staffpersonalinformation(staffid);


--
-- Name: hostelstudentdetail fkkefaen930wtl17pypybrylx2v; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hostelstudentdetail
    ADD CONSTRAINT fkkefaen930wtl17pypybrylx2v FOREIGN KEY (student_base_regno) REFERENCES studentbaseinformation(regno);


--
-- Name: storespurchaseheader fkkf273b9bgtx29oiql3c0l2ts7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storespurchaseheader
    ADD CONSTRAINT fkkf273b9bgtx29oiql3c0l2ts7 FOREIGN KEY (vendorid) REFERENCES storesvendordetails(vendorid);


--
-- Name: studentbaseinformation fkkhv33pkrfls1c72ckpii70vx4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentbaseinformation
    ADD CONSTRAINT fkkhv33pkrfls1c72ckpii70vx4 FOREIGN KEY (student_base_regno) REFERENCES studentpersonalinformation(regno);


--
-- Name: current_academic_student_actual_fees fkki26dt5ee612g33mteou36kfk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY current_academic_student_actual_fees
    ADD CONSTRAINT fkki26dt5ee612g33mteou36kfk FOREIGN KEY (student_base_regno) REFERENCES studentbaseinformation(regno);


--
-- Name: hostelstudentvisitordetail fkl59oqfoutca4v7d8c5abova3u; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hostelstudentvisitordetail
    ADD CONSTRAINT fkl59oqfoutca4v7d8c5abova3u FOREIGN KEY (regno) REFERENCES hostelstudentdetail(regno);


--
-- Name: diploma_first_year_bform_header fklfx9fuii7rndkbcnniro4vjor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diploma_first_year_bform_header
    ADD CONSTRAINT fklfx9fuii7rndkbcnniro4vjor FOREIGN KEY (bform_head_applno) REFERENCES admissioncounselling(applno);


--
-- Name: batchdetails fklusrhltaf3i4chosqup21xuqx; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY batchdetails
    ADD CONSTRAINT fklusrhltaf3i4chosqup21xuqx FOREIGN KEY (instituteid) REFERENCES institutedetails(instituteid);


--
-- Name: corporatedetail fklxvd4eqpoi6d2tsi63af3fdcw; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY corporatedetail
    ADD CONSTRAINT fklxvd4eqpoi6d2tsi63af3fdcw FOREIGN KEY (corporateid) REFERENCES corporateheader(corporateid);


--
-- Name: diplomasecondsemboardexamtimetabledetail fkmdsk57npdng87vg8u3hiftlyd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomasecondsemboardexamtimetabledetail
    ADD CONSTRAINT fkmdsk57npdng87vg8u3hiftlyd FOREIGN KEY (student_base_regno) REFERENCES studentbaseinformation(regno);


--
-- Name: librarybookissuereturndetail fkmsu1w8f0v4w9alc2iarlp6b4s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarybookissuereturndetail
    ADD CONSTRAINT fkmsu1w8f0v4w9alc2iarlp6b4s FOREIGN KEY (regno) REFERENCES librarybookissuereturnheader(regno);


--
-- Name: sportskitspurchasedetail fknip90h2ca58ip0s1ogwmdj3al; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sportskitspurchasedetail
    ADD CONSTRAINT fknip90h2ca58ip0s1ogwmdj3al FOREIGN KEY (billno) REFERENCES sportskitspurchaseheader(billno);


--
-- Name: institutebatchdetails fko2dbavr6sytojovua7fnv5ub6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutebatchdetails
    ADD CONSTRAINT fko2dbavr6sytojovua7fnv5ub6 FOREIGN KEY (instituteid) REFERENCES institutedetails(instituteid);


--
-- Name: librarycdentrydetail fkp68odgl5r1ix85vw60bsa86pd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarycdentrydetail
    ADD CONSTRAINT fkp68odgl5r1ix85vw60bsa86pd FOREIGN KEY (cdid) REFERENCES librarycdentryheader(cdid);


--
-- Name: staffdepositinformation fkp98il4tw2hkmvbbcj526w9ajj; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY staffdepositinformation
    ADD CONSTRAINT fkp98il4tw2hkmvbbcj526w9ajj FOREIGN KEY (staff_deposit_staffid) REFERENCES staffpersonalinformation(staffid);


--
-- Name: instituteexamdetails fkpey3sxysk0efmdts97glbut3d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY instituteexamdetails
    ADD CONSTRAINT fkpey3sxysk0efmdts97glbut3d FOREIGN KEY (instituteid) REFERENCES institutedetails(instituteid);


--
-- Name: storespurchasedetail fkpfrwd45vs6xl7qvvpn1xx9pbw; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY storespurchasedetail
    ADD CONSTRAINT fkpfrwd45vs6xl7qvvpn1xx9pbw FOREIGN KEY (billno) REFERENCES storespurchaseheader(billno);


--
-- Name: diplomabranchsem5boardexamtimetabledetail fkq7ilkbx8hlxdw34b8nexm8kwv; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomabranchsem5boardexamtimetabledetail
    ADD CONSTRAINT fkq7ilkbx8hlxdw34b8nexm8kwv FOREIGN KEY (student_base_regno) REFERENCES studentbaseinformation(regno);


--
-- Name: users_new_contact fkr3tf8s733t0vbub19iypknjgh; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users_new_contact
    ADD CONSTRAINT fkr3tf8s733t0vbub19iypknjgh FOREIGN KEY (cont_regno) REFERENCES users_new(regno);


--
-- Name: trainconcession fkroqjdshfeqrf2ehk1xcjnbtb6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY trainconcession
    ADD CONSTRAINT fkroqjdshfeqrf2ehk1xcjnbtb6 FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: studentacademicinfo fks5u6dbm2xcg8efpqipiuhvawl; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studentacademicinfo
    ADD CONSTRAINT fks5u6dbm2xcg8efpqipiuhvawl FOREIGN KEY (student_academic_regno) REFERENCES studentpersonalinformation(regno);


--
-- Name: institutebusdetails fksh6lg25trrg3etww7pv5hrpf3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY institutebusdetails
    ADD CONSTRAINT fksh6lg25trrg3etww7pv5hrpf3 FOREIGN KEY (instituteid) REFERENCES institutedetails(instituteid);


--
-- Name: diplomainternalbranchtesttimetabledetail fksl35ekdjd8v6s2v7ph4bn9ys7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY diplomainternalbranchtesttimetabledetail
    ADD CONSTRAINT fksl35ekdjd8v6s2v7ph4bn9ys7 FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: librarymemberdetail fkswhx0ewt218hhq7w0igowkj5q; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY librarymemberdetail
    ADD CONSTRAINT fkswhx0ewt218hhq7w0igowkj5q FOREIGN KEY (student_base_regno) REFERENCES studentbaseinformation(regno);


--
-- Name: studenttransport fkt0ghhdrgqylru715wvxmjfeg4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY studenttransport
    ADD CONSTRAINT fkt0ghhdrgqylru715wvxmjfeg4 FOREIGN KEY (regno) REFERENCES studentbaseinformation(regno);


--
-- Name: spring_session_attributes spring_session_attributes_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY spring_session_attributes
    ADD CONSTRAINT spring_session_attributes_fk FOREIGN KEY (session_id) REFERENCES spring_session(session_id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

