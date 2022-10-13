// section__questions slider
$('.questions-items > div').on('click', function(){
    $(this).next('.questions-items__text').slideToggle(300);
    $(this).children('.questions-items__circle').children('.item-2').toggleClass('opacity');
})

$('.questions-items__text').on('click', function(){
    $(this).closest('.questions-items__text').fadeOut();
})

// arrow to move up
$(window).on('scroll', function(){
    if($(this).scrollTop() > 700){
        $('#up').fadeIn()
    }else{
        $('#up').fadeOut()
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 500)
})

// section__comments slider
const slider = $(".comments-items-wrapper").bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
});

$(".arrow-prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});

$(".arrow-next").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});

// carousel
if(window.matchMedia("(max-width: 800px)").matches) {
    $('.quality-features-items-wrapper').bxSlider({
        controls: false
    })
}

// anchors
$('#home-link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#home').offset().top}, 500);
})

$('#adversite-link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#adversite').offset().top}, 500);
})

$('#supports-link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#support').offset().top}, 500);
})

$('#contacts-link').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#contacts').offset().top}, 500);
})

// menu-modify
$(window).on('scroll', function(){
    if($(this).scrollTop() > 100){$('.checkbox-menu:checked ~ .header-nav').fadeOut();
    }else{
        $('.checkbox-menu:checked ~ .header-nav').fadeIn();
    }
})

// modal for gat started and signup
$('.modal-form-overlay').on('click', function(e){
    if($(e.target).closest('.modal-form').length == 0){$(this).fadeOut();
    }
})

$('.form-close').on('click', function(){
    $(this).parents('.modal-form-overlay').fadeOut();
})

$('.modal-button').on('click', function(){
    $('.modal-form-overlay').fadeIn()
})