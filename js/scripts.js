new WOW().init();

let questionBox = Array.from(document.getElementsByClassName('questionBox'));

questionBox.forEach((item) => {
    item.addEventListener('click', function() {
        // item.getElementsByClassName('questionDesc')[0].classList.toggle('active');
        item.querySelector('img').classList.toggle('active');
    })
})