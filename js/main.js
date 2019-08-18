const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const content = document.querySelectorAll(".content");
const auto = true; // Set this true to auto run slide
const intervalTime = 6000;
let slideInterval;

// Arrow function for Next
// We need this method to control the slides
const nextSlide = () => {
  // Get the current class
  const current = document.querySelector(".current");
  const slideRightAnime = document.querySelector(".slide-right-anime");

  // Remove the current class
  current.classList.remove("current");
  slideRightAnime.classList.remove("slide-right-anime");

  //   Check for next slide
  if (current.nextElementSibling) {
    //Add the ".current" class to the next slide sibling
    current.nextElementSibling.classList.add("current");
    current.nextElementSibling.firstElementChild.classList.add(
      "slide-right-anime"
    );
  } else {
    // when you reach the end of the list of slides add the ".current" class back to the start
    slides[0].classList.add("current");
    content[0].classList.add("slide-right-anime");
  }

  //Delay then Remove the current class again
  setTimeout(() => current.classList.remove("current"));
};

// Arrow function for Prev
// We need this method to control the slides
const prevSlide = () => {
  // Get the current class
  const current = document.querySelector(".current");
  const slideRightAnime = document.querySelector(".slide-right-anime");

  // Remove the current class
  current.classList.remove("current");
  slideRightAnime.classList.remove("slide-right-anime");

  //   Check for Previous slide
  if (current.previousElementSibling) {
    //Add the ".current" class to the Previous slide sibling
    current.previousElementSibling.classList.add("current");
    current.previousElementSibling.firstElementChild.classList.add(
      "slide-right-anime"
    );
  } else {
    // when you reach the beginning of the list of slides add the ".current" class back to the end sibling
    slides[slides.length - 1].classList.add("current");
    content[content.length - 1].classList.add("slide-right-anime");
  }

  //Delay then Remove the current class again
  setTimeout(() => current.classList.remove("current"));
  setTimeout(() => slideRightAnime.classList.remove("slide-right-anime"));
};

// Button Events that call your functions
next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    //   Clear the interval
    clearInterval(slideInterval);
    // Run the Next Slide at interval Time
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    //   Clear the interval
    clearInterval(slideInterval);
    // Run the Previous Slide at interval Time
    slideInterval = setInterval(prevSlide, intervalTime);
  }
});

// Setup Auto Slide Feature
if (auto) {
  // Run the Next Slide at interval Time
  slideInterval = setInterval(nextSlide, intervalTime);
}
