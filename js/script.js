$(document).ready(function(){

    //*Attivazione freccia scorrimento avanti (dx)
    $('.next i').click(function(){
        var selectedImage = $('.img_container img.active');
        selectedImage.removeClass('active');

        var selectedBar = $('.selection_bar .red_bar.active');
        selectedBar.removeClass('active');

        if (selectedImage.hasClass('last')) {
            $('.img_container img.first').addClass('active');
            $('.selection_bar .red_bar.first').addClass('active');
        } else {
            selectedImage.next().addClass('active');
            selectedBar.next().addClass('active');
        }
    });

    //*Attivazione freccia scorrimento indietro (sx)
    $('.prev i').click(function(){
        var selectedImage = $('.img_container img.active');
        selectedImage.removeClass('active');

        var selectedBar = $('.selection_bar .red_bar.active');
        selectedBar.removeClass('active');

        if (selectedImage.hasClass('first')) {
            $('.img_container img.last').addClass('active');
            $('.selection_bar .red_bar.last').addClass('active');
        } else {
            selectedImage.prev().addClass('active');
            selectedBar.prev().addClass('active');
        }
    });

});