
$(document).ready(function() {
    $(".carousel_area").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

});
