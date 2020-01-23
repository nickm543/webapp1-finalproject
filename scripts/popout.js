$(document).ready(function() {
    $(".popout_menu").hide();
    $(".fa-bars").click(function() {
        $(".popout_menu").toggle(500);
    });
});