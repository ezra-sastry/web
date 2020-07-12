function openClose() {
    openCloseOverlay();
}

function openCloseOverlay() {
    document.querySelector(".menu-icon").classList.toggle("change");
    document.querySelector(".overlay").classList.toggle("open");
    closeModal();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot-active";
}

function thankYou() {
    var x = document.querySelector("#snackbar");
    x.className = "showThanks"
    setTimeout(function(){x.className = x.className.replace("show", "");}, 3000);
}

function copyText() {
    var range = document.createRange();
    range.selectNode(document.getElementById("desc-text"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    var tooltipText = document.getElementById("copyTooltip");
    tooltipText.innerHTML = "Copied";
}

function setCopyText() {
    var tooltipText = document.getElementById("copyTooltip");
    tooltipText.innerHTML = "Copy";
}

var modal = document.getElementById("html5");

function showModal() {
    // modal.querySelector(".modal-content").classList.remove("zoomin");
    // modal.querySelector(".modal-content").classList.add("zoomout");
    modal.style.display = "block";
}

window.onclick = function(event) {
    if(event.target == modal) {
        hideModal();
    }
}

function hideModal() {
    // modal.querySelector(".modal-content").classList.remove("zoomout");
    modal.style.display = "none";
    // modal.querySelector(".modal-content").classList.remove("zoomin");
}
modal.querySelector(".modal-content").classList.add("zoomin");

// function clearInput(x) {
//     x = x.previousSibling.value;
//     x = x[0].value;
//     console.log(x);
//     document.querySelectorAll('.field')[0].value = '';
// }

