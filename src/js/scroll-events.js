let header = document.querySelector('header');
let socialBlock = document.querySelector('.app-social');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        socialBlock.classList.add('hide');
    } else {
        socialBlock.classList.remove('hide');
    }
});