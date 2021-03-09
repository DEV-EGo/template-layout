// modal open

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// close the modal 
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous controls
function plusSlides (n) {
    showSlides(slideIndex += n);
}