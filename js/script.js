$(document).ready(function(){

    $('.next i').click(function(){
        var selectedImage = $('.img_container img.active');
        selectedImage.removeClass('active');
        selectedImage.next().addClass('active');
    });

});