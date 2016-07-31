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

function checkInputs() {

    $('.modal_form_input').each(function(i, elem) {

        if(elem.value == '') {
            $(elem).css('border-top', '2px solid #f00');
            $(elem).next().html('Будь ласка, введіть ' + $(elem).attr('placeholder').charAt(0).toLowerCase()
                + $(elem).attr('placeholder').substr(1))
        } else {
            $(elem).css('border-top', '2px solid #353e26');
            $(elem).next().html('');
        }

    });

}

$('.modal_form_input').on('change', checkInputs);
$('.modal_form_submit').on('click', checkInputs);

$(document).ready(function() {
    $('a#go').click( function(event){
        event.preventDefault();
        $('header').css('display', 'none');
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close, #overlay').click( function(){
        $('header').css('display', 'block');
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});