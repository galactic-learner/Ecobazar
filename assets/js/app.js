let mobileSearch = document.querySelector('.mobile_search');
let searchBody = document.querySelector('#mobile_search');

let searchClose = document.querySelector('.close');


mobileSearch.addEventListener('click', function() {
    searchBody.classList.add('mobile_search_active');

});

searchClose.addEventListener('click', function() {
    searchBody.classList.remove('mobile_search_active');
});