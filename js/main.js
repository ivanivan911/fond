/**
 * Created by IvanDev on 02.07.2016.
 */
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
});