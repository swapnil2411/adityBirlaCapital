// Menu Toggle

$('.hamburger').on('click', function(){
    $('.menu_container .menu_links').addClass('show_menu_links');
    $('.overlay').addClass('show_overlay');
    $('.hamburger').css('display','none');
    $('body').css('overflow-y','hidden');
})

$('.closeLink span').on('click', function(){
    $('.menu_container .menu_links').removeClass('show_menu_links');
    $('.overlay').removeClass('show_overlay');
    $('.hamburger').css('display','block');
    $('body').css('overflow-y','auto');
})