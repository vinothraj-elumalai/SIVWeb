sivwebapp.service('constantService', function() {
  this.toDateFormat = function(timestamp){
    var todate=new Date(timestamp).getDate();
    var tomonth=new Date(timestamp).getMonth()+1;
    var toyear=new Date(timestamp).getFullYear();
    var original_date=todate+'/'+tomonth+'/'+toyear;
    return original_date;
  }
});