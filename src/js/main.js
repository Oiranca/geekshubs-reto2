let slideIndex = 1;
createDotElement();
showSlides(slideIndex);

let buttonNext = document
  .getElementById("next")
  .addEventListener("click", () => {
    let n = 1;
    showSlides((slideIndex += n));
  });

let buttonPrev = document
  .getElementById("prev")
  .addEventListener("click", () => {
    let n = -1;
    showSlides((slideIndex += n));
  });
  function createDotElement() {
    let n =document.getElementsByClassName("mySlides");
    for (a = 0; a < n.length; a++) {
      let elemento = document.createElement("SPAN");
      let att = document.createAttribute("class");
      att.value = "dot";
      elemento.setAttributeNode(att);
      document.getElementById("dotCount").appendChild(elemento);
    }
  }
function showSlides(n) {
  let slides =document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


