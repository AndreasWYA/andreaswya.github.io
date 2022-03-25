

function startTime() {
  var today = new Date();
  var days = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'};
  var day = days[today.getDay()];
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = " ";
  ampm = checkAmPm(h);
  h = checkTime(h);
  h = reduce(h)
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('clock').innerHTML = day + " - " + h + ampm + " : " + m + " : " + s;
  var t = setTimeout(startTime,0);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
function checkAmPm(i) {
  if (i >= 12) {ampm = "PM"}
  else {ampm = "AM"};
  return ampm;
}
function reduce(i){
  if (i > 12) {i = i - 12}
  return i;
}

