
$(function () {

    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px"
    });
    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
    });


    var mixer = mixitup('.product__inner-box');

});