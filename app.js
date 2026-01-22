document.addEventListener('DOMContentLoaded', () => { });
const iconChange = document.querySelectorAll('.wrong-icon');
const stepBox = document.querySelectorAll('.step');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentStep = 1;

rightBtn.addEventListener('click', () => {
  if (currentStep < stepBox.length) {
    stepBox[currentStep].classList.add('active');
    iconChange[currentStep - 1].innerHTML = '&#10003;';
    currentStep++;
    if (currentStep > 1) {
      leftBtn.classList.remove('disabled');
    }
    if (currentStep === stepBox.length) {
      rightBtn.classList.add('disabled');
    }
  }
});

leftBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    stepBox[currentStep - 1].classList.remove('active');
    iconChange[currentStep - 2].innerHTML = '&#10005;';
    currentStep--;
    if (currentStep === 1) {
      leftBtn.classList.add('disabled');
    }
    if (currentStep < stepBox.length) {
      rightBtn.classList.remove('disabled');
    }
  }
});

