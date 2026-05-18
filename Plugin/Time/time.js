$(document).ready(function(){
    // 改变这里的文本可以替换对应名称
	var week_context = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];

	startTime();
    function startTime(){
        var mDate = new Date();
   		// var year = mDate.getFullYear();
   		var month = mDate.getMonth()+1;
   		var date = mDate.getDate();
   		var day = mDate.getDay();
   		var hours = mDate.getHours();
  		var minutes = mDate.getMinutes();
		// var seconds = mDate.getSeconds();

   		hours = checkTime(hours);
    	minutes = checkTime(minutes);

   		$("#time_context").html(hours + ":" + minutes);
		$("#week_context").text(month + "月" + date + "日" + " " + week_context[day]);

   		t = setTimeout(startTime,500);

   		function checkTime(i){
   			if (i<10) {
   				i = "0" + i;
   			}
   			return i;
   		}
    }
})