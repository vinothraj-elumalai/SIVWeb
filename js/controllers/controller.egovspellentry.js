sivwebapp.controller('egovSpellEntryCtrl', function($scope, $http) {
    $scope.egovSpellEntrySubmit = function(){
    	console.log($scope.egovspellentrydata);
        $http({
                url: "http://localhost:8080/api/v1/egovspellentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.egovspellentrydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});