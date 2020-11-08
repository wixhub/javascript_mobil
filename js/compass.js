function ausrichtungAuslesen(ereignis) {
  if (ereignis.gamma != null) {
    document.getElementById('datenMessage').innerHTML = "Read sensors from mobile devices";
    document.getElementById('datenABG').style.visibility = "visible";
    var winkelAlpha = Math.round(ereignis.alpha * 100) / 100; 
    var winkelBeta = Math.round(ereignis.beta * 100) / 100;
    var winkelGamma = Math.round(ereignis.gamma * 100) / 100;
    document.getElementById('datenAlpha').innerHTML = winkelAlpha;
    document.getElementById('datenBeta').innerHTML = winkelBeta;
    document.getElementById('datenGamma').innerHTML = winkelGamma;
    document.getElementById("arrow").style.transform = "rotate(" + winkelAlpha + "deg)";
  }
}
window.onload = function() {
  window.addEventListener("deviceorientation", ausrichtungAuslesen, false);
}