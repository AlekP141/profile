console.log("test")

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

console.log("modal")
