sivwebapp.controller('studentHostelCtrl', function($scope, $http, hosturl) {
    $scope.studentHostelSubmit = function(){
        console.log($scope.studentHosteldata);
        $http({
                url: hosturl+"/api/v1/studenthostel",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.studentHosteldata)
            }).then(function(success) {
                
            },function (error){
                
            });
    }
});