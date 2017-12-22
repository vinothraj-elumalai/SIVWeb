sivwebapp.controller('egovSpellEntryCtrl', function($scope, $http, hosturl) {
    $scope.egovSpellEntrySubmit = function(){
    	console.log($scope.egovspellentrydata);
        $http({
                url: hosturl+"/api/v1/egovspellentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.egovspellentrydata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }
});