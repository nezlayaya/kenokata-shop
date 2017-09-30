'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let mobileMenu = document.querySelector('.mobile-menu');
    let mainMenu = document.querySelector('.main-menu');
    mobileMenu.addEventListener('click',function () {
        mainMenu.style.display= 'block';
    });
});
