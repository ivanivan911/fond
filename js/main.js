/**
 * Created by IvanDev on 02.07.2016.
 */

/*Header on scroll function*/

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("scroll-header");
        $(".header-logo").addClass("scroll-header-logo");
        $(".header-nav").addClass("scroll-header-nav");
        $(".header-logo-img").addClass("scroll-header-logo-img");
        $(".header-nav-link").addClass("scroll-header-nav-list-item");
    } else {
        $("header").removeClass("scroll-header");
        $(".header-logo").removeClass("scroll-header-logo");
        $(".header-nav").removeClass("scroll-header-nav");
        $(".header-logo-img").removeClass("scroll-header-logo-img");
        $(".header-nav-link").removeClass("scroll-header-nav-list-item");
    }
});

/**/

$(document).ready(function() {
    $('#slides').superslides({
        play: 30000,
        slide_easing: 'easeInOutCubic',
        slide_speed: 800,
        pagination: true,
        hashchange: true,
        scrollable: true,
        inherit_height_from:$('#main-banner'),
        inherit_width_from:$('#main-banner')
    });


    $('.item-link').hover(

        function(){
            $(this).animate({'backgroundColor': '#f5f5f5'},400);
        },
        function(){
            $(this).animate({'backgroundColor': '#000'},400);
        }

    );




    $("#submitForNews").click(function(event) {
        event.preventDefault();
        if( $("#emailForNews").val().length === 0 ) {
            $("#emailForNews").val('Введіть Вашу email адресу');
        } else {
            $.post( "app/ajaxParser.php",{type:'emailForNews', email: $("#emailForNews").val()}, function( data ) {
                $( "#assignNews" ).slideDown( "slow" );
                $("#emailForNews").val('');
            })}
    });



    $("#submitForVolunteer").click(function(event) {
        event.preventDefault();
        if( $("#emailVolunteer").val().length === 0 ) {
            $("#emailVolunteer").val('Введіть Вашу email адресу');
        } else {
            $.post( "app/ajaxParser.php",{type:'emailVolunteer', email: $("#emailVolunteer").val()}, function( data ) {
                $( "#assignVolunteer" ).slideDown( "slow" );
                $("#emailVolunteer").val('');
            })}});

    $(".activity-rectangle").click(function(){
        var selector = $(this).attr("class").split(" ")[1];
        if($("#hidden-details-" + selector).css("display") === "none"){
            $(".hidden-details").slideUp(1000);
            $(".activity-rectangle").removeClass("hidden-details-active");
            $(this).addClass('hidden-details-active');
            $("#hidden-details-" + selector).slideDown(1000);
        } else{
            $(this).removeClass("hidden-details-active");
            $("#hidden-details-" + selector).slideUp(1000);
        }
    })
});