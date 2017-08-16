sivwebapp.directive('sidenavnicescroll', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).niceScroll({
                cursorborder: "1px solid transparent",
                cursorcolor: "rgba(0,0,0,.3)",
                cursorwidth: "7px",
                cursorfixedheight: "250"
            });
            //$(element).'pluginActivationFunction'(scope.$eval(attrs.directiveName));
        }
    };
}).directive('hasequalheight', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            setTimeout(function(){
                var highestBox = 0;
                $('.dashboardmenu').each(function(){  
                    if($(this).height() > highestBox){  
                        highestBox = $(this).height();  
                    }
                });    
                $('.dashboardmenu').height(highestBox);
            },1000);            
        }
    };
});