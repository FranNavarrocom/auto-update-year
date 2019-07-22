var cd = new Date;
var cy = (cd.getFullYear()).toString();
var cp = "&copy;";
var app = [
  "Auto-Update-Year",
  "v1.0.1"
];
var hc = [
  "au-year-full",
  "au-year-short",
  "au-year-full-cp",
  "au-year-short-cp",
  "au-year-full-sp",
  "au-year-short-sp"
];

function dec(cls){
  for (var i in cls) {
    var o = document.getElementsByClassName(cls[i]);
    if(o.length > 0){
      ae(cls[i], o);
    }else {
      console.warn(app[0]+" "+app[1]+" works correctly but any class was used in your HTML.");
    }
  }
}

function ae(e, array){
  for (var n in array) {
    var h = document.getElementsByClassName(e)[n];
    var scy = cy.substr(-2);
    switch (e) {
      case hc[0]:
        h.innerHTML = cy;
        break;
      case hc[1]:
        h.innerHTML = cp+cy;
        break;
      case hc[2]:
        h.innerHTML = scy;
        break;
      case hc[3]:
        h.innerHTML = cp+scy;
        break;
      case hc[4]:
        h.innerHTML = cp+" "+cy;
        break;
      case hc[5]:
        h.innerHTML = cp+" "+scy;
        break;
      default:
      console.error("Ops! Houston we have a problem! "+app[0]+" "+app[1]+" is not working properly :-(");
    }
  }
}

function r(){
  dec(hc);
}

try {
  window.onload = function() {
    try {
      r();
      console.log(app[0]+" "+app[1] +" works! :-)");
    } catch (e) {
      console.error(e + " - "+app[0]+" "+app[1]);
    }
  };
}catch(e) {
  console.error(e + " - "+app[0]+" "+app[1]);
}
