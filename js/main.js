// Menu Toggle

$('.hamburger').on('click', function(){
    $('.menu_container .menu_links').addClass('show_menu_links');
    $('.overlay').addClass('show_overlay');
})

$('.closeLink span').on('click', function(){
    $('.menu_container .menu_links').removeClass('show_menu_links');
    $('.overlay').removeClass('show_overlay');
})