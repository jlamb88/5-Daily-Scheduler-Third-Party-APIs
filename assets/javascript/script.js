var now = moment();
$('#currentDay').text(now.format("dddd MMM Do, YYYY"));

for (n=7;n<18;n++)
{ console.log(n);
  var containerEl = $("#schedule");
  if (n<12){
    hourTime = n+"am";
    console.log(hourTime);
   }
  else if (n>12){
    // time = n;
    hourTime = (n-12)+"pm";
    console.log(hourTime);
  }
  else {
    hourTime = n+'pm';
    console.log(hourTime);
  }
  var schedRow = '<section class="row" id ="schedule-row"></section>';
  containerEl.append(schedRow);
  currentRow = $("section").last()
  currentRow.append('<section class="col-3" id="hour">'+hourTime+'</section>')
  currentRow.append('<section class="col-7" id="appt"></section>')
  currentRow.append('<section class="col-2" id="save">SAVE</section>')
  }
