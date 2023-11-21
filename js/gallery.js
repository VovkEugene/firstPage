const ACTIVE_SLIDE = "gallery__slide_active";

const slides = Array.from(document.querySelectorAll(".gallery__slide"));
const prevButton = document.querySelector(".arrows-prev");
const nextButton = document.querySelector(".arrows-next");
let activeIndex;

init();

function init() {
  activeIndex = 0;

  prevButton.addEventListener("click", () => {
    setActiveSlideByIndex(getPrevIndex());
  });

  nextButton.addEventListener("click", () => {
    setActiveSlideByIndex(getNextIndex());
  });
}

function setActiveSlideByIndex(index) {
  const currentIndex = activeIndex;
  activeIndex = index;

  slides[currentIndex].classList.remove(ACTIVE_SLIDE);
  slides[activeIndex].classList.add(ACTIVE_SLIDE);
}

function getPrevIndex() {
  return activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
}

function getNextIndex() {
  return activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
}
