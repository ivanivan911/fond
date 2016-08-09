/**
 * Created by IvanDev on 02.07.2016.
 */
var ssFirstSlide = $("#news-image1").height() + $("#first-slide-text").height() + 50;
/*Header on scroll function*/
var newsSliderStopped = true;
var heightR = $(window).height();
$('#main-banner').height(heightR);

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

    var heightR = $(window).height();
    $('#main-banner').height(heightR);

    $('#slides').superslides({
        play: 30000,
        slide_easing: 'easeInOutCubic',
        slide_speed: 1000,
        pagination: true,
        scrollable: true,
        inherit_height_from:$('#main-banner'),
        inherit_width_from:$('#main-banner')
    });

    $('#slider-news').superslides({
        play: 30000,
        slide_easing: 'easeInOutCubic',
        slide_speed: 1000,
        pagination: true,
        scrollable: true
    });

   $('#slider-news').superslides('stop');
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
            $("#hidden-details-" + selector).slideDown(1000, function(){
                if($(window).scrollTop() + $(window).height() < $("#hidden-details-" + selector).offset().top +  $("#hidden-details-" + selector).height()){
                    $('html,body').animate( { scrollTop:  $(window).height() + $("#hidden-details-" + selector).height() + 40 }, 1100 );
                }
            });
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
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });

    $("#to-about-us").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 110;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });


    $("#to-current-programs").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 110;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });


    $("#sign-up-btn").click(function(event) {
        event.preventDefault();
        if( $("#sign-up-field").val().length === 0 ) {
            $("#sign-up-field").val('Введіть Вашу email адресу');
        } else {
            $.post( "app/ajaxParser.php",{type:'emailForNews', email: $("#sign-up-field").val()}, function( data ) {
                $( "#assignNews" ).slideDown( "slow" );
                $("#sign-up-field").val('');
                $('.thanks-for-subscribe').css('display', 'inline');
            })}
    });



    $("#join-btn").click(function(event) {
        event.preventDefault();
        if( $("#join-field").val().length === 0 ) {
            $("#joain-field").val('Введіть Вашу email адресу');
        } else {
            $.post( "app/ajaxParser.php",{type:'emailVolunteer', email: $("#join-field").val()}, function( data ) {
                $( "#assignVolunteer" ).slideDown( "slow" );
                $("#join-field").val('');
    })}});

});
var player;
var videoIndex = false;
var logoResize = false;
var slidingStatus = false;
var needSwitch = false;

$('#slides').on('animated.slides', function () {
    needSwitch = false;
    var current_index = $(this).superslides('current');
    if(current_index != 3 && videoIndex){
        $(".header-logo").css('margin-top','0');
        $(".header-nav").css('display','block');
        if(slidingStatus === true){
            slidingStatus = false;
            $('#slides').superslides('play',30000);
        }
        $(".header-nav-list").slideDown('slow');
        player.stopVideo();
        $(".header-logo-img").animate({
            width: '140px'
        }, 1000);
    }
    if (current_index == 3) {
        videoIndex = true;
        logoResize = true;
        needSwitch = true;
        slidingStatus = true;
        $('#slides').superslides('stop');
        player.playVideo();
        $(".header-nav").css('display','none');
        $(".header-logo-img").animate({
            width: '80px'
        }, 1000);
        $(".header-logo").css('margin-top','20px');

    }
});


var playerNews;
var newsVideoIndex = false;
var newslogoResize = false;
var newsslidingStatus = false;
var newsneedSwitch = false;

$('#slider-news').on('animated.slides', function () {
    var current_index = $(this).superslides('current');
    if(current_index != 1 && newsVideoIndex){
        newsneedSwitch = false;
        if(newsslidingStatus === true){
            newsslidingStatus = false;
            $('#slides').superslides('play',30000);
        }
     playerNews.stopVideo();
    }
    if (current_index == 1) {
        newsslidingStatus = true;
        $('#slider-news').superslides('stop');
        newsVideoIndex = true;
        newsneedSwitch = true;
        playerNews.playVideo();
    }
});



function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        videoId: 'Lf6I2tBZBCc',
        playerVars: {
            color: 'white',
            controls:0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    playerNews =  new YT.Player('news-video-placeholder', {
        videoId: 'IFilDOGD-YA',
        playerVars: {
            color: 'white',
            controls:0
        },
        events: {
            'onStateChange': onNewsPlayerStateChange
        }
    });
};



function onPlayerStateChange(state){
    if(state.data === 1){
        setTimeout(function () {
            if(needSwitch){
                $('#slides').superslides('start');
                needSwitch = false;
            }
        }, (player.getDuration() - 1) * 1000 );
    }
};



function onNewsPlayerStateChange(state){
    if(state.data === 1){
        setTimeout(function () {
            if(newsneedSwitch){
                $('#slider-news').superslides('start');
                newsneedSwitch = false;
            }
        }, (playerNews.getDuration() - 1) * 1000 );
    }
};


/*Modal window*/

$(document).ready(function() {

});

/*Form validation*/

$(document).ready(function(){
    $('#slider-news').on('init.slides', function() {
        $("#slider-news").height(ssFirstSlide);
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

var mainPlayerStopped = false;
    $(window).on("scroll", function() {
            if (($(window).scrollTop() > $("#main-banner").height())) {
                if(newsSliderStopped) {
                    $('#slides').superslides('stop');
                    newsSliderStopped = false;
                    $('#slider-news').superslides('start');
                }
                if(!mainPlayerStopped){
                    $('#slides').superslides('stop');
                }
            }else{
                if(mainPlayerStopped){
                    $('#slides').superslides('start');
                }
                playerNews.stopVideo();
                newsSliderStopped = true;
                $('#slider-news').superslides('stop');
            }
    });
    $('.activity-rectangle').css({"background-size":"100%"});
    $('.activity-rectangle').mouseenter(function() {
        $(this).animate({ "background-size":"110%" }, 1000);
    }).mouseleave(function() {           
        $(this).animate({ "background-size":"100%" }, 1000);
    });

    $('.box').css({"background-size":"100%"});
    $('.box').mouseenter(function() {
        $(this).animate({ "background-size":"105%" }, 1000);
    }).mouseleave(function() {
        $(this).animate({ "background-size":"100%" }, 1000);
    });

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
