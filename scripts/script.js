$(document).ready(function () {
    'use strict';

    let headerMenu = $('#header-menu');

    $('#macaroons').click(() => {
        headerMenu.addClass('open');
    });

    $('#header-menu > *').click(() => {
        headerMenu.removeClass('open');
    });

    let loader = $('.loader');

    $('#submit').click(function () {
        let product = $('#product');
        let name = $('#name');
        let phone = $('#phone');
        let hasError = false;

        $('.error-input').hide();
        $('.block4-form-input').css('border-color', 'rgb(130, 19, 40)');

        if (!product.val()) {
            product.css('border-color', 'red');
            product.next().show();
            hasError = true;
        }
        if (!name.val()) {
            name.css('border-color', 'red');
            name.next().show();
            hasError = true;
        }
        if (!phone.val()) {
            phone.css('border-color', 'red');
            phone.next().show();
            hasError = true;
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {product: product.val(), name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    // console.log(msg);
                    loader.hide();
                    if (msg.success) {
                        $('.block4-form').hide();
                        $('.block4-form-change').css('display', 'flex');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                });
        }
    });
});