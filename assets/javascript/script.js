var now = moment();
$('#currentDay').text(now.format("dddd MMM Do, YYYY"));
// var currentHour = now.format("H");
currentHour = 15

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
  apptText = localStorage.getItem(hourTime);
  currentRow.append('<textarea id="appt" data-time="'+hourTime+'"></textarea>')
  $("#appt").last().text = apptText
  currentRow.append('<button type="button" class="saveBtn col-1">save</button>')
  $("button", currentRow).attr("click", "saveAppt()")
    
  currentAppt = $("textarea").last()
  if (n<currentHour) {
    currentAppt.attr("class", "col-10 past")
  }
  else if (n>currentHour) {
    currentAppt.attr("class", "col-10 future")
  }
  else {
    currentAppt.attr("class", "col-10 present")
  }
  }
    
  function saveAppt() {
    var apptTime = $(this).prev().data("time")
    console.log(apptTime);
    var apptText = $(this).prev().text;
    console.log(apptText);
    localStorage.setItem(apptTime, apptText);}
  // $("button").click((event) => {
  //   var apptTime = event.target.siblings();

  //   console.log(apptTime);
  //   var apptText = $(this).prev().val;
  //   console.log(apptText);
  //   localStorage.setItem(apptTime, apptText);}
  // )