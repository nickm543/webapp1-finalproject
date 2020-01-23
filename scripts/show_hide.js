$(document).ready(function() {
    $("#section1").toggle();
    $("#section2").toggle();
    $("#section3").toggle();
    $("#link1").click(function() {
        $("#section1").toggle(500);
    });
    $("#link2").click(function() {
        $("#section2").toggle(500);
    });
    $("#link3").click(function() {
        $("#section3").toggle(500);
    });
}); // end ready