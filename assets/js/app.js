$(function () {
    let mobileSearch = document.querySelector('.mobile_search');
    let searchBody = document.querySelector('#mobile_search');

    let searchClose = document.querySelector('.close');


    mobileSearch.addEventListener('click', function () {
        searchBody.classList.add('mobile_search_active');

    });

    searchClose.addEventListener('click', function () {
        searchBody.classList.remove('mobile_search_active');
    });

    // banner slider
    $('.parent_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<span class="right"><iconify-icon icon="prime:arrow-right" width="24" height="24"></iconify-icon></span>',
        prevArrow: '<span class="left"><iconify-icon icon="prime:arrow-left" width="24" height="24"></iconify-icon></span>',
    });

    // category filter
    $('.category-button').categoryFilter();

    // Enable tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // ad (not fully integrated)
    window.addEventListener('load', function () {
        setTimeout(function () {
            document.querySelector('.ad').classList.add('ad-active');
        }, 2000);
    });

    // timer
    $("#getting-started")
        .countdown("2026/02/01", function (event) {
            // $(this).text(event.strftime('%W weeks %D days %H:%M:%S'));
            $('.sec').text(event.strftime('%S'));
            $('.min').text(event.strftime('%M'));
            $('.hour').text(event.strftime('%H'));
            $('.day').text(event.strftime('%D'));
        });

    // ad section
    // window.addEventListener('load', function () {

    // }


    // zoom
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        dots: false,
        centerMode: false,
        centerPadding: '0px',
        arrows: true,
        prevArrow: '<span class="top"><iconify-icon icon="iconamoon:arrow-up-2-thin" width="24" height="24"></iconify-icon></span>',
        nextArrow: '<span class="down"><iconify-icon icon="iconamoon:arrow-down-2-thin" width="24" height="24"></iconify-icon></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: false,
                arrows: false,
                }
            },
        ]
    });

    // ZOOMSL
    $(function(){
        $(".example").imagezoomsl();
    });


});








