const images = document.querySelectorAll(".image");
const prevBTN = document.getElementById("prev-btn");
const nextBTN = document.getElementById("next-btn");

let currentSlide = 0;

const hideSlide = () => {
  images.forEach(item => item.classList.remove("active"));
}

const showSlide = () => {
  images[currentSlide].classList.add("active");
}

const nextSlide = () => {
  hideSlide();
  
  if (currentSlide === images.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  
  showSlide();
}

const prevSlide = () => {
  hideSlide();
  
  if (currentSlide === 0) {
    currentSlide = images.length -1;
  } else {
    currentSlide--;
  }
  
  showSlide();
}

prevBTN.addEventListener("click", prevSlide);
nextBTN.addEventListener("click", nextSlide);

setInterval(nextSlide, 5000);
