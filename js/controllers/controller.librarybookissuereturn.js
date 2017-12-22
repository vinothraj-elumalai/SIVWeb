sivwebapp.controller('libraryBookIssueReturnDataCtrl', function($scope, $http, hosturl) {
    $scope.libraryBooksIssueReturnSubmit = function(){
    	console.log($scope.librarybookissuereturndata);
        $http({
                url: hosturl+"/api/v1/librarybookissuereturnentry",
                method: "POST",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param($scope.librarybookissuereturndata)
            }).then(function(success) {
                
            },function (error){
            	
   			});
    }

        /*table entry*/
    $scope.librarybookissuereturndataList = [];
    $scope.additem= function(librarybookissuereturndata){
        $scope.librarybookissuereturndataList.push(
            {
                'bookname':librarybookissuereturndata.bookname,
                'bookid':librarybookissuereturndata.bookid,
                'bookslno':librarybookissuereturndata.bookslno,
                'returndate':librarybookissuereturndata.returndate,
                'bookstatus':librarybookissuereturndata.bookstatus,
                'fine':librarybookissuereturndata.fine                
                
            }
        );
        $scope.librarybookissuereturndata={};
    }
    $scope.deleteitem = function (item) {
        $scope.librarybookissuereturndataList.splice($scope.librarybookissuereturndataList.indexOf(item), 1);
    }
    /*table entry*/
});