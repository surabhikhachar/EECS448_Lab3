var index = 1;
displayIMG(index);

function goNext(n) {
  displayIMG(index += n);
}

function displayIMG(n) {
  var currentSlide = document.getElementsByClassName("slides");
  if (n > currentSlide.length) {
    index = 1}
  if (n < 1) {
    index = currentSlide.length}
  for (i = 0; i < currentSlide.length; i++) {
     currentSlide[i].style.display = "none";
  }
  currentSlide[index-1].style.display = "block";
}
