// ================scroll nav====================
var navbar = document.getElementById("navbar");
    var menus = document.getElementById("menus");

    window.onscroll = function(){
        if(window.pageYOffset >= menus.offsetTop){
            navbar.classList.add("sticky");
        }else{
            navbar.classList.remove("sticky");
        }
    }

    // ====================swiper ----------------------
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });