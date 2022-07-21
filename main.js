import './style.css'

// const afficheButtonLeft = document.querySelector('.affiche-btn-left');
// const afficheButtonRght = document.querySelector('.affiche-btn-right');

// afficheButtonLeft.addEventListener('click', () => {
//   alert('Evenement Boutton')
// })


const afficheButtons = document.querySelectorAll('.affiche .btn');

afficheButtons.forEach((element) => {
  console.log(element.addEventListener('click', show)
});