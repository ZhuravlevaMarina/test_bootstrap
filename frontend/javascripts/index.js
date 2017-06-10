requirejs.config({
    baseUrl: './public/js',
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    }
});

define(["jquery", "bootstrap", "domReady"], function($) {
    "use strict";

    var Homepage = {
        init: function () {
            this.teamTabs();
        },
        teamTabs: function () {
            $(window).on('load', function(){
                initTeamTabs('#team');
            });

            function initTeamTabs(id) {
                var initialActiveElement = $(id).find('a.team-member.active');
                handleToggle(initialActiveElement);

                // Handle click
                $(id).find('a.team-member').each(function(){
                    $(this).on('click', function(e){
                        e.preventDefault();
                        handleToggle($(this));
                    })
                });

                // Handle Close
                $(id).find('a.close').each(function(){
                    $(this).on('click', function(e){
                        e.preventDefault();
                        $(id).find('div.personal-box.active').hide(250).removeClass('active');
                        $(id).find('a.team-member').each(function(){
                            $(this).removeClass('active');
                        });
                    })
                });

                // Toggle function
                function handleToggle(element){
                    var itemId = element.attr('data-id');
                    $(id).find('div.personal-box.active').hide(250).removeClass('active');
                    $(id).find('a.team-member').each(function(){
                        $(this).removeClass('active');
                    });
                    element.addClass('active');
                    $(id).find('#'+itemId).addClass('active').toggle(500);
                }
            }
        }
    };

    Homepage.init();

});