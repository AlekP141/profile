console.log("test")

window.onload =() => {
  console.log("moving")
  window.scrollTo(0, 0);
}

const light = document.querySelector("#light")
const dark = document.querySelector("#dark")

light.addEventListener("click", (e) => {
  document.querySelectorAll(".primary").forEach(el => {
    el.style.color = "#151515"
  })
  document.querySelectorAll(".primary-border").forEach(el => {
    el.style.borderColor = "#151515"
  })
  document.querySelectorAll(".secondary").forEach(el => {
    el.style.color = "#ebebeb"
  })
  document.querySelectorAll(".secondary-background").forEach(el => {
    el.style.backgroundColor = "#ebebeb"
  })
  dark.classList.toggle("current-toggle")
  light.classList.toggle("current-toggle")

});

dark.addEventListener("click", (e) => {
  document.querySelectorAll(".primary").forEach(el => {
    el.style.color = "#ebebeb"
  })
  document.querySelectorAll(".primary-border").forEach(el => {
    el.style.borderColor = "#ebebeb"
  })
  document.querySelectorAll(".secondary").forEach(el => {
    el.style.color = "#151515"
  })
  document.querySelectorAll(".secondary-background").forEach(el => {
    el.style.backgroundColor = "#151515"
  })
  dark.classList.toggle("current-toggle")
  light.classList.toggle("current-toggle")
});


// MODAL

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

console.log("modal");


// PROJECT CARD

const projectCard = document.querySelectorAll(".project-card");

projectCard.forEach(el => {
  console.log(el)
  el.addEventListener("click", (e) => {
    const info = el.querySelector(".more-info")
    info.classList.toggle("hidden")
    // const title = el.querySelector(".card-title")
    // if (title.style.paddingBottom === "2.5rem") {
    //   console.log(title.style.paddingBottom)
    //   console.log("if")
    //   title.style.paddingBottom = "1.5rem"
    // } else {
    //   console.log(title.style.paddingBottom)
    //   console.log("else")
    //   title.style.paddingBottom = "2.5rem"
    // }
  });
});

const experienceToggle = document.querySelector("#experience-toggle")
const allExperience = document.querySelector(".all-experience")
experienceToggle.addEventListener("click", (e) => {
  allExperience.classList.toggle("hidden")
  if (experienceToggle.innerHTML === "Show All") {
    experienceToggle.innerHTML = "Collapse"
  } else {
    experienceToggle.innerHTML = "Show All"
  }
})

const educationToggle = document.querySelector("#education-toggle")
const allEducation = document.querySelector(".all-education")
educationToggle.addEventListener("click", (e) => {
  allEducation.classList.toggle("hidden")
  if (educationToggle.innerHTML === "Show All") {
    educationToggle.innerHTML = "Collapse"
  } else {
    educationToggle.innerHTML = "Show All"
  }
})


const downArrow = document.querySelector(".down-arrow")
downArrow.addEventListener("click", (e) => {
  window.scrollBy(0, window.innerHeight)
})


const returnTop = document.querySelector(".return")
returnTop.addEventListener("click", (e) => {
  window.scrollTo(0, 0)
})
