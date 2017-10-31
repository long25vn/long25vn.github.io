/*!

 =========================================================
 * Gaia Bootstrap Template - v1.0.1
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/gaia-bootstrap-template
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/gaia-bootstrap-template/blob/master/LICENSE.md)
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

var transparent = true;

var fixedTop = false;

var navbar_initialized = false;

var scroll;

scroll = ( 2500 - $(window).width() ) / $(window).width();

var window_height;
var window_width;

var content_opacity = 0;
var content_transition = 0;
var no_touch_screen = false;

var burger_menu;

var scroll_distance = 500;

$(document).ready(function(){
    BrowserDetect.init();

    if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version <= 9){
        $('body').html(better_browser);
    }

    window_width = $(window).width();
    window_height = $(window).height();

    burger_menu = $('.navbar').hasClass('navbar-burger') ? true : false;

    if (!Modernizr.touch){
        $('body').addClass('no-touch');
        no_touch_screen = true;
    }

    // Init navigation toggle for small screens
    if(window_width < 992 || burger_menu){
        gaia.initRightMenu();
    }

    if($('.content-with-opacity').length != 0){
        content_opacity = 1;
    }

    $navbar = $('.navbar[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;

    $('.google-map').each(function(){
        var lng = $(this).data('lng');
        var lat = $(this).data('lat');

        gaia.initGoogleMaps(this, lat, lng);
    });

});

//activate collapse right menu when the windows is resized
$(window).resize(function(){
    if($(window).width() < 992){
        gaia.initRightMenu();
        //gaia.checkResponsiveImage();
    }
    if($(window).width() > 992 && !burger_menu){
        $('nav[role="navigation"]').removeClass('navbar-burger');
        gaia.misc.navbar_menu_visible = 1;
        navbar_initialized = false;
    }
});

$(window).on('scroll',function(){

    gaia.checkScrollForTransparentNavbar();


    if(window_width > 992){
        gaia.checkScrollForParallax();
    }

    if(content_opacity == 1 ){
        gaia.checkScrollForContentTransitions();
    }

});

$('a[data-scroll="true"]').click(function(e){
    var scroll_target = $(this).data('id');
    var scroll_trigger = $(this).data('scroll');

    if(scroll_trigger == true && scroll_target !== undefined){
        e.preventDefault();

        $('html, body').animate({
             scrollTop: $(scroll_target).offset().top - 50
        }, 1000);
    }

});

gaia = {
    misc:{
        navbar_menu_visible: 0
    },
    initRightMenu: function(){

         if(!navbar_initialized){
            $toggle = $('.navbar-toggle');
            $toggle.click(function (){

                if(gaia.misc.navbar_menu_visible == 1) {
                    $('html').removeClass('nav-open');
                    gaia.misc.navbar_menu_visible = 0;
                    $('#bodyClick').remove();
                     setTimeout(function(){
                        $toggle.removeClass('toggled');
                     }, 550);

                } else {
                    setTimeout(function(){
                        $toggle.addClass('toggled');
                    }, 580);

                    div = '<div id="bodyClick"></div>';
                    $(div).appendTo("body").click(function() {
                        $('html').removeClass('nav-open');
                        gaia.misc.navbar_menu_visible = 0;
                        $('#bodyClick').remove();
                         setTimeout(function(){
                            $toggle.removeClass('toggled');
                         }, 550);
                    });

                    $('html').addClass('nav-open');
                    gaia.misc.navbar_menu_visible = 1;

                }
            });
            navbar_initialized = true;
        }

    },

    checkScrollForTransparentNavbar: debounce(function() {
            if($(document).scrollTop() > scroll_distance ) {
                if(transparent) {
                    transparent = false;
                    $navbar.removeClass('navbar-transparent');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $navbar.addClass('navbar-transparent');
                }
            }
    }, 17),

    checkScrollForParallax: debounce(function() {
        	$('.parallax').each(function() {
        	    var $elem = $(this);

        	    if(isElementInViewport($elem)){
                  var parent_top = $elem.offset().top;
                  var window_bottom = $(window).scrollTop();
                  var $image = $elem.children('.image');

            	  oVal = ((window_bottom - parent_top) / 3);
                  $image.css('transform','translate3d(0px, ' + oVal + 'px, 0px)');
        	    }
            });

    }, 6),

    checkScrollForContentTransitions: debounce(function() {
         $('.content-with-opacity').each(function() {
             var $content = $(this);

             if(isElementInViewport($content)){
                  var window_top = $(window).scrollTop();
            	  opacityVal = 1 - (window_top / 230);

                  if(opacityVal < 0){
                      opacityVal = 0;
                      return;
                  } else {
                    $content.css('opacity',opacityVal);
                  }

        	    }
         });
    }, 6),


}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};


function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}


var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },

    dataBrowser: [
        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
    ]

};

