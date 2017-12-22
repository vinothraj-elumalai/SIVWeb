sivwebapp.controller('campusRequestCtrl', function($scope, $http, hosturl) {
    $scope.campusRequestSubmit = function(){
    	console.log($scope.campusrequestdata);
        $http({
                url: hosturl+"/api/v1/campusrequest",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.campusrequestdata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

            /*table entry*/
    $scope.campusrequestdataList = [];
    $scope.additem= function(campusrequestdata){
        $scope.campusrequestdataList.push(
            {
                'branch':campusrequestdata.branch,
                'branchcode':campusrequestdata.branchcode,
                'semester':campusrequestdata.semester,
                'studentcategory':campusrequestdata.studentcategory,
                'noofstudents':campusrequestdata.noofstudents
            }
        );
        $scope.campusrequestdata={};
    }
    $scope.deleteitem = function (item) {
        $scope.campusrequestdataList.splice($scope.campusrequestdataList.indexOf(item), 1);
    }
    /*table entry*/
});