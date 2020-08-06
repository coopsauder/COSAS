// javascript for disappearing and reappearing navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
    $('.email').on('click', function() {
        $('.email').popover('toggle')
    })

    ScrollReveal({ mobile:false }).reveal('.navigation', { duration: 1000, interval: 200 })
    ScrollReveal().reveal('.home', { duration: 5000 })
    ScrollReveal().reveal('.about-scene', { duration: 3000 })
    ScrollReveal().reveal('.about', { duration: 5000 })
    ScrollReveal().reveal('.initiatives', { duration: 4000, interval: 300 })
    ScrollReveal().reveal('.events', { duration: 3000, interval: 250 })
    ScrollReveal().reveal('.team', { duration: 3000, interval: 250 })
    ScrollReveal().reveal('.contact', { duration: 3000 })
})
    


