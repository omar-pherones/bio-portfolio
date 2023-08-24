var mixer = mixitup('.Portfolio_container');


// portfolio counter 
$('.testimonialSliders').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:true,
    navText: [
        '<i class="fa-solid fa-arrow-left arrowleft"></i>',
        '<i class="fa-solid fa-arrow-right arrowright"></i>'
    ],
    autoplaySpeed:300,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})