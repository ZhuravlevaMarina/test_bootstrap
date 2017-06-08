requirejs.config({
    baseUrl: './public/js',
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    }
});

define(["jquery", "bootstrap", "domReady"], function($) {
    "use strict";

    /*var Homepage = {
        init: function () {
            this.carouselHeight();
        },
        carouselHeight: function () {
            $(window).on('load', function(){
               //setCarouselHeight('#carousel-example');
            });

            function setCarouselHeight(id){
                var slideHeight = [];
                $(id+' .item').each(function()
                {
                    // add all slide heights to an array
                    slideHeight.push($(this).height());
                });

                // find the tallest item
                var max = Math.max.apply(null, slideHeight);

                // set the slide's height
                $(id+' .carousel-content').each(function()
                {
                    $(this).css('height',max+'px');
                });
            }
        }
    };
    Homepage.init();*/

});