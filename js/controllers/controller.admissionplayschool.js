sivwebapp.controller('admissionPlaySchoolCtrl', function($scope, $http) {
    $scope.admissionPlaySchoolSubmit = function(){
        console.log($scope.admissionplayschooldata);
        $http({
                url: "http://localhost:8080/api/v1/admissionplayschool",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.admissionplayschooldata)
            }).then(function(success) {
                
            },function (error){
                
            });
    }


    $scope.searchAppNo = function(){
        $http({
                url: "http://localhost:8080/api/v1/admissionplayschool/getPlaySchoolApplcationDetail",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.searchAppnoData)
            }).then(function(success) {
                console.log(success.data);
            },function (error){
                
            });
    }

    $scope.activestep = 1;
    $scope.gotostep = function(position){
        $scope.activestep = position;
    }



});