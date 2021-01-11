$(document).ready(function(){

    //*Attivazione freccia scorrimento avanti (dx)
    $('.next i').click(nextImage);

    //*Attivazione freccia scorrimento indietro (sx)
    $('.prev i').click(prevImage);

    //*Attivazione click su barra in basso
    $('.selection_bar .red_bar').click(function(){
    
        var index = $(this).index();

        $('.selection_bar .red_bar.active').removeClass('active');
        $('.img_container .selected_box').removeClass('select');
        
        if ($(this).hasClass('active') == false) {
            $(this).addClass('active');
        }
    
        $('.img_container .img_box.active').removeClass('active');
        $('.cars_container').children().eq(index).addClass('active');
        
        $('.brand_box img.active').removeClass('active');
        $('.brand_box').children().eq(index).addClass('active');
        
        $('.price_box .price.active').removeClass('active');
        $('.price_box').children().eq(index).addClass('active');

    });

    //*Attivazione con press pulsanti tastiera
    $(document).keydown(function(e){
        if (e.which == 39) {
            nextImage();
            $('.img_container .selected_box').removeClass('select');
        } else if (e.which == 37) {
            prevImage();
            $('.img_container .selected_box').removeClass('select');
        } else if (e.which == 13) {
            $('#audio')[0].play();
            $('.img_container .selected_box').addClass('select');
        }  
    });

});

// - FUNZIONI

//Funzione per scorrere le immagini in avanti
function nextImage() {

    var selectedImage = $('.img_container .img_box.active');
        selectedImage.removeClass('active');

        var selectedBar = $('.selection_bar .red_bar.active');
        selectedBar.removeClass('active');

        var selectedLogo = $('.brand_box img.active');
        selectedLogo.removeClass('active');

        var selectedPrice = $('.price_box .price.active');
        selectedPrice.removeClass('active');

        $('.img_container .selected_box').removeClass('select');

        if (selectedImage.hasClass('last')) {
            $('.img_container .img_box.first').addClass('active');
            $('.selection_bar .red_bar.first').addClass('active');
            $('.brand_box img.first').addClass('active');
            $('.price_box .price.first').addClass('active');
        } else {
            selectedImage.next().addClass('active');
            selectedBar.next().addClass('active');
            selectedLogo.next().addClass('active');
            selectedPrice.next().addClass('active');
        }

}

// Funzione per scorrere le immagini indietro
function prevImage() {

    var selectedImage = $('.img_container .img_box.active');
        selectedImage.removeClass('active');

        var selectedBar = $('.selection_bar .red_bar.active');
        selectedBar.removeClass('active');

        var selectedLogo = $('.brand_box img.active');
        selectedLogo.removeClass('active');

        var selectedPrice = $('.price_box .price.active');
        selectedPrice.removeClass('active');

        $('.img_container .selected_box').removeClass('select');

        if (selectedImage.hasClass('first')) {
            $('.img_container .img_box.last').addClass('active');
            $('.selection_bar .red_bar.last').addClass('active');
            $('.brand_box img.last').addClass('active');
            $('.price_box .price.last').addClass('active');
        } else {
            selectedImage.prev().addClass('active');
            selectedBar.prev().addClass('active');
            selectedLogo.prev().addClass('active');
            selectedPrice.prev().addClass('active');
        }

}
