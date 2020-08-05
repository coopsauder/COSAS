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
    $('#email').on('click', function() {
        $('#email').popover('toggle')
    })
})
    
