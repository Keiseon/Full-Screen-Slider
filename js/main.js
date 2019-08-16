const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false; // Set this true to auto run slide
const intervalTime = 3000;
let slideInterval;

// Arrow function for Next
// We need this method to control the slides
const nextSlide = () => {
  // Get the current class
  const current = document.querySelector(".current");

  // Remove the current class
  current.classList.remove("current");

  //   Check for next slide
  if (current.nextElementSibling) {
    //Add the ".current" class to the next slide sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // when you reach the end of the list of slides add the ".current" class back to the start
    slides[0].classList.add("current");
  }

  //Delay then Remove the current class again
  setTimeout(() => current.classList.remove("current"));
};

// Arrow function for Prev
// We need this method to control the slides
const prevSlide = () => {
  // Get the current class
  const current = document.querySelector(".current");

  // Remove the current class
  current.classList.remove("current");

  //   Check for Previous slide
  if (current.previousElementSibling) {
    //Add the ".current" class to the Previous slide sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // when you reach the beginning of the list of slides add the ".current" class back to the end sibling
    slides[slides.length - 1].classList.add("current");
  }

  //Delay then Remove the current class again
  setTimeout(() => current.classList.remove("current"));
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
