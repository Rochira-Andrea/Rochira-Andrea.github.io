// the following function are meant to collect weather information about Riggins Idaho

$.get("http://api.wunderground.com/api/80315ed98421c7a5/geolookup/conditions/q/83549.json", function(data){

    // 83549 is the zip code of Riggins Idaho
    /* console.log(data); */

    $('#cityDisplay').text(data.current_observation.display_location.city + ", " + data.current_observation.display_location.state);

    $('#currentTemp').prepend(data.current_observation.temp_f.toFixed(0) + " &deg;F");

    $('#summary').text(data.current_observation.weather);

    $('#add2').append("Wind - " + data.current_observation.wind_string);

}, "jsonp");





































// the following function operates on the navigational menu
$(document).ready(function(){
    $('.slide-trigger').collapsable();
});

(function($) {
    $.fn.collapsable = function(options) {
        // iterate and reformat each matched element
        return this.each(function() {
            // cache this:
            var obj = $(this);
            var tree = obj.next('.navigation');
            obj.click(function(){
                if( obj.is(':visible') ){tree.toggle();}
            });
            $(window).resize(function(){
                if ( $(window).width() <= 570 ){tree.attr('style','');};
            });
        });
    };
})(jQuery);


