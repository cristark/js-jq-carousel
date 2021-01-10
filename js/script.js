$(document).ready(function(){

    //*Attivazione freccia scorrimento avanti (dx)
    $('.next i').click(function(){
        var selectedImage = $('.img_container .img_box.active');
        selectedImage.removeClass('active');

        var selectedBar = $('.selection_bar .red_bar.active');
        selectedBar.removeClass('active');

        var selectedLogo = $('.brand_box img.active');
        selectedLogo.removeClass('active');

        if (selectedImage.hasClass('last')) {
            $('.img_container .img_box.first').addClass('active');
            $('.selection_bar .red_bar.first').addClass('active');
            $('.brand_box img.first').addClass('active');
        } else {
            selectedImage.next().addClass('active');
            selectedBar.next().addClass('active');
            selectedLogo.next().addClass('active');
        }
    });

    //*Attivazione freccia scorrimento indietro (sx)
    $('.prev i').click(function(){
        var selectedImage = $('.img_container .img_box.active');
        selectedImage.removeClass('active');

        var selectedBar = $('.selection_bar .red_bar.active');
        selectedBar.removeClass('active');

        var selectedLogo = $('.brand_box img.active');
        selectedLogo.removeClass('active');

        if (selectedImage.hasClass('first')) {
            $('.img_container .img_box.last').addClass('active');
            $('.selection_bar .red_bar.last').addClass('active');
            $('.brand_box img.last').addClass('active');
        } else {
            selectedImage.prev().addClass('active');
            selectedBar.prev().addClass('active');
            selectedLogo.prev().addClass('active');
        }
    });

    //*Attivazione click su barra in basso
    $('.selection_bar .red_bar').click(function(){
    
        var index = $(this).index();

        $('.selection_bar .red_bar.active').removeClass('active');
        
        if ($(this).hasClass('active') == false) {
            $(this).addClass('active');
        }
    
        $('.img_container .img_box.active').removeClass('active');
        $('.img_container').children().eq(index).addClass('active');
        
        $('.brand_box img.active').removeClass('active');
        $('.brand_box').children().eq(index).addClass('active');

    });

    //*Attivazione con press pulsanti tastiera


});