var currentDate = new Date;
var currentYear = (currentDate.getFullYear()).toString();
var extensionName = "Auto-Update-Year";
var extensionVersion = "v1.0.1";
var copy = "&copy;";
var htmlClasses = [
  "au-year-full",
  "au-year-short",
  "au-year-full-cp",
  "au-year-short-cp",
  "au-year-full-sp",
  "au-year-short-sp"
];

function detectExistingClasses(classes, year){
  for (var i in classes) {
    var o = document.getElementsByClassName(classes[i]);
    if(o.length > 0){
      switch(classes[i]) {
      case "au-year-full":
        addYearFull(classes[i], o, false);
        break;
      case "au-year-short":
        addYearShort(classes[i], o, false);
        break;
      case "au-year-full-cp":
        addYearFull(classes[i], o, true);
        break;
      case "au-year-short-cp":
        addYearShort(classes[i], o, true);
        break;
      case "au-year-full-sp":
        addYearFull(classes[i], o, true);
        break;
      case "au-year-short-sp":
        addYearShort(classes[i], o, true);
        break;
      default:
        console.error("Please, use a valid name for '"+extensionName+"' classes.");
      }
    }
  }
}

function addYearFull(y, ys, c){
  if(c){
    for (var i in ys) {
      if (y=="au-year-full-cp") {
        document.getElementsByClassName(y)[i].innerHTML = copy+currentYear;
      }else{
        document.getElementsByClassName(y)[i].innerHTML = copy+" "+currentYear;
      }
    }
  }else{
    for (var i in ys) {
      document.getElementsByClassName(y)[i].innerHTML = currentYear;
    }
  }
}

function addYearShort(y, ys, c){
  var currentShortYear = currentYear.substr(-2);
  if(c){
    for (var i in ys) {
      if (y=="au-year-full-cp") {
        document.getElementsByClassName(y)[i].innerHTML = copy+currentShortYear;
      } else {
        document.getElementsByClassName(y)[i].innerHTML = copy+" "+currentShortYear;
      }
    }
  }else{
    for (var i in ys) {
      document.getElementsByClassName(y)[i].innerHTML = currentShortYear;
    }
  }
}

function render(){
  detectExistingClasses(htmlClasses);
}

try {
  window.onload = function() {
    try {
      render();
      console.log(extensionName+" "+extensionVersion +" works! :-)");
    } catch (e) {
      console.error(e + " - "+extensionName+" "+extensionVersion);
    }
  };
}catch(e) {
  console.error(e + " - "+extensionName+" "+extensionVersion);
}
