function openClose() {
    openCloseOverlay();
}

function openCloseOverlay() {
    document.querySelector(".menu-icon").classList.toggle("change");
    document.querySelector(".overlay").classList.toggle("open");
}

function thankYou() {
    var x = document.querySelector("#snackbar");
    x.className = "showThanks"
    setTimeout(function(){x.className = x.className.replace("show", "");}, 3000);
}
