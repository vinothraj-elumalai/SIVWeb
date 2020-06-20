sivwebapp.controller('instituteDetailsCtrl', function($scope, $http, hosturl) {
    
    $scope.institutiondetailsSubmit = function(){
        var institutelogofile= $('#institutelogo')[0].files[0];
        var data = new FormData();
        data.append("institutelogo", institutelogofile);
        data.append("institutecode",$scope.institutedetailsdata.institutecode);
        data.append("institutename",$scope.institutedetailsdata.institutename);
        data.append("institutetype",$scope.institutedetailsdata.institutetype);
        data.append("instituteaddress1",$scope.institutedetailsdata.instituteaddress1);
        data.append("instituteaddress2",$scope.institutedetailsdata.instituteaddress2);
        data.append("institutecity",$scope.institutedetailsdata.institutecity);
        data.append("institutepincode",$scope.institutedetailsdata.institutepincode);
        data.append("institutestate",$scope.institutedetailsdata.institutestate);
        data.append("institutecontactno1",$scope.institutedetailsdata.institutecontactno1);
        data.append("institutecontactno2",$scope.institutedetailsdata.institutecontactno2);
        data.append("instituteemail1",$scope.institutedetailsdata.instituteemail1);
        data.append("instituteemail2",$scope.institutedetailsdata.instituteemail2);
        data.append("instituteweb",$scope.institutedetailsdata.instituteweb);
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: hosturl+"/api/v1/institutedetails",
            data: data,
            processData: false, //prevent jQuery from automatically transforming the data into a query string
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
            },
            error: function (e) {
            }
        });
    }
});