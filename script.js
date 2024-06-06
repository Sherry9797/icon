function enlargeImage(element) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = element.getElementsByTagName("img")[0].src;
    captionText.innerHTML = element.getElementsByTagName("p")[0].innerHTML;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
