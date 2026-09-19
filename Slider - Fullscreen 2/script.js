const body = document.body;
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const indicators = document.querySelectorAll('.indicator')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  updateSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  updateSlide()
})





indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    activeSlide = index
    updateSlide()
  })
})




function updateSlide() {
  setBgToBody()
  setActiveSlide()
  setActiveIndicator()
}

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
}

function setActiveIndicator() {
  indicators.forEach((indicator) => indicator.classList.remove('active'))
  indicators[activeSlide].classList.add('active')
}


setBgToBody()
setActiveSlide()
setActiveIndicator()
