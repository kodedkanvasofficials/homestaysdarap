jQuery(document).ready(function ($) {
    var $toggle = $('#nav-toggle');
    var $menu = $('#nav-menu');

    $toggle.click(function() {
        $(this).toggleClass('is-active');
        $menu.toggleClass('is-active');
    });

    $('aside.menu li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('aside.menu li').removeClass('is-active');
        $('.tab-content').removeClass('is-active');

        $(this).addClass('is-active');
        $("#"+tab_id).addClass('is-active');
    });

});