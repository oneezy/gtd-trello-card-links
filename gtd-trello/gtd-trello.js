/************************************************************************
	GTD Trello (Getting things started...)
*************************************************************************/

'use strict';

$(document).ready(function() {

    // Append ".gtd-trello" class to body
    $("body").addClass("gtd-trello");

    // Run Functions...
    GTD_CardLinks();

    $('body').ready(function() {
        setTimeout(function() {
            GTD_CardLinks();
        }, 20);
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