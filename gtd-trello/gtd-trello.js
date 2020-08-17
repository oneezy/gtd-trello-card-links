/************************************************************************
	GTD Trello (Getting things started...)
*************************************************************************/
$(document).ready(function() {

    // Append ".gtd-trello" class to body
    $("body").addClass("gtd-trello");

    $(document).ready(function() {
        setTimeout(function() {
            GTD_CardLinks();
        }, 1000);
    });

    // Listen for user input...
    $('body').mouseup(function() {
        setTimeout(function() {
            GTD_CardLinks();
        }, 20);
    });

    $('body').keyup(function() {
        setTimeout(function() {
             GTD_CardLinks();
        }, 20);
    });

});