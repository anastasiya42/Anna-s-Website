function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        }
    else {
        menu.style.display = "block";
    }
}
$(document).ready(function() {
  $("h4").hide();	
    $("#contactinfo").hide();
    $("h3").hide();
    $("h2").hide();
    $("h2").fadeIn(1000);
    $("#contactinfo").fadeIn(1000);
    $("#resume").slideDown(1000);
    $("h3").fadeIn(2000);
  $(window).scroll(function(event) {
      
    event.preventDefault();   
	$("h4").slideDown(2000, function() {
	  	$("#fade").fadeIn(2000);
	});
  });
});
