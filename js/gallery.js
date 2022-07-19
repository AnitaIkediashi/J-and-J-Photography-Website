let navBar = document.querySelector(".nav-bar");
let menuBtn = document.querySelector("#menu-btn");

//navbar working js
let activePage = window.location.pathname;
let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add("active")
    };
});

// menu button working js
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});

//lightbox gallery working js
lightGallery(document.querySelector(".image-box"))