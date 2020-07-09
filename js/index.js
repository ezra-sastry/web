function openClose() {
    openCloseOverlay();
}

function openCloseOverlay() {
    document.querySelector(".menu-icon").classList.toggle("change");
    document.querySelector(".overlay").classList.toggle("open");
    closeModal();
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
    // document.getElementById("html5").style.display = "block";
    modal.style.display = "block";
}

window.onclick = function(event) {
    if(event.target == modal) {
        closeModal();
    }
}

function closeModal() {
    modal.style.display = "none";
}
