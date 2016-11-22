'use strict';

$(document).ready(function() {

/*
Explaination of what this does:
So the way they more than likely do it is dynamically insert their popup menu and append it to the list so on click it will create your popup, and append it to the list.
Then it will check for the classes and check the appropriate radio button.  I used the css content property to add the gears to the button so when it is active there will
be an x where the button is.  You can change this in the css.  When the x is clicked then it removes the active class and removes the popup window.
*/

    // Append ".gtd-trello" class to body
    $("body").addClass("gtd-trello");

    // Append ".gtd-icon" to the Trello List header
    $(".list-header").append( "<a class='list-header-menu-icon icon-sm icon-dropdown-menu dark-hover gtd-icon' href='javascript:void(0)'></a>" );

    // When icon is clicked, open up the "List Layouts" popup
    $('.gtd-icon').on('click', function() {

        $('.gtd-popup').remove();
        if(!$(this).parents('.list-wrapper').hasClass("active")){
            $(this).parents('.list-wrapper').append(

            '<div class="gtd-popup">' +
                '<div class=pop-over-header>' +
                    '<span class=pop-over-header-title>List Layouts</span>' +
                    '<a href=# class="pop-over-header-close-btn icon-sm icon-close"></a>' +
                '</div>' +

                '<div class="pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent">' +
                    '<form class=gtd-layouts>' +
                        '<ul class=pop-over-list>' +
                            '<li>' +
                                '<input type=radio name=listLayout id=listNormal>' +
                                '<label for=listNormal>Normal</label>' +
                            '</li>' +
                            '<li>' +
                                '<input type=radio name=listLayout id=listYellow>' +
                                '<label for=listYellow>Yellow</label>' +
                            '</li>' +
                            '<li>' +
                                '<input type=radio name=listLayout id=listGreen>' +
                                '<label for=listGreen>Green</label>' +
                            '</li>' +
                            '<li>' +
                                '<input type=radio name=listLayout id=listBlue>' +
                                '<label for=listBlue>Blue</label>' +
                            '</li>' +
                        '</ul>' +
                    '</form>' +
                '</div>' +
            '</div>')
            .children(':last').hide().fadeIn(0);

            if($(this).parents('.list-wrapper').hasClass("listYellow")){
                $('#listYellow').prop('checked', true);

            }else if($(this).parents('.list-wrapper').hasClass("listGreen")){
                $('#listGreen').prop('checked', true);

            }else if($(this).parents('.list-wrapper').hasClass("listBlue")){
                $('#listBlue').prop('checked', true);

            }else{
                $('#listNormal').prop('checked', true);
            }
        }else{
            $(this).parents('.list-wrapper').find('.gtd-popup').remove();
        }
        $(this).parents('.list-wrapper').toggleClass("active");
        $(this).parents('.list-wrapper').siblings().removeClass("active");
    });

    // Add a class to the main parent, ".list-wrapper"
    $(document).on("change", ".gtd-layouts input", function(){
        var newClass = $(this).attr("id");
        $(this).parents( ".list-wrapper" ).removeClass("listNormal listYellow listGreen listBlue");
        $(this).parents( ".list-wrapper" ).addClass(newClass);
    });



});
