$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));
  if(height<= 60) {
    $("#BumperCars,#TeaCup,#Slide,#EarthQuake").addClass("bg-color");
  } else {
    $("#Deathadder,#Crushinator,#KingCobra").addClass("bg-color");
  }
});
