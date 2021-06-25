$(document).ready(function() {
    $('.showmenu').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');

    });

    $('.like').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('heart')
    });

});