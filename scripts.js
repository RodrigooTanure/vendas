$(window).scroll(function() {
    console.log($(window).scrollTop())
    if($(window).scrollTop() > 145) {
        $('.relogios').addClass('acender');
    }
});


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