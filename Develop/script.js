var currentTime = moment().format("dddd, MMMM DD, YYYY");
var time = moment().hours();

// show current time in header
$('#currentDay').text(currentTime);

// change box color based on current time

// send text to storage
$(".saveBtn").on("click", function () {
    var assignment = $(this).siblings(".assignment").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, assignment);
})

// retrieve text
$("#9 .assignment").val(localStorage.getItem("9"));
$("#10 .assignment").val(localStorage.getItem("10"));
$("#11 .assignment").val(localStorage.getItem("11"));
$("#12 .assignment").val(localStorage.getItem("12"));
$("#13 .assignment").val(localStorage.getItem("13"));
$("#14 .assignment").val(localStorage.getItem("14"));
$("#15 .assignment").val(localStorage.getItem("15"));
$("#16 .assignment").val(localStorage.getItem("16"));
$("#17 .assignment").val(localStorage.getItem("17"));
