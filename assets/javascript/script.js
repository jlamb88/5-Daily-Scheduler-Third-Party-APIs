var now = moment();
$('#currentDay').text(now.format("dddd MMM Do, YYYY"));
var currentHour = now.format("H");


for (n=7;n<18;n++)
{ 
  var containerEl = $("#schedule");
  if (n<12){
    hourTime = n+"am";
    }
  else if (n>12){
    hourTime = (n-12)+"pm";
    }
  else {
    hourTime = n+'pm';
    }

  var schedRow = '<section class="row" id ="schedule-row"></section>';
  containerEl.append(schedRow);
  currentRow = $("section").last()
  currentRow.append('<section class="col-1 hour" id="hour">'+hourTime+'</section>')
 
  currentRow.append('<textarea id="appt" data-time="'+hourTime+'"></textarea>')
  apptText = localStorage.getItem(hourTime);
  $("#appt", currentRow).text(apptText)
  
  currentRow.append('<button type="button" class="saveBtn col-1" id="'+hourTime+'">save</button>')
  $("button", currentRow).click(function () {
    var apptTime = $(this).attr("id")
    var apptText = $(this).siblings("#appt").val();
    localStorage.setItem(apptTime, apptText);})
    
  currentAppt = $("textarea").last()
  if (n<currentHour) {
    currentAppt.attr("class", "col-10 past description")
  }
  else if (n>currentHour) {
    currentAppt.attr("class", "col-10 future description")
  }
  else {
    currentAppt.attr("class", "col-10 present description")
  }
}