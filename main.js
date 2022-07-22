import './style.css'

const afficheItems = document.querySelectorAll('.affiche-item');
const precButton = document.querySelector('.affiche-btn-left');
const nextButton = document.querySelector('.affiche-btn-right')
let currentSlide = 0;
let maxItem = afficheItems.length;


function setClasses() {

  afficheItems[currentSlide - 1].classList.add("prev");
  afficheItems[currentSlide].classList.add("active");
  afficheItems[currentSlide + 1].classList.add("next");
}

function rmClasses() {

  afficheItems[currentSlide - 2].classList.remove("prev");
  afficheItems[currentSlide - 1].classList.remove("active");
  afficheItems[currentSlide].classList.remove("next");
}

nextButton.addEventListener('click', () => {

  if (currentSlide == maxItem) {
    currentSlide = 0
  }
  else {
    currentSlide++
  }

  setClasses()
  rmClasses()

})