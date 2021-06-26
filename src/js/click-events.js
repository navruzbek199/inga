let ham = document.querySelector('.ham');
let hiddenNav = document.querySelector('.app-navbar');
let socialIcons = document.querySelectorAll('.social-ico');

ham.addEventListener('click', () => {
    hiddenNav.classList.toggle('active');
    for(let i=0; i < socialIcons.length; i++) {
        socialIcons[i].classList.toggle('active');
    }
});

$('.app-nav-link').on('click', () => {
    $('.ham').removeClass('active');
    $('.app-navbar').removeClass('active');
    $('.socialIcons').removeClass('active');
});