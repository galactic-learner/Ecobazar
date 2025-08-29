$(function () {
    let mobileSearch = document.querySelector('.mobile_search');
    let searchBody = document.querySelector('#mobile_search');
    
    let searchClose = document.querySelector('.close');
    
    
    mobileSearch.addEventListener('click', function() {
        searchBody.classList.add('mobile_search_active');
    
    });
    
    searchClose.addEventListener('click', function() {
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
});








