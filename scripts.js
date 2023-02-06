$(window).scrollTop(0);

$(window).scroll(function () {
    
    
    if ($(window).scrollTop() == 0) {
        // $('.relogios').addClass('apagar');
        // $('.relogios').removeClass('invisible');        
        // $('#nossos-relogios').addClass('apagar');
        // $('#nossos-relogios').removeClass('invisible');        
    }
    
    if ($("#nossos-relogios").offset().top - $(window).scrollTop() < 500) {
        $('#nossos-relogios').removeClass('invisible');
        $('#nossos-relogios').removeClass('apagar');
        $('#nossos-relogios').addClass('acender');
    } 
    if($("#nossos-relogios").offset().top - $(window).scrollTop() > 500) {
        $('#nossos-relogios').removeClass('acender');
        $('#nossos-relogios').addClass('apagar');

    }

    if ($("#clocks").offset().top - $(window).scrollTop() < 750) {
        $('#clocks').removeClass('invisible');
        $('#clocks').removeClass('apagar');
        $('#clocks').addClass('acender');
    }
    if ($("#clocks").offset().top - $(window).scrollTop() > 750) {
        $('#clocks').removeClass('acender');
        $('#clocks').addClass('apagar');
    }
});

// console.log($('#clocks').offset().top - $(window).scrollTop())
// console.log($('#nossos-relogios').scrollTop());

$('.nav-link').on('click', function() {
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-toggler').attr('aria-expanded', 'false');
    // $('.navbar-collapse').removeClass('collapse');
    $('.navbar-collapse').removeClass('show');
});