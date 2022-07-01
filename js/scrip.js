$(document).ready(function(){
    //agregando clase active al primer enlace
    $('.productos .categoria-productos[category="todo"]').addClass('.ct_item-active');

    $('.categoria-productos').click(function(){
        var catProduct = $(this).attr('category');
		console.log(catProduct);

        $('.categoria-productos').removeClass('.ct_item-active');
        $(this).addClass('.ct_item-active');
        
        // OCULTANDO PRODUCTOS =========================
        $('.producto-item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.producto-item').hide();
        }setTimeout(hideProduct,100);

        // MOSTRANDO PRODUCTOS =========================
        function showProduct(){
            $('.producto-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
            $('.producto-item[category="'+catProduct+'"]').show();
        }setTimeout(showProduct,100);
    });
    
    $('.categoria-productos[category="todo"]').click(function(){
        function showAll(){
            $('.producto-item').show();
            $('.producto-item').css('transform', 'scale(1)')
        }setTimeout(showAll,100);
    })
});