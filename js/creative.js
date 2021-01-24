/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Image preview modal
    var modal = document.getElementById("siteModal");
    var span = document.getElementsByClassName("close")[0];
    var imageElements = document.getElementsByClassName("portfolio-box");
    var modalImage = document.getElementById("modalImage");
    var modalCaption = document.getElementById("modalCaption");

    for (var i = 0; i < imageElements.length; i++) {
        imageElements[i].onclick = function() {
            modal.style.display = "block";

            var miniatureSrc = this.children[0].src;
            modalImage.src = miniatureSrc.replace("_mini", "");

            if (this.alt) {
                modalCaption.innerHTML = this.alt;
            }
        } 
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          modalImage.src = "";
          modalCaption.innerHTML = "";
        }
    }

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
