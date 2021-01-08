$(document).ready(function(){

    //*Attivazione freccia scorrimento avanti (dx)
    $('.next i').click(function(){
        var selectedImage = $('.img_container img.active');
        selectedImage.removeClass('active');

        if (selectedImage.hasClass('last')) {
            $('.img_container img.first').addClass('active')
        } else {
            selectedImage.next().addClass('active');
        }
    });

    //*Attivazione freccia scorrimento indietro (sx)
    $('.prev i').click(function(){
        var selectedImage = $('.img_container img.active');
        selectedImage.removeClass('active');

        if (selectedImage.hasClass('first')) {
            $('.img_container img.last').addClass('active')
        } else {
            selectedImage.prev().addClass('active');
        }
    });

});