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
        slide_speed: 1000,
        pagination: true,
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
    });

    $(".scroll-header-nav-list-item").hover(function(){        
        $(".scroll-header-nav-list-item").removeClass("header-nav-list-item-active");
    });

    $("#toFooter").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });

    $("#toNews").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 110;
        console.log(destination);
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });


    $("#to-current-programs").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 110;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });




});
var videoIndex = false;
var logoResize = false;
var slidingStatus = false;
$('#slides').on('animated.slides', function () {
    var current_index = $(this).superslides('current');
    if(current_index != 3 && videoIndex){
        if(!slidingStatus){
            $('#slides').superslides('start');
        }
        $(".header-nav-list").slideDown('slow');
        player.stopVideo();
        if(logoResize){
            logoResize = false;
            $(".header-logo-img").animate({
                width: '+=50px'
            }, 1000);
        }

    }
    if (current_index == 3) { // third slide
        //$(".video-backstage").attr("src", $(".video-backstage").attr("src").replace("autoplay=0", "autoplay=1"));
        videoIndex = true;
        logoResize = true;
        needSwitch = true;
        slidingStatus = true;
        $('#slides').superslides('stop');
        player.playVideo();
        $(".header-nav-list").slideUp('slow');
        $(".header-logo-img").animate({
            width: '-=50px'
        }, 1000);
    }
});


var player;
var needSwitch = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        videoId: 'Lf6I2tBZBCc',
        playerVars: {
            color: 'white',
            controls:0
        },
        events: {
            onReady: initialize,
            'onStateChange': onPlayerStateChange
        }
    });

};




function initialize(){

    // Update the controls on load


    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000)

}

function onPlayerStateChange(state){
    if(state.data === 0){
        //$('#slides').superslides('animate', ['next'])
    }
    if(state.data === 1){
        setTimeout(function () {
            if(needSwitch){
                $('#slides').superslides('animate', ['next']);
                needSwitch = false;
            }
        }, (player.getDuration() - 1) * 1000 );
    }
};


