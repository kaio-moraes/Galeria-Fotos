$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const endeNovaImg = $('#endereço-img-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endeNovaImg}" />`).appendTo(novoItem);
        $(`<div class="overlay-img-link"> 
            <a href="${endeNovaImg}" title="ver imagem em tamanho real" target="_blank">ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-img-nova').val('');
    });
});