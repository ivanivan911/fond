/**
 * Created by IvanDev on 03.07.2016.
 */


$(".scroll-header-nav-list-item").hover(function(){
    $(".header-nav-list-item-active").css('background', 'transparent');
    $(".scroll-header-nav-list-item").mouseleave(function(){
        $(".header-nav-list-item-active").css('background', '#20257f');
    })
});

$("#toFooter").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html,body').animate( { scrollTop: destination }, 1100 );
    return false;
});