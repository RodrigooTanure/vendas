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

console.log($('#clocks').offset().top - $(window).scrollTop())

console.log($('#nossos-relogios').scrollTop());

// $(window).on("scroll", function(){
//     console.log($('#clocks').offset().top - $(window).scrollTop());
//     if ($("#clocks").offset().top - $(window).scrollTop() < 500) {
//         $('#clocks').removeClass('invisible');
//         $('#clocks').addClass('acender');
//         console.log($("#clocks").offset().top - $(window).scrollTop());
//         console.log("oi")
//     }
// });


/*
      $(window).scroll(function () {
            console.log('Você está na posição ' + $(window).scrollTop());
            if($(window).scrollTop() > 10 && $(window).scrollTop() < 50) {
                $('h1').addClass('selected_section');
                $('div h3 u:eq(0)').removeClass('selected_section');
                $('div h3 u:eq(1)').removeClass('selected_section');
            } 
            if($(window).scrollTop() > 51 && $(window).scrollTop() < 90) {
                $('div h3 u:eq(0)').addClass('selected_section');
                $('div h3 u:eq(1)').removeClass('selected_section');
                $('h1').removeClass('selected_section');
            }
            if($(window).scrollTop() > 91) {
                $('div h3 u:eq(0)').removeClass('selected_section');
                $('div h3 u:eq(1)').addClass('selected_section');
                $('h1').removeClass('selected_section');
            }
        }) 
*/