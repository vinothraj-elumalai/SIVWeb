sivwebapp.controller('trainconcessionCtrl', function($scope, $http, hosturl) {
    $scope.trainconcessionSubmit = function(){
    	console.log($scope.trainconcessiondata);
        $http({
                url: hosturl+"/api/v1/trainconcession",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.trainconcessiondata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});