let navBar = document.querySelector(".nav-bar");
let menuBtn = document.querySelector("#menu-btn");

// menu button working js
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});

//header working js
window.addEventListener('scroll', () => {
    let header = document.querySelector(".header");
    if(window.scrollY > 0) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    };
    
    let textScroll = window.pageYOffset;
    if(textScroll <= 300) {
        opacity = 1 - textScroll / 300
    } else {
        opacity = 0
    };
    document.querySelector(".content").style.opacity = opacity;
})

