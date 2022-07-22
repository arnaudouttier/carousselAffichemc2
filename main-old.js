import './style.css'

const afficheItems = document.querySelectorAll('.affiche-item');
const precButton = document.querySelector('.affiche-btn-left');
const nextButton = document.querySelector('.affiche-btn-right')
let currentSlide = 0;
let maxItem = afficheItems.length - 1;

const moveItem = (crSlide) => {
  afficheItems.forEach((afficheItem, indx) => {
    const itemWidth = afficheItem.offsetWidth;

    afficheItem.style.transform = `translateX(${(indx - crSlide) * itemWidth}px)`;
  });
}


nextButton.addEventListener('click', () => {

  if (currentSlide == maxItem) {
    currentSlide = 0
  }
  else {
    currentSlide++;
  }

  moveItem(currentSlide)

})


precButton.addEventListener('click', () => {

  if (currentSlide == 0) {
    currentSlide = maxItem
  }
  else {
    currentSlide--
  }

  moveItem(currentSlide)
})
