//
// // scroll to specific area of page
//
// window.scroll({
//   top: 2500,
//   left: 0,
//   behavior: smooth
// })
//
// // Scroll certain amounts from current position
// window.scrollBy({
//   top: 100,
//   left: 0,
//   behavior: 'smooth'
// });
//
// // Scroll to certain element
//
// document.querySelector()

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
