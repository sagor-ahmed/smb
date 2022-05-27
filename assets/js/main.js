/*---------------------------------------------


[Table of Content]
----------------------
01: 01. Sticky Js
----------------------------------------------*/

(function($) {
    "use strict";

    ////////////////////////////////////////////////////

    // 01. Sticky Js

    $(window).on('scroll', function() {

        var scroll = $(window).scrollTop();

        if (scroll < 245) {

            $("#header-sticky").removeClass("sticky");

        } else {

            $("#header-sticky").addClass("sticky");

        }
    });





    // meanmenu
    $('.main-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanMenuOpen: "<span></span><span></span><span></span>",
        meanScreenWidth: "992",
    });













})(jQuery);